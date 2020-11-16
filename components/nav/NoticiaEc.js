import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import moment from 'moment'
import Router from 'next/router'
import Cookies from 'universal-cookie'


const NoticiaEc = ({noticia}) => {

    const { id, titulo, resumen, contenido, imagen, categoria, created_at } = noticia

    const cookie = new Cookies()

    const verNoticia = () => {
        Router.push({
            pathname: "/economia/[id]",
            query: { id }
        })
        cookie.set('idNew', id, { path: '/economia/[id]' });
    }

    return(
        <div>
            {categoria.nombre === "Economía" ? (
                <div className="bg-white py-2 px-1 lg:max-w-full flex items-center justify-center">
                    <figure className="flex justify-around">

                        <a className="flex w-1/2 cursor-pointer"> 
                            <div>
                                <img
                                    className="w-full"
                                    src={imagen.url}
                                />
                            </div>
                        </a>
                        <div className="w-1/2 ml-2">
                            <a className="cursor-pointer">
                                <figcaption>
                                    <div className="flex justify-between mb-1 sm:mb-2">
                                        <p className="font-mono bg-black text-white px-2 lg:text-base md:text-sm text-xs">{categoria.nombre}</p>
                                    </div>
                                    <div 
                                        className="font-display lg:text-2xl md:text-sm sm:text-xs text-xs leading-none font-bold mb-1 sm:mb-2 hover:text-redancash cursor-pointer"
                                        onClick={() => verNoticia()}
                                        >{titulo.slice(0,70)}...
                                    </div>
                                    <div className="hidden sm:flex md:flex text-gray-600 lg:font-bold md:font-medium sm:font-normal lg:text-base md:text-xs font-thin text-xs my-2"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{moment(created_at).format('LLLL').toUpperCase()}</div>
                                    <p className="font-mono lg:text-xl md:text-xs sm:text-xs text-xs leading-none text-gray-700">{contenido.slice(0,200)}...</p>
                                </figcaption>
                            </a>
                        </div>
                    </figure>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    )
    
}

export default NoticiaEc