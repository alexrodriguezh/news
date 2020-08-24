import React from 'react'

const Noticia = ({noticia}) => {

    const { titulo, contenido, imagen, categoria } = noticia

    return(
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10" src={`http://localhost:1337${imagen.url}`} alt={titulo} />
                </div>
                <div className="ml-4">
                <div className="text-sm leading-5 font-medium text-gray-900">{titulo}</div>
                </div>
            </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{categoria.nombre}</div>
            </td>

            <td className="flex justify-center px-6 py-8 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a href="#" className="text-red-500 hover:text-red-700 focus:outline-none focus:underline" >
                    <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mx-2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </a>
                <a href="#" className="text-green-500 hover:text-green-700 focus:outline-none focus:underline" >
                    <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 mx-2"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>                  </a>
            </td>
        </tr>
    )
}

export default Noticia