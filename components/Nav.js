import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Nav = () => {

    const router = useRouter()

    const [isOn, setIsOn] = useState(false)
    
    const irEnlace = i => {
        console.log(i)
        router.push(`/${i.toLowerCase()}`)
    }

    const temas = ["NACIONAL", "POLITICA", "ECONOMIA", "AMBIENTE", "MINERIA", "SALUD", "DEPORTES", "EDUCACION", "CULTURA", "TURISMO", "COLUMNA", "VIDEOS", "INFOGRAFIAS"]

    return (
        <nav className="container m-auto flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="mx-3 my-3 block lg:hidden">
                <button 
                    id="nav-toggle" 
                    className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-redancash hover:border-redancash"
                    onClick={() => setIsOn(!isOn)}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                { isOn === true ? (
                    <div className="fixed z-10 block bg-white w-1/2 flex-grow lg:flex lg:items-center lg:w-auto py-3 lg:pt-0 rounded-lg shadow-xl px-3" id="nav-content">
                        <ul className="list-reset lg:flex flex-1 items-center text-sm justify-center">
                            {temas.map((i, index) => (
                                    <li 
                                        className="flex items-center font-semibold my-2 text-black hover:text-redancash cursor-pointer" 
                                        key={index}
                                        onClick={() => irEnlace(i)}
                                    >
                                    <svg className="w-3 h-3 text-redancash mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        {i}
                                    </li>
                            ))}
                        </ul>
                    </div>
                    ) : (
                        <div className="hidden absolute right-0 py-2 mt-2 w-40 bg-white rounded-lg shadow-xl">
                            
                        </div>
                    )}
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                <ul className="list-reset lg:flex flex-1 items-center text-sm justify-center">
                    {temas.map((i, index) => (
                            <li 
                                className="font-semibold my-2 text-black hover:border-redancash mr-4 border-b-2 hover:text-redancash cursor-pointer" 
                                key={index}
                                onClick={() => irEnlace(i)}
                            >
                                {i}
                            </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav