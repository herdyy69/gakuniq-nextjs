import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const Cari = () => {
    return (
        <AppLayout
            title="CARI"
            subTitle={
                <div className="bg-[#FFFFFF] shadow mt-3">
                    <div className="max-w-7xl mx-auto py-0 px-0 shadow">
                        <p className="text-xs py-4 px-4 font-extrabold">
                            <Link
                                href={{
                                    pathname: '/beranda',
                                }}>
                                <a className="underline">GAKUNIQ</a>
                            </Link>
                            <span className="text-sm px-[2.5px] text-[#b9b9b9]">
                                /
                            </span>
                            CARI
                        </p>
                    </div>
                </div>
            }
            header={
                <div className="flex flex-col">
                    <div className="form-control">
                        <div className="input-group">
                            <div className="flex flex-row flex-nowrap items-center justify-center">
                                <input
                                    type="text"
                                    placeholder="Search…"
                                    className="input input-bordered w-4/5 bg-white"
                                />
                                <button className="btn btn-square border-[1px] border-slate-800 bg-white p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }>
            <Head>
                <title>GakUniq - Cari..</title>
            </Head>
        </AppLayout>
    )
}

export default Cari
