import React from 'react'
import moment from 'moment'
import NoticiaSa from './NoticiaSa'

moment.locale('es')

const Nsalud = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaSa
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default Nsalud