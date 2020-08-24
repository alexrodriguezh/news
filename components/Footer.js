import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <footer className="bg-gray-900">
            <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
                <div className="w-full mx-auto items-center">
                    <p className="text-white">
                        <img src="/logo.png" className="h-12 mx-auto pt-2"></img>
                    </p>
                    <div className=" w-28 h-8 absolute -mt-8 mx-auto mr-8 rounded-t flex items-center">
                        <FontAwesomeIcon size='lg' className="text-blue-400 mx-2 mt-2" icon={faTwitter} />
                        <FontAwesomeIcon size='lg' className="text-blue-700 mr-2 mt-2" icon={faFacebook} />
                        <FontAwesomeIcon size='lg' className="text-green-400 mr-2 mt-2" icon={faWhatsapp} />
                    </div>
                    <p className="text-white">Footer </p>
                    <p className="text-white">Footer </p>
                    <p className="text-white">Footer </p>
                    <p className="text-white">Footer </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer