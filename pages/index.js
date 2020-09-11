import Head from 'next/head'
import '../assets/style.css'
import ListadoNoticias from '../components/noticias/ListadoNoticias'
import ListadoNews from '../components/noticias/ListadoNews'
import { gql, useQuery } from '@apollo/client'
import Encabezado from '../components/noticias/Encabezado'
import Footer from '../components/Footer'
import EncabezadoVideos from '../components/noticias/EncabezadoVideos'
import ListadoVideos from '../components/noticias/ListadoVideos'

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

  const temas = ["NOTICIAS EN VIVO", "LOCALL", "NACIONAL", "DEPORTE", "SALUD", "REPORTAJES", "ENTREVISTAS", "COLUMNA", "VIDEOS", "POLITICA", "ECONOMIA"]

  return (
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
            <li className="font-semibold my-2 text-black hover:border-redancash mr-4 border-b-2 hover:text-redancash cursor-pointer" key={i}>{i}</li>
          ))}
        </ul>
      </nav>
      <div className="flex lg:px-32 md:px-12 sm:px-6">

        <div className="flex flex-wrap w-9/12">
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

        <div className="bg-gray-100 w-3/12">
          <ListadoNews
            key = {noticias.id}
            news = {noticias}
          />
        </div>
        
      </div>
      {/* Sección videos */}
      <div className="flex bg-white pl-3 my-3 lg:mx-32 md:mx-12 sm:mx-6">
        <div className="bg-redancash w-3/5 mr-2">
          <EncabezadoVideos
            key = {noticias.id}
            video = { noticias }
          /> 
        </div>
        <div className = "bg-gray-300 w-2/5 ml-2" >
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