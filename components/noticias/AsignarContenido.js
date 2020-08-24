import React, { useState, useEffect, useRef, useContext } from 'react'
import dynamic from 'next/dynamic';
import EmpresaContext from '../../context/empresa/EmpresaContext'
// import Plain from 'slate-plain-serializer'

const importJodit = () => import('jodit-react');
const JoditEditor = dynamic(importJodit, {
    ssr: false,
});

// const initialValue = Plain.deserialize('Red Ancash')

const AsignarContenido = () => {

    const editor = useRef(null)
    const [content, setContent] = useState('')
    const config = {
		readonly: false
    }
    const empresaContext = useContext(EmpresaContext)
    const { agregarContenido } = empresaContext

    useEffect(() => {
        agregarContenido(content)
    }, [content])

    return(
        <>
            <p className="my-2 bg-white border-l-4 border-green-600 text-gray-700 p-2 text-sm font-bold">Ingresar contenido:</p>
            <JoditEditor
                ref={editor}
                
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
        </>
        
    )
}

export default AsignarContenido