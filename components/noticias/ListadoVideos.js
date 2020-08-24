import React from 'react'
import Videos from './Videos'

const ListadoVideos = ({videos}) => {

    return(
            <div className="flex flex-col">
                {videos.slice(-4).map(i => (
                    <Videos 
                        key={i.id}
                        vid = {i}
                    />
                ))}
            </div>
    )
}

export default ListadoVideos