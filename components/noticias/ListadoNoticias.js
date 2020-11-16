import React from 'react'
import Noticia from './Noticia'

const ListadoNoticias = ({noticias}) => {

    return(
        <>
            {noticias.slice(-9).map(noticia => (
                <Noticia 
                    key={noticia.id}
                    noticia = {noticia}
                />
            ))}
        </>
        
    )
}

export default ListadoNoticias