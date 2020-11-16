import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import '../../assets/style.css'
import { gql, useQuery } from '@apollo/client'
import Cookies from 'universal-cookie'
import ReactHtmlParser from "react-html-parser"
import ListadoNews from '../../components/noticias/ListadoNews'
import Footer from '../../components/Footer'
import moment from 'moment'
import Link from 'next/link'
import Nav from '../../components/Nav'

moment.locale('es')

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

    const router = useRouter()

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

    const irEnlace = i => {
        console.log(i)
        router.push(`/${i.toLowerCase()}`)
    }

    const temas = ["NACIONAL", "POLITICA", "ECONOMIA", "AMBIENTE", "MINERIA", "SALUD", "DEPORTE", "EDUCACION", "CULTURA", "TURISMO", "COLUMNA", "VIDEOS", "INFOGRAFIAS"]
    
    return(
        <>
            <Head>
                Red Ancash
            </Head>
            <header className="w-full bg-black h-20 py-2">
                <Link href="/"><img src="/logo.png" className="h-16 mx-auto cursor-pointer"></img></Link>
            </header>
            
            <Nav />
            <main className="flex flex-wrap container m-auto">
                <div className="bg-white flex flex-wrap w-full xl:w-9/12 lg:w-9/12 md:w-2/3 sm:w-full m-auto md:pr-3">
                    <img className="h-auto w-full" src={data.noticia.imagen.url} alt={data.noticia.titulo} />
                    <div className="flex justify-between lg:mt-6 md:mt-6 mt-3 mb-2 px-1">
                        <p className="bg-black text-white mx-1 px-1">{data.noticia.categoria.nombre}</p>
                    </div>
                    <div className="font-serif lg:text-4xl md:text-2xl sm:text-sm font-bold leading-none px-2">{data.noticia.titulo}</div>
                    <div className="flex text-gray-600 font-bold text-xs my-3 px-2"><svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{moment(data.noticia.created_at).format('LLLL').toUpperCase()}</div>
                    <div className="font-display lg:text-lg md:text-lg sm:text-md text-sm font-medium text-gray-700 leading-loose px-2">{ReactHtmlParser(data.noticia.contenido)}</div>
                </div>
                <div className="md:border-l-2 md:border-gray-300 w-full xl:w-3/12 lg:w-3/12 md:w-1/3 sm:w-3/4 sm:mx-auto">
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