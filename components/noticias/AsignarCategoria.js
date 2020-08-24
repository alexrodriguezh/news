import React, { useState, useEffect, useContext } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import Select from 'react-select'
import EmpresaContext from '../../context/empresa/EmpresaContext'

const CATEGORIAS = gql`
    query categorias{
        categorias{
            id
            nombre
        }
    }
`
const AsignarCategoria = () => {

    const [ categoria, setCategoria ] = useState({})

    const empresaContext = useContext(EmpresaContext)
    const { agregarCategoria } = empresaContext

    useEffect(() => {
        agregarCategoria(categoria)
    }, [categoria])

    const { data, loading, error } = useQuery(CATEGORIAS)
    if(loading) return null
    const { categorias } = data

    const seleccionarCategoria = cat => {
        setCategoria(cat)
    }

    return(
        <Select 
            className="w-full mr-2"
            options = { categorias }
            onChange={ opcion => seleccionarCategoria(opcion) }
            getOptionValue = { i => i.id }
            getOptionLabel = { i => i.nombre }
            placeholder = "Seleccione la categoria"
            noOptionsMessage = { () => "No hay resultados"}
        />
    )
}

export default AsignarCategoria