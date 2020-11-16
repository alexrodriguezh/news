import React from 'react'
import New from './New'

const ListadoNews = ({news}) => {
    return(
        <>
            <h1 className="bg-black lg:mx-3 md:mx-3 mx-0 p-1 font-bold text-white w-full lg:mt-0 md:mt-0 sm:mt-3 mt-3">Últimas Noticias</h1>
            {news.slice(-5).map(i => (
                <New 
                    key={i.id}
                    noti = {i}
                />
            ))}
            <a 
                className="bg-redancash p-1 font-bold text-white lg:mx-2 md:mx-2 mx-0  flex justify-center cursor-pointer w-full sm:mb-3"
            >Ver más
            </a>
        </>
        
    )
}

export default ListadoNews