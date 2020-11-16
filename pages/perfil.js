import React from 'react'
import Layout from '../components/Layout'
import { gql, useQuery } from '@apollo/client'
import Cookies from 'universal-cookie'
import Router from 'next/router'
import Link from 'next/link'

const USER = gql`
    query user($id: ID!){
        user(id: $id){
        id
        nombre
        apellido
        username
        email
        avatar{
            id
            url
        }
        }
    }
`


const Perfil = () => {

const cookie = new Cookies()

const id = cookie.get("id")
// const id = localStorage.getItem('id') ? localStorage.getItem('id') : "set your own default value";
// console.log(id)

const { data, loading, error } = useQuery(USER, {
    variables: {
        id
    }
})

if (loading) return "Cargando..."
if (error) return console.log(error)
console.log(data)

const editarPerfil = () => {
    Router.push({
        pathname: "/editarperfil/[id]",
        query: { id }
    })
}


    return (
        <Layout>
            <div className="flex justify-center">
                <div className="md:w-2/5">
                    <div className="max-w-sm m-auto mt-5 rounded shadow-lg overflow-hidden">
                        <img
                            src="https://tailwindcss.com/img/card-top.jpg"
                            alt=""
                            className="w-full h-48"
                        />
                        <div className="flex items-center px-6 py-2">
                        { data.user.avatar === null ? (
                            <img
                                className="absolute -mt-8 block h-32 w-32 rounded-full overflow-hidden border-white border-4 border-solid"
                                src="https://avatars2.githubusercontent.com/u/2674850?v=3&s=100"
                                alt="avatar"
                            />
                            ) : (
                            <img
                                className="absolute -mt-8 h-32 w-32 rounded-full ml-auto mr-auto object-cover border-white border-4 border-solid overflow-hidden"
                                src={data.user.avatar.url}
                                alt="Avatar perfil"
                            />
                        ) }

                        <div className="text-left flex-grow ml-24 pl-8">
                            <div className="mb-4 ml-3">
                            {data.user.nombre || data.user.apellido !== null ? (
                                <p className="text-xl font-bold leading-tight mb-2">{data.user.nombre} {data.user.apellido}</p>
                            ) : (
                                <p className="text-xl font-bold text-red-500 leading-tight mb-2">Actualizar datos</p>
                            ) }
                            
                            <p className="flex text-sm leading-tight text-gray-700">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="h-5 pr-1"><path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                                <p className="text-lg">{data.user.email}</p> 
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex px-6 mb-6">
                        <button
                            type="button"
                            className="w-full mr-1 mt-2 rounded-full px-2 py-1 leading-normal bg-green-600 border border-gray-300 text-white uppercase cursor-pointer"
                            onClick={ () => editarPerfil() }
                        >
                            Editar
                        </button>
                        {/* <button
                            className="w-1/2 ml-1 rounded-full px-2 py-1 leading-normal bg-white border border-gray-300 text-gray-600 hover:bg-blue-600 hover:text-white"
                        >
                            Mensajes
                        </button> */}
                        </div>

                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg p-5 mt-5 ml-5 md:w-3/5">

                </div>
            </div> 
        </Layout>
    )
}

export default Perfil