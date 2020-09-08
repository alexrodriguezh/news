import React from 'react'

const EncabezadoVideos = ({video}) => {
    // const { id, titulo, resumen, contenido, imagen, categoria } = videos
    const ultimo = video.length - 2
    const portada = video[ultimo]
    console.log(portada.titulo)
    return(
        <aside>
            <a className="bg-redancash cursor-pointer">
                <img
                    className="w-full h-96"
                    src={portada.imagen.url}
                />
            </a>
            <p className="bg-white font-bold px-3 py-2">{portada.titulo}</p>
            <div className="h-2"></div>
        </aside>
    )
}

export default EncabezadoVideos