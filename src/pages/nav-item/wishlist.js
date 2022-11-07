import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { BsTrash } from 'react-icons/bs'
import Guest from '@/components/Layouts/Guest'
import Cookies from 'js-cookie'
import axios from 'axios'
const Wishlist = () => {
    const router = useRouter()
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const [data, setData] = useState()
    const [dataProduk, setDataProduk] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [showAlert, setshowAlert] = useState(false)

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/wishlist`)
            .then(res => {
                setData(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                setError(true)
                setLoading(false)
            })
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produk`)
            .then(res => {
                setDataProduk(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                setError(true)
                setLoading(false)
            })
    }, [])

    const deleteWishlist = async id => {
        await axios
            .delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/wishlist/${id}`)
            .then(res => {
                console.log(res)
                setshowAlert('success delete wishlist')
            })
            .catch(err => {
                console.log(err)
            })
    }

    var onDiscount = false

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
                            WISHLIST
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div>
                    <h1 className="text-lg text-slate-800 font-bold">
                        Wishlist
                    </h1>
                </div>
            }>
            {token ? (
                <div className="mx-auto my-[2rem] max-w-[80vw]">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col">
                            <div className="inline-flex flex-row items-center justify-start min-w-[50vw] border-b-4 rounded-lg">
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
                            <div className="inline-flex flex-col items-center justify-center min-w-[80vw] min-h-[30vh]">
                                {data?.map(item => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between w-full h-full p-4 mt-2 bg-slate-200 rounded-lg hover:bg-slate-500">
                                        <div className="flex flex-row">
                                            <div className="flex flex-row items-center justify-center mx-auto">
                                                <img
                                                    src="https://i.ibb.co/0nQqZ1t/Rectangle-1.png"
                                                    alt="Rectangle-1"
                                                    border="0"
                                                    className="max-w-[90px] max-h-[90px] rounded-lg"
                                                />
                                                <span className="all-describe mx-2 flex-1">
                                                    <p className="text-lg font-bold text-slate-800">
                                                        {
                                                            dataProduk?.find(
                                                                produk =>
                                                                    produk.id ===
                                                                    item.produk_id,
                                                            )?.nama_produk
                                                        }
                                                    </p>

                                                    <p className="text-xs font-normal text-slate-800">
                                                        {
                                                            dataProduk?.find(
                                                                produk =>
                                                                    produk.id ===
                                                                    item.produk_id,
                                                            )?.deskripsi
                                                        }
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
                                                                Rp{' '}
                                                                {
                                                                    dataProduk?.find(
                                                                        produk =>
                                                                            produk.id ===
                                                                            item.produk_id,
                                                                    )?.harga
                                                                }
                                                            </span>
                                                        )}
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="trash-icon text-2xl text-slate-800 flex-none gap-2">
                                            <a
                                                onClick={() =>
                                                    deleteWishlist(item.id)
                                                }
                                                className="text-2xl text-red-700
                                                opacity-[0.9] btn btn-ghost">
                                                <BsTrash size={20} />
                                            </a>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <div className="flex flex-col w-full mt-4 md:mt-0 md:ml-4">
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
                                    <button className="btn w-full py-2 text-lg font-bold text-white bg-slate-800 rounded-lg">
                                        Lanjutkan Pembayaran
                                    </button>
                                    <button className="btn w-full py-2 text-lg font-bold text-slate-800 bg-slate-200 rounded-lg glass">
                                        Lanjutkan Belanja
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            ) : (
                <Guest />
            )}

            <Head>
                <title>GakUniq - Wislist..</title>
            </Head>
        </AppLayout>
    )
}

export default Wishlist
