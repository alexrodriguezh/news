import React from 'react'
import moment from 'moment'
import NoticiaIn from './NoticiaIn'

moment.locale('es')

const Ninfografia = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaIn
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default Ninfografia