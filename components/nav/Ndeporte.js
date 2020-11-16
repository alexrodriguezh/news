import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import moment from 'moment'
import NoticiaDe from './NoticiaDe'

moment.locale('es')

const Deporte = ({nac}) => {

    return(
        nac.map(i => (
            <NoticiaDe
                key={i.id}
                noticia = {i}
            />
        ))
    )

}

export default Deporte