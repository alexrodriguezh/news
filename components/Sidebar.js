import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {

    // Routing de next
    const router = useRouter();
    // console.log(router.pathname)
    return (
        <aside id="sidebar" className="bg-gray-700 sm:w-1/5 xl:w-1/5 sm:min-h-screen">
            <div>
                <img src="/logo.png" alt="" className="w-full px-5 py-10" />
            </div>
            <nav className="mt-5 list-none">
                <Link href="/perfil">
                    <li className={router.pathname === "/perfil" ? "bg-gray-800 text-white py-3 px-5 text-sm font-semibold" : "text-teal-200 px-3 py-3 hover:bg-gray-500 cursor-pointer"}>
                        <a className="flex text-white block mx-3 hover:text-white text-sm font-normal">
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-6 pr-2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            Perfil
                        </a>
                    </li>
                </Link>
                <Link href="/noticias">
                    <li className={router.pathname === "/noticias" ? "bg-gray-800 text-white py-3 px-5 text-sm font-semibold" : "text-teal-200 px-3 py-3 hover:bg-gray-500 cursor-pointer"}>
                        
                            <a className="flex text-white hover:text-white block mx-3 text-sm font-normal">
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-6 pr-2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            Lista de Noticias
                            </a>
                        
                    </li>
                </Link>
                <Link href="/directorio">
                    <li className={router.pathname === "/directorio" ? "bg-gray-800 text-white py-3 px-5 text-sm font-semibold" : "text-teal-200 px-3 py-3 hover:bg-gray-500 cursor-pointer"}>
                            <a className="flex text-white hover:text-white block mx-3 text-sm font-normal">
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-6 pr-2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            Lista de Usuarios
                            </a>
                    </li>
                </Link>
                <Link href="/settings">
                    <li className={router.pathname === "/settings" ? "bg-gray-800 text-white py-3 px-5 text-sm font-semibold" : "text-teal-200 px-3 py-3 hover:bg-gray-500 cursor-pointer"}>
                        <a className="flex text-white hover:text-white block mx-3 text-sm font-normal">
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-6 pr-2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Settings
                        </a>
                    </li>
                </Link>
            </nav>
        </aside>
    )
}

export default Sidebar
