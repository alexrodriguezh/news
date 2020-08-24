import React, { useState, useEffect, useContext} from 'react'
import EmpresaContext from '../../context/empresa/EmpresaContext'

const AsignarTitulo = () => {

    const [ titulo, setTitulo ] = useState('')

    const empresaContext = useContext(EmpresaContext)
    const { agregarTitulo } = empresaContext

    useEffect(()=>{
        // console.log({nombre, cliente, alias, codigo})
        agregarTitulo(titulo)
    }, [titulo])

    return(
        <>
            <p className="my-2 bg-white border-l-4 border-green-600 text-gray-700 p-2 text-sm font-bold">Titulo de la noticia:</p>
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 my-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="titulo"
                type="text"
                placeholder="Titulo"
                onChange={ e => setTitulo(e.target.value)}
                // onBlur={formik.handleBlur}
                value={titulo}
            />
        </>
        
    )
}

export default AsignarTitulo