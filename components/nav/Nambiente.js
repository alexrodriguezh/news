import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import moment from 'moment'
import Router from 'next/router'
import Cookies from 'universal-cookie'
import NoticiaAm from './NoticiaAm'

moment.locale('es')

const Nambiente = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaAm
                    key={i.id}
                    noticia = {i}
                />
            ))
    )
}

export default Nambiente