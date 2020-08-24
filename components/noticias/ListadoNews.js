import React from 'react'
import New from './New'

const ListadoNews = ({news}) => {
    return(
        <>
            <h1 className="bg-black mx-1 p-1 font-bold text-white">Últimas Noticias</h1>
            {news.slice(-5).map(i => (
                <New 
                    key={i.id}
                    noti = {i}
                />
            ))}
            <a 
                className="bg-redancash p-1 font-bold text-white mx-6 flex justify-center cursor-pointer"
            >Ver más
            </a>
        </>
        
    )
}

export default ListadoNews