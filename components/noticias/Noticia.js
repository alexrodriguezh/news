import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Router from 'next/router'
import { gql, useQuery } from '@fortawesome/fontawesome-free'
import Cookies from 'universal-cookie'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share"



const Noticia = ({noticia}) => {
    const { id, titulo, resumen, contenido, imagen, categoria, url } = noticia
    
    const cookie = new Cookies()
    // const idN = cookie.get({id})

    const verNoticia = () => {
        Router.push({
            // pathname: "/noticia/[id]",
            pathname: `/${categoria.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/[id]`,
            query: { id }
        })
        // cookie.set('idNew', id, { path: '/noticia/[id]' });
        cookie.set('idNew', id, { path: `/${categoria.nombre.toLowerCase()}/[id]` });
    }
    console.log(`diarioelestado.com/${categoria.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/[id]?id=5`)
    return (
            <div className="px-3 py-4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full flex items-center justify-center">
                <div className="max-w-md h-full">
                    <div className="relative overflow-hidden shadow-lg">
                    <img
                        className="w-full bg-cover"
                        src={imagen.url}
                        alt={titulo}
                    />
                    <div className="bg-white w-28 h-8 absolute -mt-8 right-0 mr-8 rounded-t">
                    <FacebookShareButton
                        id={id}
                        url={`diarioelestado.com/${categoria.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/[id]`}
                        // url="https://elcomercio.pe/mundo/eeuu/en-vivo-elecciones-usa-2020-minuto-a-minuto-elecciones-estados-unidos-2020-en-directo-online-live-donald-trump-y-joe-biden-se-juegan-la-presidencia-en-5-estados-resultados-en-linea-transmision-quien-gano-las-elecciones-en-estados-unidos-resultados-de-las-elecciones-usa-quien-gano-las-elecciones-usa-eeuu-noticia/"
                        quote={titulo}
                        media={imagen.url}
                        hashtag="#PruebaProgramación">
                        <FacebookIcon logoFillColor="white" size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton 
                        url={`diarioelestado.com/${categoria.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/[id]`}
                        title={titulo}
                        >
                        <TwitterIcon logoFillColor="white" size={32} round={true} />
                    </TwitterShareButton>
                        <FontAwesomeIcon size='lg' className="text-blue-400 mx-2 mt-2" icon={faTwitter} />
                        <FontAwesomeIcon size='lg' className="text-blue-700 mr-2 mt-2" icon={faFacebook} />
                        <FontAwesomeIcon size='lg' className="text-green-400 mr-2 mt-2" icon={faWhatsapp} />
                    </div>
                    <div className="px-4 py-4 bg-white h-32">
                        <p className="text-gray-500 text-md">{categoria.nombre}</p>
                        <div 
                            className="font-bold lg:text-md md:text-base xs:text-xs mb-2 leading-none font-body hover:text-redancash cursor-pointer"
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