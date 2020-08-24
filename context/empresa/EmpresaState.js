import React, { useReducer } from 'react'
import EmpresaContext from './EmpresaContext'
import EmpresaReducer from './EmpresaReducer'
import {
    AGREGAR_TITULO,
    AGREGAR_CONTENIDO,
    AGREGAR_CATEGORIA,
    AGREGAR_USUARIO,
    AGREGAR_IMAGEN
} from '../../types'

const EmpresaState = ({children}) => {

    // State de pedidos
    const initialState = {
        titulo: {},
        contenido: {},
        categoria: {},
        usuario: {},
        imagen: {}
    }

    const [ state, dispatch ] = useReducer(EmpresaReducer, initialState)

    const agregarTitulo = titulo => {
        dispatch({
            type: AGREGAR_TITULO,
            payload: titulo
        })
    }
    
    const agregarContenido = contenido => {
        dispatch({
            type: AGREGAR_CONTENIDO,
            payload: contenido
        })
    }

    const agregarCategoria = categoria => {
        if(!categoria){
            categoria = {};
        }
        
        dispatch({
            type: AGREGAR_CATEGORIA,
            payload: categoria
        })
    }

    const agregarUsuario = usuario => {

        if(!usuario){
            usuario = [];
        }
        
        dispatch({
            type: AGREGAR_USUARIO,
            payload: usuario
        })
    }

    const agregarImagen = imagen => {
        if(!imagen){
            imagen = {};
        }
        dispatch({
            type: AGREGAR_IMAGEN,
            payload: imagen
        })
    }

    return(
        <EmpresaContext.Provider
            value={{
                titulo: state.titulo,
                agregarTitulo,
                contenido: state.contenido,
                agregarContenido,
                categoria: state.categoria,
                agregarCategoria,
                usuario: state.usuario,
                agregarUsuario,
                // imagen: state.imagen,
                // agregarImagen
            }}
        >
        {children}    
        </EmpresaContext.Provider>
    )
}

export default EmpresaState