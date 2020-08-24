import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'

const LOGIN = gql`
    mutation Login($input: UsersPermissionsLoginInput!) {
        login(input: $input) {
            jwt
            user {
                id
                email
                confirmed
                blocked
                role {
                    id
                    name
                    description
                    type
                }
            }
        }
    }
`



const Login = () => {

    const router = useRouter()

    const cookies = new Cookies()

    const [mensaje, guardarMensaje] = useState(null)

    const [login] = useMutation(LOGIN)

    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: Yup.object({
            identifier: Yup.string()
                .required('El campo no puede ir vacio'),  // Aquí igual, si no ponen nada
            password: Yup.string()
                .required('El password es obligatorio')
        }),
        onSubmit: async valores => {
            const { identifier, password } = valores

            try {
                const { data } = await login({
                    variables: {
                        input:{
                            identifier,
                            password
                        }
                    }
                })

                cookies.set('id', data.login.user.id, { path: '/' });
                // localStorage.setItem('id', data.login.user.id)
                // console.log(data.login.jwt)
                // console.log(data.login.user.id)
                guardarMensaje('Autenticando...')

                // Guardar el token en localstorage
                setTimeout(()=>{
                    const { token } = data.login.jwt
                    localStorage.setItem('token', data.login.jwt)
                }, 1000)
                

                // Redireccionar hacia proyectos 
                setTimeout(()=>{
                    guardarMensaje(null)
                    router.push('/perfil')

                }, 2000)

                setTimeout(()=>{
                    guardarMensaje(null)
                }, 2000)
            } catch (error) {
                guardarMensaje(error.message.replace('GraphQL error: ', ''))
                // console.log(error)
                setTimeout(()=>{
                    guardarMensaje(null)
                }, 2500)
            }
        }
    })

    const mostrarMensaje = () => {
        return(
            <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
                <p>{mensaje}</p>
            </div>
        )
    }

    return(
        <>
            <Layout>
            {mensaje && mostrarMensaje() }
                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-sm">
                        <form 
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <h1 className="text-center text-2xl text-green-800 font-weigth mb-8">Login</h1>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identifier">
                                    Usuario o Correo
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="identifier"
                                    type="text"
                                    placeholder="Nombre Usuario"
                                    value= {formik.values.identifier}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            { formik.touched.identifier && formik.errors.identifier ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{ formik.errors.identifier }</p>
                                </div>
                            ) : null }
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password Usuario"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                            </div>
                            { formik.touched.password && formik.errors.password ? (
                                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                    <p className="font-bold">Error</p>
                                    <p>{ formik.errors.password }</p>
                                </div>
                            ) : null }
                            <input
                                type="submit"
                                className="bg-green-600 w-full mt-5 p-2 text-white uppercase hover:bg-green-700"
                                value="Iniciar Sesión"
                            />
                        </form>
                    </div>
                </div>
            </Layout>
        
        </>
    )
}

export default Login