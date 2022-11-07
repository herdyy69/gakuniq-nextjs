import React from 'react'
import Link from 'next/link'
import { AiOutlineLogin } from 'react-icons/ai'
const Guest = () => {
    return (
        <div className="antialiased">
            <div className="min-h-screen bg-[#525252] text-white flex flex-row">
                <div className="flex flex-col items-start justify-center bg-slate-200 w-full py-6 px-4 sm:px-6 lg:px-8 rounded-lg m-4">
                    <h1 className="text-5xl text-slate-800 font-bold">
                        Anda belum login
                    </h1>
                    <p className="text-2xl text-slate-800">
                        Silahkan login terlebih dahulu
                    </p>
                    <span className="my-1"></span>
                    <Link href="/login">
                        <button className="bg-red-800 btn glass flex flex-row items-center text-3xl font-bold">
                            <AiOutlineLogin className="text-xl" />
                            <span className="mx-1"> </span>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Guest
