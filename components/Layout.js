import React from 'react'
import Head from 'next/head'
import '../assets/style.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/router'



const Layout = ({children}) => {

    const router = useRouter()

    return(
        <>
            <Head>
                Red Ancash
            </Head>
            { router.pathname === '/' || router.pathname === '/login' || router.pathname === 'nuevacuenta' ? (
                <div className="bg-gray-200 min-h-screen flex flex-col justify-center">
                    <div>
                        {children}
                    </div>
                </div>
            ) : (
                <div className="bg-gray-200 min-h-screen">
                    <div className="sm:flex min-h-screen">

                        <Sidebar />

                        <main className="sm:w-full xl:w-full sm:min-h-screen">
                            <Header />
                            {children}
                        </main>
                        
                    </div>
                </div>
            )}
            
        </>
        
    )
}

export default Layout