import React, { useEffect, useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import SwiperVertical from '@/components/swiperJs/swiperVertical'
import SwiperHorizontal from '@/components/swiperJs/swiperHorizontal'
import { References } from '@/components/SectionRefereces/References'

const Beranda = () => {
    return (
        <AppLayout header={''}>
            <Head>
                <title>GakUniq - Beranda</title>
            </Head>

            <div className="flex flex-col shadow overflow-hidden">
                <div className="">
                    <SwiperVertical />
                </div>
                <span className="bg-slate-50 h-[12px]"></span>
                <span className="bg-slate-100 h-[12px]"></span>
                <span className="bg-slate-200 h-[12px]"></span>
                <div className="flex flex-row items-center bg-slate-300 w-auto h-auto py-3 shadow-md">
                    <div className="flex flex-col items-center justify-center border-2 rounded-md min-h-[40vh] m-4 p-4">
                        <h1 className="text-2xl font-bold text-slate-500">
                            ON <br /> FLASH <br /> SALE!
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <SwiperHorizontal />
                    </div>
                </div>
                <span className="bg-slate-200 h-[12px]"></span>
                <span className="bg-slate-100 h-[12px]"></span>
                <span className="bg-slate-50 h-[12px]"></span>
                <div className="py-4 rounded-md bg-slate-50">
                    <div className="flex flex-col flex-wrap justify-start items-start overflow-hidden">
                        <h1 className="text-2xl font-bold text-slate-500 mx-5">
                            Berdasarkan referensimu!
                        </h1>
                        <References />
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-[#f4f4f4] w-full h-full items-start md:items-center shadow-lg z-10 border-2">
                <div className="px-5 md:px-0 py-4">
                    <h1 className="text-2xl text-slate-800 mx-2 mb-3">
                        INFORMASI
                    </h1>
                    <div className="flex flex-col md:flex-row flex-wrap items-start my-1">
                        <span className="text-sm font-bold mx-2">
                            Kebijakan pengembalian
                        </span>
                        <span className="text-sm font-bold mx-2">
                            Pencari Lokasi Toko
                        </span>
                        <span className="text-sm font-bold mx-2">
                            Pembelian melalui Saluran Resmi
                        </span>
                        <span className="text-sm font-bold mx-2">
                            Sustainability
                        </span>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Beranda
