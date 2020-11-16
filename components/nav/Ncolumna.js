import React from 'react'
import moment from 'moment'
import NoticiaCo from './NoticiaCo'

moment.locale('es')

const NoticiasCo = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaCo
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default NoticiasCo