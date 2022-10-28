import React, { useState } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { BsTrash } from 'react-icons/bs'

const Keranjang = () => {
    const router = useRouter()

    var onDiscount = true

    const DummyData = [
        {
            id: 1,
        },
        {
            id: 2,
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
                            KERANJANG
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Keranjang Belanja
                    </h1>
                </div>
            }>
            <div className="mx-auto my-[2rem] max-w-[80rem]">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col">
                        <div className="inline-flex flex-row items-center justify-between min-w-[50vw] border-b-4 rounded-lg">
                            <span className="text-sm font-bold text-slate-800">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-md"
                                    />
                                    <span className="ml-2 opacity-[0.7]">
                                        Pilih Semua
                                    </span>
                                </label>
                            </span>
                            <span className="text-sm font-bold text-slate-800">
                                <label className="inline-flex items-center">
                                    <Link
                                        href={{
                                            pathname: '',
                                        }}>
                                        <a className="ml-2 text-red-700 opacity-[0.9]">
                                            Hapus Semua
                                        </a>
                                    </Link>
                                </label>
                            </span>
                        </div>
                        <div className="inline-flex flex-col items-center justify-center min-w-[50vw] min-h-[30vh]">
                            {DummyData.map(item => (
                                <div className="flex items-center justify-between w-full h-full p-4 mt-2 bg-slate-200 rounded-lg hover:bg-slate-500">
                                    <div className="flex flex-row">
                                        <span className="text-sm font-bold text-slate-800 my-auto mr-2">
                                            <label className="flex">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-md"
                                                />
                                            </label>
                                        </span>
                                        <div className="flex flex-row justify-items-start justify-center mx-auto">
                                            <img
                                                src="https://i.ibb.co/0nQqZ1t/Rectangle-1.png"
                                                alt="Rectangle-1"
                                                border="0"
                                                className="max-w-[90px] max-h-[90px] rounded-lg"
                                            />
                                            <span className="all-describe mx-2 flex-1">
                                                <p className="text-lg font-bold text-slate-800">
                                                    Kemeja Pria
                                                </p>
                                                <p className="text-xs font-normal text-slate-800">
                                                    New, Blue, M
                                                </p>
                                                <p className="text-xs font-normal text-slate-800">
                                                    1 x Rp 200.000
                                                </p>
                                                <p className="text-sm font-bold text-slate-800 mt-2">
                                                    {onDiscount === true ? (
                                                        <>
                                                            <span className="bg-red-800 rounded-md px-2 py-1 text-white text-xs">
                                                                90% OFF
                                                            </span>
                                                            <span className="mx-2 line-through text-xs text-slate-800">
                                                                Rp 200.000
                                                            </span>
                                                            <span className=" text-slate-800">
                                                                Rp 20.000
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span className=" text-slate-800">
                                                            Rp 20.000
                                                        </span>
                                                    )}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="trash-icon text-2xl text-slate-800 flex-none gap-2">
                                        <Link
                                            href={{
                                                pathname: '',
                                            }}>
                                            <a className="text-2xl text-red-700 opacity-[0.9] btn btn-ghost">
                                                <BsTrash size={20} />
                                            </a>
                                        </Link>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full mt-4 md:mt-0 md:ml-4">
                        <div className="flex flex-col w-full h-auto p-4 bg-slate-200 rounded-lg">
                            <div className="flex flex-col w-full h-full">
                                <h1 className="text-2xl font-bold text-slate-800 mb-2">
                                    Ringkasan Belanja
                                </h1>
                                <div className="flex flex-row items-center justify-between">
                                    <p className="text-lg font-normal text-slate-800">
                                        Total Harga
                                    </p>
                                    <p className="text-lg font-bold text-slate-800">
                                        Rp 20.000
                                    </p>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <p className="text-lg font-normal text-slate-800">
                                        Biaya Lainnya
                                    </p>
                                    <p className="text-lg font-bold text-slate-800">
                                        Rp 0
                                    </p>
                                </div>
                                <span className="flex flex-row items-center justify-between mt-2">
                                    <hr className="w-full border-1 border-slate-400" />
                                </span>
                                <div className="flex flex-row items-center justify-between border-t-2 border-x-zinc-900">
                                    <p className="text-lg font-normal text-slate-800">
                                        Total Harga
                                    </p>
                                    <p className="text-lg font-bold text-slate-800">
                                        Rp 20.000
                                    </p>
                                </div>
                                <span className="flex flex-col items-center justify-between mt-2">
                                    <Link
                                        href={{
                                            pathname: '/checkout',
                                        }}>
                                        <button className="btn w-full py-2 text-lg font-bold text-white bg-slate-800 rounded-lg">
                                            Lanjutkan Pembayaran
                                        </button>
                                    </Link>
                                    <button className="btn w-full py-2 text-lg font-bold text-slate-800 bg-slate-200 rounded-lg glass">
                                        Lanjutkan Belanja
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Head>
                <title>GakUniq - Keranjang..</title>
            </Head>
        </AppLayout>
    )
}

export default Keranjang
