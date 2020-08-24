import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Select, { Option, ReactSelectProps } from 'react-select'
import { Formik, Form } from 'formik'
import { gql, useQuery, useMutation } from '@apollo/client'
import SubirImagen from '../../components/perfil/SubirImagen'
import Cookies from 'universal-cookie'

const USER = gql`
    query user($id: ID!){
        user(id: $id){
            id
            username
            email
            nombre
            apellido
            email
            avatar{
                id
                name
                mime
                url
                formats
                hash
            }
        }
    }
`

const UPDATE_USER = gql`
    mutation updateUser($input: updateUserInput){
        updateUser(input: $input){
            user{
                id
                username
                email
                nombre
                apellido
                avatar{
                    id
                    name
                    size
                }
            }
        }
    }
`

const EditarPerfil = () => {

    const cookie = new Cookies()

    const idImagen = cookie.get("idImagen")
    console.log("IdImagen: " + idImagen)

    const router = useRouter()
    const { query: {id} } = router

    const { data, loading, error } = useQuery(USER, {
        variables: {
            id
        }
    })


    
    const [updateUser] = useMutation(UPDATE_USER)

    if (loading) return "Cargando..."
    // console.log(data)
    if (error) return console.log(error)

    // console.log(empresas.data)
    const { user } = data
    // console.log(user)

    // Actualizar la data de los usuarios
    const actualizarUsuario = async valores => {
        const { nombre, apellido, username, email, avatar } = valores
        try {
            const { data } = await updateUser({
                variables: {
                    input:{
                        where: {
                            id
                        },
                        data: {
                            nombre, 
                            apellido, 
                            username, 
                            email, 
                            avatar: idImagen
                        }
                    }
                }
            })
            router.push('/perfil')
            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
    }

    const onImageChange = e => {
        console.log(e.currentTarget.files[0])
    }

    return(
        <Layout>
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-4xl">
                <Formik
                    enableReinitialize
                    initialValues = { user }
                    onSubmit={(valores, funciones) => {
                        console.log(valores.avatar)
                        actualizarUsuario(valores)
                    }}
                >
                { props => {
                    const { setFieldValue } = props

                    return(


                        <Form
                            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={props.handleSubmit}
                        >
                            <p className="my-2 bg-white border-l-4 border-green-600 text-gray-700 p-2 text-sm font-bold">Actualizar datos de tu perfil</p>
                            <div className="flex justify-center my-3">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Nombre"
                                    onChange={props.handleChange}
                                    // onBlur={props.handleChange}
                                    // onChange={ e => setNombre(e.target.value)}
                                    defaultValue={props.values.nombre}
                                />
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="apellido"
                                    type="text"
                                    placeholder="Apellido"
                                    onChange={props.handleChange}
                                    // onBlur={props.handleChange}
                                    // onChange={ e => setNombre(e.target.value)}
                                    value={props.values.apellido}
                                />
                            </div>
                            <div className="flex justify-center my-3">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Nombre de usuario"
                                    onChange={props.handleChange}
                                    // onBlur={props.handleChange}
                                    // onChange={ e => setNombre(e.target.value)}
                                    value={props.values.username}
                                />
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Correo electrónico"
                                    onChange={props.handleChange}
                                    // onBlur={props.handleChange}
                                    // onChange={ e => setNombre(e.target.value)}
                                    value={props.values.email}
                                />
                            </div>
                            <div className="flex justify-between mt-3">
                                {/* <div className="form-group">
                                    <label>Subir avatar: </label>
                                    <input id="avatar" name="avatar" type="file" 
                                        onChange={(event) => { setFieldValue("avatar", event.currentTarget.files[0]); console.log(event.currentTarget.files[0]); console.log(avatar) }} 
                                        // onChange={(event) => { setFieldValue("avatar", event.currentTarget.files[0]); }} 
                                        className="form-control" 
                                        // value={props.values.avatar.url}
                                        />
                                </div> */}
                                <SubirImagen />
                            </div>
                            <input
                                type="submit"
                                className="bg-green-600 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-green-700"
                                value="Actualizar Datos"
                            />
                            
                        </Form>
                    )
                    }}

                </Formik>
                </div>
            </div>
        </Layout>
    )
}

export default EditarPerfil