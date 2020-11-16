import React from 'react'
import moment from 'moment'
import NoticiaTu from './NoticiaTu'

moment.locale('es')

const Nturismo = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaTu
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default Nturismo