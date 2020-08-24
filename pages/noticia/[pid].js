import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import '../../assets/style.css'
import { gql, useQuery } from '@apollo/client'
import Cookies from 'universal-cookie'
import ReactHtmlParser from 'react-html-parser'
import ListadoNoticias from '../../components/noticias/ListadoNoticias'
import ListadoNews from '../../components/noticias/ListadoNews'
import Footer from '../../components/Footer'

const NOTICIA = gql`
    query noticia($id: ID!){
        noticia(id: $id){
        id
        imagen{
            id
            url
        }
        titulo
        contenido
        created_at
        updated_at
        categoria{
            id
            nombre
        }
        }
    }
`

const NOTICIAS = gql`
    query noticias{
        noticias{
        id
        titulo
        resumen
        contenido
        imagen{
            id
            url
        }
        categoria{
            id
            nombre
        }
        created_at
        }
    }
` 

const verNoticia = () => {

    const cookie = new Cookies()

    const id = cookie.get("idNew")
    
    const { data: dataN, loading: loadingN, error: errorN } = useQuery(NOTICIAS)

    const { data, loading, error } = useQuery(NOTICIA, {
    variables: {
        id
    }
    })
    
    if(loadingN) return null
    if(errorN) console.log(errorN)
    const { noticias } = dataN
    console.log(noticias)

    if (loading) return "Cargando..."
    if (error) return console.log(error)
    console.log(data)

    const IMAGE_BASE_URL= 'http://localhost:1337'
    const temas = ["NOTICIAS EN VIVO", "LOCAL", "NACIONAL", "DEPORTE", "SALUD", "REPORTAJES", "ENTREVISTAS", "COLUMNA", "VIDEOS", "POLITICA", "ECONOMIA"]
    return(
        <>
            <Head>
                Red Ancash
            </Head>
            <header className="w-full bg-black h-20 py-2">
                <img src="/logo.png" className="h-16 mx-auto"></img>
            </header>
            <nav className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
                <ul className="flex text-sm lg:flex-grow justify-center">
                {temas.map(i => (
                    <li className="font-semibold my-2 text-black hover:border-redancash mr-4 border-b-2 hover:text-redancash cursor-pointer">{i}</li>
                ))}
                </ul>
            </nav>
            <main className="flex bg-white lg:px-32 md:px-12 sm:px-6">
                <div className="bg-white w-9/12 mb-8">
                    <div className="font-serif lg:text-4xl md:text-2xl sm:text-sm font-bold">{data.noticia.titulo}</div>
                    <div className="flex justify-between">
                        <p>{data.noticia.categoria.nombre}</p>
                        <p>{data.noticia.created_at}</p>
                    </div>
                    <img className="h-auto w-full" src={`http://localhost:1337${data.noticia.imagen.url}`} alt={data.noticia.titulo} />
                    <div>{ReactHtmlParser(data.noticia.contenido)}</div>
                </div>
                <div className="w-3/12 ml-3 pl-2 border-l-2 border-gray-300">
                    <ListadoNews
                        key = {noticias.id}
                        news = {noticias}
                    />
                </div>
            </main>
            <Footer />
        </>
        
    )
}

export default verNoticia