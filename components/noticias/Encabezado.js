import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const Encabezado = ({encabezado}) => {
    // const { id, titulo, resumen, contenido, imagen, categoria } = encabezado
    const ultimo = encabezado.length - 1
    const portada = encabezado[ultimo]
    console.log(portada.titulo)
    return(
        <aside className="flex w-full px-3 relative">
            
                <img
                    className="bg-redancash mr-3 w-4/6 cursor-pointer"
                    src={portada.imagen.url}
                />
            <a className="w-2/6 cursor-pointer">
                <div className="bg-white absolute -ml-16 md:-ml-20 lg:w-1/3 md:w-5/12 sm:w-1/3 w-5/12 pl-4 pb-6">
                    <p className="float-right lg:my-3 md:my-1 md:text-xs sm:my-0 lg:text-xl font-bold text-redancash">{portada.categoria.nombre}</p>
                    <h2 className="lg:mt-10 md:mt-8 sm:mt-6 xl:text-2xl lg:text-xl md:text-sm sm:text-sm text-xs font-bold hover:text-redancash mb-6">{portada.titulo}</h2>
                    <div className="bg-white w-28 h-8 absolute -mt-4 right-0 mr-8 rounded-t">
                        <FontAwesomeIcon size='lg' className="text-blue-400 mx-2 mt-2" icon={faTwitter} />
                        <FontAwesomeIcon size='lg' className="text-blue-700 mr-2 mt-2" icon={faFacebook} />
                        <FontAwesomeIcon size='lg' className="text-green-400 mr-2 mt-2" icon={faWhatsapp} />
                    </div>
                </div>
            </a>
            
        </aside>
    )
}

export default Encabezado