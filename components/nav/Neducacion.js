import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import moment from 'moment'
import NoticiaEd from './NoticiaEd'

moment.locale('es')

const Neducacion = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaEd
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default Neducacion