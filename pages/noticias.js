import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import Noticia from '../components/Noticia'

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
        }
    }
` 

const Noticias = () => {

    const { data, loading, error } = useQuery(NOTICIAS)

    if(loading) return null

    const { noticias } = data

    // console.log(allDirectorios)

    return(
        <Layout>
        <Link href="/nuevanoticia">
            <button type="button" className="bg-green-500 uppercase text-white py-2 px-3 ml-10">Agregar Noticia</button>
        </Link>
            
            <div className="flex flex-col mt-10 mx-10">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-300 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Noticia
                            </th>
                            
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-300 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                            Categoria
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-300"></th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                            {noticias.map(i =>(
                                <Noticia 
                                    key = {i.id}
                                    noticia = {i}
                                />
                            ))}
                        
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
        </Layout>
    )
}

export default Noticias