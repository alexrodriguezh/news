import React from 'react'
import Router from 'next/router'
import Cookies from 'universal-cookie'
import moment from 'moment'

moment.locale('es')

const New = ({noti}) => {
    const { id, titulo, resumen, contenido, imagen, categoria, created_at } = noti
    
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
            <div className="bg-white mx-3 py-2 px-1 lg:max-w-full flex items-center justify-center">
                <figure className="flex justify-around">

                    <a className="flex w-1/2 cursor-pointer"> 
                        <div>
                            <img
                                className="w-full bg-contain md:h-full"
                                src={imagen.url}
                            />
                        </div>
                        <div className="w-3 h-full bg-redancash"></div>
                    </a>
                    <div className="w-1/2 ml-2 md:ml-1">
                        <a className="cursor-pointer">
                            <figcaption className="mt-1 md:-mt-1">
                                
                                <p className="font-mono font-bold text-gray-700 text-xs w-24 self-end">{categoria.nombre}</p>
                                <h2 className="font-mono text-xs leading-none md:leading-none sm:leading-normal lg:font-bold md:font-normal sm:font-bold font-bold">{titulo.slice(0,70)}...</h2>
                            </figcaption>
                        </a>
                    </div>
                </figure>
                
            </div>
    )
}

export default New