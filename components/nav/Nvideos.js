import React from 'react'
import moment from 'moment'
import NoticiaVi from './NoticiaVi'

moment.locale('es')

const Nvideos = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaVi
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default Nvideos