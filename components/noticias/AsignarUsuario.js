import React, { useState, useEffect, useContext } from 'react'
import { gql, useQuery } from '@apollo/client'
import Select from 'react-select'
import EmpresaContext from '../../context/empresa/EmpresaContext'

const USUARIOS = gql`
    query users{
        users{
            id
            email
            nombre
            apellido
        }
    }
` 

const AsignarUsuario = () => {
    
    const [ usuario, setUsuario ] = useState({})

    const empresaContext = useContext(EmpresaContext)
    const { agregarUsuario } = empresaContext

    useEffect(() => {
        agregarUsuario(usuario)
    }, [usuario])
    
    const { data, loading, error } = useQuery(USUARIOS)
    if(loading) return null
    const { users } = data

    const seleccionarUsuario = user => {
        setUsuario(user)
    }

    return(
        <Select 
            className="w-full ml-2"
            options = { users }
            onChange={ opcion => seleccionarUsuario(opcion) }
            getOptionValue = { i => i.id }
            getOptionLabel = { i => i.nombre }
            placeholder = "Seleccione el Usuario"
            noOptionsMessage = { () => "No hay resultados"}
        />
    )
}

export default AsignarUsuario