import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import moment from 'moment'

moment.locale('es')

const Footer = () => {
    return(
        <footer className="bg-gray-900">
            <div className="container mx-auto px-2 py-8">
                    <img src="/logo.png" className="h-16 mx-auto pt-2"></img>
                    <div className="flex justify-center py-3">
                        <FontAwesomeIcon size='lg' className="text-blue-400 mx-2 mt-2" icon={faTwitter} />
                        <FontAwesomeIcon size='lg' className="text-blue-700 mr-2 mt-2" icon={faFacebook} />
                        <FontAwesomeIcon size='lg' className="text-green-400 mr-2 mt-2" icon={faWhatsapp} />
                    </div>
                    <div className="flex flex-wrap justify-center py-3">
                        <p className="text-white lg:text-2xl md:text-lg sm:text-sm text-xs mr-2">Inicio </p>
                        <p className="text-white lg:text-2xl md:text-lg sm:text-sm text-xs mr-2">¿Quienes Somos? </p>
                        <p className="text-white lg:text-2xl md:text-lg sm:text-sm text-xs mr-2">Política </p>
                        <p className="text-white lg:text-2xl md:text-lg sm:text-sm text-xs mr-2">Ancash </p>
                        <p className="text-white lg:text-2xl md:text-lg sm:text-sm text-xs mr-2">Conchucos </p>
                        <p className="text-white lg:text-2xl md:text-lg sm:text-sm text-xs">Huaylas </p>
                    </div>
                    <div className="text-white flex justify-center pt-8 pb-3">Copyrigth <span>&copy;</span> {moment().format('YYYY')} Red Ancash</div>
            </div>
        </footer>
    )
}

export default Footer