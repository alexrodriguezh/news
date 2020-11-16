import Head from 'next/head'
import '../assets/style.css'
import ListadoNoticias from '../components/noticias/ListadoNoticias'
import ListadoNews from '../components/noticias/ListadoNews'
import { gql, useQuery } from '@apollo/client'
import Encabezado from '../components/noticias/Encabezado'
import Footer from '../components/Footer'
import EncabezadoVideos from '../components/noticias/EncabezadoVideos'
import ListadoVideos from '../components/noticias/ListadoVideos'
import Link from 'next/link'
import Nav from '../components/Nav'

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

export default function Home() {

  const { data, loading, error } = useQuery(NOTICIAS)

  if(loading) return null
  if(error) console.log(error)
  const { noticias } = data
  console.log(noticias)

  return (
    <>
      <Head>
          Red Ancash
      </Head>
      <header className="w-full bg-gray-800 h-20 py-2">
        <Link href="/"><img src="/logo.png" className="h-16 mx-auto cursor-pointer"></img></Link>
      </header>
      <Nav />
      <div className="flex flex-wrap container m-auto">

        <div className="flex flex-wrap w-full xl:w-9/12 lg:w-9/12 md:w-2/3 sm:w-full m-auto">
          <Encabezado
            key = {noticias.id}
            encabezado = {noticias}
          />
          <main className="flex flex-wrap">
            <ListadoNoticias
              key = {noticias.id}
              noticias = {noticias}
            />
          </main>
          <a className="bg-redancash p-1 font-bold text-white ml-3 px-4 flex justify-center cursor-pointer">
              Ver más
              <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-6 pl-3"><path d="M19 9l-7 7-7-7"></path></svg>
          </a>
          

        </div>

        
        <div className="w-full xl:w-3/12 lg:w-3/12 md:w-1/3 sm:w-3/4 sm:mx-auto">
          
          <ListadoNews
            key = {noticias.id}
            news = {noticias}
          />
          
        </div>
        
      </div>
      {/* Sección videos */}
      <div className="container flex flex-wrap m-auto bg-white">
        <div className="bg-redancash flex flex-wrap w-full xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full m-auto">
          <EncabezadoVideos
            key = {noticias.id}
            video = { noticias }
          /> 
        </div>
        <div className = "bg-gray-300 w-full xl:w-2/5 lg:w-2/5 md:w-2/5" >
          <ListadoVideos 
            key = { noticias.id }
            videos = { noticias }
          />
        </div>
      </div>
      <Footer />
    </>
  )
}