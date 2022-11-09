import React from 'react'
import Link from 'next/link'
import { AiOutlineLogin } from 'react-icons/ai'
const Guest = () => {
    return (
        <div className="antialiased">
            <div className="min-h-screen bg-slate-700 text-white flex flex-row items-center justify-center m-2 rounded-lg">
                <div className="flex flex-col items-end justify-center mx-2 animate__animated animate__fadeIn">
                    <h1 className="text-4xl font-bold">Anda belum login</h1>
                    <p className="text-xl font-semibold">
                        Silahkan login terlebih dahulu
                    </p>
                    <Link href="/login">
                        <a className="flex flex-row items-center justify-center bg-[#FFC107] text-black rounded-lg px-4 py-2 mt-4">
                            <AiOutlineLogin className="mr-2" />
                            <span>Login</span>
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center mx-2">
                    <img
                        src="/logo.png"
                        alt="Login"
                        className="w-48 rounded-lg border-2 animate-pulse"
                    />
                </div>
            </div>
        </div>
    )
}

export default Guest
