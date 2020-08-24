import React, {useState, useEffect, useRef, useContext} from 'react'
import Layout from '../components/Layout'
import AsignarCategoria from '../components/noticias/AsignarCategoria'
import AsignarUsuario from '../components/noticias/AsignarUsuario'
import AsignarTitulo from '../components/noticias/AsignarTitulo';
import AsignarContenido from '../components/noticias/AsignarContenido';
import Cookies from 'universal-cookie'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import { gql, useQuery, useMutation } from '@apollo/client'
import EmpresaContext from '../context/empresa/EmpresaContext'

const IMAGEN_NOTICIA = gql`
    mutation upload($file: Upload!){
        upload(file: $file){
            id
            name
            url
        }
    }
`

const ADD_NOTICIA = gql`
    mutation createNoticia($input :createNoticiaInput){
        createNoticia(input:$input){
            noticia{
            id
            titulo
            contenido
            categoria{
                id
            }
            user{
                id
            }
            imagen{
                id
            }
            }
        }
    }
`

const ALL_NOTICIAS = gql`
    query noticias{
        noticias{
            id
            titulo
            contenido
            imagen{
            id
            url
            }
            categoria{
            id
            nombre
            }
        }
    }
`
const NuevaNoticia = () => {

    const cookie = new Cookies()
    const router = useRouter()

    //INICIA SUBIDA DE IMAGEN
    const [upload] = useMutation(IMAGEN_NOTICIA);

    const onChange = async ({
        target: {
            validity,
            files: [file]
        }
    }) => {
        try {
            if(validity.valid){
                const { data } = await upload({
                    variables: { file }
                })
                cookie.set('idImagen', data.upload.id, { path: '/' });
                console.log(data.upload.id)
            }
            
        } catch (error) {
            console.log(error)
        }
    } 

    const idImagen = cookie.get("idImagen")
    console.log("IdImagen: " + idImagen)
    //FINALIZA

    const empresaContext = useContext(EmpresaContext)
    const { titulo, contenido, categoria, usuario } = empresaContext

    const [createNoticia] = useMutation(ADD_NOTICIA,{
        update(cache){
            const {noticias} = cache.readQuery({ query: ALL_NOTICIAS})
            cache.writeQuery({
                query: ALL_NOTICIAS,
                data: {
                    noticias : [...noticias, createNoticia]
                }
            })
        }
    })

    const crearNuevaEmpresa = async () => {
        try {
            const { data } = await createNoticia({
                variables: {
                    input: {
                        data: {
                            titulo,
                            contenido,
                            categoria: categoria.id,
                            user: usuario.id,
                            imagen: idImagen
                        }
                    }
                }
            })
            router.push('/noticias')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Layout>

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-2xl">
                <form
                    className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                >
                    <p className="my-2 bg-white border-l-4 border-green-600 text-gray-700 p-2 text-sm font-bold">Imagen del encabezado:</p>
                    <div className="flex form-group">
                        <label className="mr-3">Subir imagen: </label>
                        <input id="imagen" name="imagen" type="file" 
                            onChange={onChange} 
                            className="form-control" 
                        />
                    </div>
                    <AsignarTitulo />
                    <AsignarContenido />
                    <p className="my-2 bg-white border-l-4 border-green-600 text-gray-700 p-2 text-sm font-bold">Asignar categoria y usuario:</p>
                    <div className="flex justify-between my-3">
                        <AsignarCategoria />
                        <AsignarUsuario />
                    </div>
                    <button 
                        type="button"
                        className="bg-green-600 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-green-700"
                        onClick={() => crearNuevaEmpresa()}
                    >
                        Registrar Noticia
                    </button>
                </form>     
                </div>
            </div>
        </Layout>
    )
}

export default NuevaNoticia

