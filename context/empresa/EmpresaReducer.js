import {
    AGREGAR_TITULO,
    AGREGAR_CONTENIDO,
    AGREGAR_CATEGORIA,
    AGREGAR_USUARIO,
    AGREGAR_IMAGEN
} from '../../types'

export default (state, action) => {
    switch(action.type){
        
        case AGREGAR_TITULO:
            return {
                ...state,
                titulo: action.payload
            }
        case AGREGAR_CONTENIDO:
            return {
                ...state,
                contenido: action.payload
            }
        case AGREGAR_CATEGORIA:
            return {
                ...state,
                categoria: action.payload
            }
        case AGREGAR_USUARIO: 
            return {
                ...state,
                usuario: action.payload
            }
        case AGREGAR_IMAGEN:
            return {
                ...state,
                imagen: action.payload
            }
        default:
            return state
    }
} 