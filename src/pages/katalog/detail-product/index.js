import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const Pria = () => {
    const size = [
        {
            id: 1,
            size: 'S',
        },
        {
            id: 2,
            size: 'M',
        },
        {
            id: 3,
            size: 'L',
        },
        {
            id: 4,
            size: 'XL',
        },
    ]
    const warna = [
        {
            id: 1,
            warna: '#525252',
        },
        {
            id: 2,
            warna: '#515151',
        },
    ]

    return (
        <AppLayout
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
                            DETAIL PRODUCT
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div className="flex flex-col">
                    <h1 className="text-2xl text-slate-800 font-bold">
                        CELANA APA AJA...
                    </h1>
                </div>
            }>
            <div className="bg-[#FFFFFF] shadow">
                <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 shadow">
                    <div className="flex flex-row flex-wrap items-start justify-start">
                        <div className="flex flex-col items-start mx-5">
                            <div className="flex flex-row flex-wrap">
                                <div className="carousel w-96">
                                    <div
                                        id="item1"
                                        className="carousel-item w-full">
                                        <div className="bg-slate-800 h-48 w-96 my-1 mx-1"></div>
                                    </div>
                                    <div
                                        id="item2"
                                        className="carousel-item w-full">
                                        <div className="bg-slate-700 h-48 w-96 my-1 mx-1"></div>
                                    </div>
                                    <div
                                        id="item3"
                                        className="carousel-item w-full">
                                        <div className="bg-slate-600 h-48 w-96 my-1 mx-1"></div>
                                    </div>
                                    <div
                                        id="item4"
                                        className="carousel-item w-full">
                                        <div className="bg-slate-500 h-48 w-96 my-1 mx-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap">
                                <a href="#item1" className="">
                                    <div className="bg-slate-800  h-10 w-10 my-1 md:my-1 mx-1"></div>
                                </a>
                                <a href="#item2" className="">
                                    <div className="bg-slate-700  h-10 w-10 my-1 md:my-1 mx-1"></div>
                                </a>
                                <a href="#item3" className="">
                                    <div className="bg-slate-600  h-10 w-10 my-1 md:my-1 mx-1"></div>
                                </a>
                                <a href="#item4" className="">
                                    <div className="bg-slate-500  h-10 w-10 my-1 md:my-1 mx-1"></div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap w-96 mx-5">
                            <h1 className="text-2xl font-bold">
                                CELANA LOREM IPSUM
                            </h1>
                            <span className="text-lg font-bold">
                                Rp 800.000
                            </span>
                            <span className="text-xs font-bold text-slate-800">
                                NEW
                            </span>
                            <span className="text-sm font-bold text-slate-800 mt-5">
                                Blablablablablablablablablablablablabla
                            </span>
                            <hr className="w-full border-[0.5px] my-6" />
                            <div className="warna">
                                <span className="text-sm font-bold text-slate-800">
                                    WARNA
                                </span>
                                <div className="flex flex-row flex-wrap">
                                    {warna.map(data => (
                                        <label
                                            className="custom-radio"
                                            key={data.id}>
                                            <input
                                                type="radio"
                                                name="radio-warna"
                                                value={data.warna}
                                            />
                                            <span
                                                className="radio-btn"
                                                style={{
                                                    background: data.warna,
                                                }}></span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="ukuran">
                                <span className="text-sm font-bold text-slate-800">
                                    UKURAN
                                </span>
                                <div className="flex flex-row flex-wrap">
                                    <span className="label-ukuran text-sm font-bold text-slate-800">
                                        {size.map(data => (
                                            <label
                                                className="custom-radio"
                                                key={data.id}>
                                                <input
                                                    type="radio"
                                                    name="radio-ukuran"
                                                    value={data.size}
                                                />
                                                <span className="radio-btn">
                                                    <h3>{data.size}</h3>
                                                </span>
                                            </label>
                                        ))}
                                    </span>
                                </div>
                            </div>
                            <div className="stok">
                                <span className="text-sm font-bold text-slate-800">
                                    JUMLAH
                                </span>
                                <div className="flex flex-row flex-wrap">
                                    <select>
                                        <option
                                            value="1"
                                            className="text-sm font-bold text-slate-800">
                                            NULL
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start md:justify-around flex-wrap py-2">
                                <button className="btn btn-primary my-1">
                                    TAMBAH KE KERANJANG
                                </button>
                                <button className="btn btn-primary my-1">
                                    TAMBAH KE WISLIST
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap w-auto overflow-scroll">
                            <div className="flex flex-col flex-wrap w-96 pb-2">
                                <h1 className="text-2xl font-bold">
                                    NULL ULASAN
                                </h1>
                                <div className="border-2 p-5">
                                    <div className="ulasan border-t-2">
                                        <div className="datanya py-2">
                                            <h1 className="text-sm font-bold">
                                                NAMA NULL
                                            </h1>
                                            <span className="text-xs">
                                                Recomended
                                            </span>
                                            <p className="truncate">
                                                blablablablablablabssssssssssssssssssssssssssssslablablablablablablabalblblablabalbalabla
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Head>
                <title>GakUniq - Pria..</title>
            </Head>
        </AppLayout>
    )
}

export default Pria
