import React from 'react'
import moment from 'moment'


const Videos = ({vid}) => {
    const { id, titulo, resumen, contenido, imagen, categoria, created_at } = vid

    return(
        <div className="bg-white mb-5 mr-4 lg:max-w-full last:mb-0">
            <figure className="flex flex-row">
                <a className="w-5/12 cursor-pointer"> 
                    <div>
                        <img 
                            className="h-24 w-full"
                            src={`http://localhost:1337${imagen.url}`}
                        />
                    </div>
                </a>
                <div className="w-7/12 ml-2 pt-3">
                    <a className="cursor-pointer">
                        <figcaption>
                            <p className="font-mono font-medium text-redancash text-xs w-24 self-end">{categoria.nombre}</p>
                            <h2 className="font-mono text-xs leading-none">{titulo.slice(0,70)}</h2>
                        </figcaption>
                    </a>
                </div>
            </figure>
        </div>
    )
}

export default Videos