import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Router from 'next/router'
import { gql, useQuery } from '@fortawesome/fontawesome-free'
import Cookies from 'universal-cookie'



const Noticia = ({noticia}) => {
    const { id, titulo, resumen, contenido, imagen, categoria } = noticia
    
    const cookie = new Cookies()
    // const idN = cookie.get({id})

    const verNoticia = () => {
        Router.push({
            pathname: "/noticia/[id]",
            query: { id }
        })
        cookie.set('idNew', id, { path: '/noticia/[id]' });
    }

    

    return (
            <div className="px-3 py-4 lg:w-1/3 md:w-1/2 flex items-center justify-center">
                <div className="max-w-md h-full">
                    <div className="relative overflow-hidden shadow-lg">
                    <img
                        className="w-full h-32"
                        src={`http://localhost:1337${imagen.url}`}
                        alt="{titulo}"
                    />
                    <div className="bg-white w-28 h-8 absolute -mt-8 right-0 mr-8 rounded-t">
                        <FontAwesomeIcon size='lg' className="text-blue-400 mx-2 mt-2" icon={faTwitter} />
                        <FontAwesomeIcon size='lg' className="text-blue-700 mr-2 mt-2" icon={faFacebook} />
                        <FontAwesomeIcon size='lg' className="text-green-400 mr-2 mt-2" icon={faWhatsapp} />
                    </div>
                    <div className="px-4 py-4 bg-white h-32">
                        <p className="text-gray-500 text-md">{categoria.nombre}</p>
                        <div 
                            className="font-bold lg:text-md md:text-base xs:text-xs mb-2 leading-none font-body"
                            onClick={() => verNoticia()}
                        >
                        {titulo.slice(0,100)}
                        </div>
                        {/* <p className="text-gray-700 text-sm">
                            {resumen.slice(0,150)}
                        </p> */}
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Noticia