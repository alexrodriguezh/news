import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { gql, useQuery } from '@apollo/client'
import Nvideos from '../components/nav/Nvideos'
import Footer from '../components/Footer'
import ListadoNews from '../components/noticias/ListadoNews'
import Nav from '../components/Nav'
import Link from 'next/link'

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

const Videos = () => {

    const { data, loading, error } = useQuery(NOTICIAS)

    if(loading) return null
    if(error) console.log(error)
    const { noticias } = data
    
    return(
        <>
            <Head>
                Red Ancash
            </Head>
            <header className="w-full bg-gray-800 h-20 py-2">
                <Link href="/"><img src="/logo.png" className="h-16 mx-auto cursor-pointer"></img></Link>
            </header>
            <Nav />
            <div className="container flex flex-wrap m-auto">
                <div className="flex flex-wrap w-full xl:w-3/4 lg:w-3/4 md:w-2/3 sm:w-full m-auto">
                    <Nvideos
                        key = {noticias.id}
                        nac = {noticias}
                    />
                </div>
                <div className="w-full xl:w-1/4 lg:w-1/4 md:w-1/3 pl-2 border-l-2 border-gray-300">
                    <ListadoNews 
                        key = {noticias.id}
                        news = {noticias}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Videos