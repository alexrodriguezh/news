import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import moment from 'moment'
import Router from 'next/router'
import Cookies from 'universal-cookie'
import NoticiaEc from './NoticiaEc'

moment.locale('es')

const Neconomia = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaEc
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default Neconomia