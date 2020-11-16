import React from 'react'
import moment from 'moment'
import NoticiaCu from './NoticiaCu'

moment.locale('es')

const Ncultura = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaCu
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default Ncultura