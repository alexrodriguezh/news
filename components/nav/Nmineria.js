import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import moment from 'moment'
import Router from 'next/router'
import Cookies from 'universal-cookie'
import NoticiaMi from './NoticiaMi'

moment.locale('es')

const Nmineria = ({nac}) => {

    return(
            nac.map(i => (
                <NoticiaMi
                    key={i.id}
                    noticia = {i}
                />
            ))
    )

}

export default Nmineria