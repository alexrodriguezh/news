import React from 'react'
import moment from 'moment'
import NoticiaNa from './NoticiaNa'

moment.locale('es')

const Nacional = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaNa
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default Nacional