import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Cookies from 'universal-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router' 

const USER = gql`
    query user($id: ID!){
        user(id: $id){
        id
        nombre
        apellido
        avatar{
            id
            url
        }
        }
    }
`

const Header = () => {

    const router = useRouter()

    const cookie = new Cookies()

    const id = cookie.get("id")

    const [isOn, setIsOn] = useState(false)

    const { data, loading, error } = useQuery(USER, {
        variables: {
            id
        }
    })

    if (loading) return null
    // console.log(data.user.imagen)

    

    const isOpen = () => {
        return setIsOn(true)
    }
    

    const cerrarSession = () => {
        cookie.remove('id', { path: '/' });
        router.push('/')
    }
    // 
    

    return(
        <nav className="bg-gray-400 mb-3">
            <ul className="flex justify-end pr-20">
                <li className="py-5">{data.user.nombre} {data.user.apellido}</li>
                <li className="relative py-5 mx-5">
                    <button onClick={() => setIsOn(!isOn)} className="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-400 focus:outline-none focus:border-white">
                    { data.user.avatar === null ? (
                        <img className="h-full w-full object-cover" src="/1.png" alt="Avatar perfil"/>
                    ) : (
                        <img className="h-full w-full object-cover" src={`http://localhost:1337${data.user.avatar.url}`} alt="Avatar perfil"/>
                    ) }
                    </button>
                    { isOn === true ? (
                        <div className="absolute right-0 py-2 mt-2 w-40 bg-white rounded-lg shadow-xl">
                            <Link href="/perfil">
                                <a className="block px-4 py-1 text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer">Mi Perfil</a>
                            </Link>
                            <a className="block px-4 py-1 text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer">Mensajes</a>
                            <a onClick={() => cerrarSession()} className="block px-4 py-1 text-gray-800 hover:bg-green-500 hover:text-white cursor-pointer">Cerrar Sessión</a>
                        </div>
                    ) : (
                        <div className="hidden absolute right-0 py-2 mt-2 w-40 bg-white rounded-lg shadow-xl">
                            <a className="block px-4 py-1 text-gray-800 hover:bg-green-500 hover:text-white">Mi Perfil</a>
                            <a className="block px-4 py-1 text-gray-800 hover:bg-green-500 hover:text-white">Mensajes</a>
                            <a className="block px-4 py-1 text-gray-800 hover:bg-green-500 hover:text-white">Cerrar Sessión</a>
                        </div>
                    )}
                    
                </li>
            </ul>
        </nav>
    )
}

export default Header