import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { BsTrash } from 'react-icons/bs'
import Cookies from 'js-cookie'
import axios from 'axios'

const Keranjang = () => {
    const router = useRouter()
    const token = Cookies.get('token')
    var onDiscount = true

    const [data, setData] = useState()
    const [keranjang, setKeranjang] = useState([])
    const [total, setTotal] = useState([])

    const allValue = new FormData()
    allValue.append('keranjang', keranjang)

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/keranjang`)
            .then(response => {
                setData(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const deleteKeranjang = async id => {
        await axios
            .delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/keranjang/${id}`,
            )
            .then(res => {
                console.log(res)
                fetchData()
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        deleteKeranjang()
        fetchData()
    }, [])

    return (
        <AppLayout
            subTitle={
                <span className="bg-[#FFFFFF] shadow mt-3 max-w-7xl mx-auto py-0 px-0  ">
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
                </span>
            }
            headerX="TRUE"
            header={
                <span>
                    <h1 className="text-lg text-slate-800 font-bold">
                        Keranjang Belanja
                    </h1>
                </span>
            }>
            {token ? (
                <div className="mx-auto my-[2rem] max-w-[80rem] flex flex-col md:flex-row">
                    <div className="flex flex-col">
                        {/* <div className="inline-flex flex-row items-center justify-between min-w-[50vw] border-b-4 rounded-lg">
                                <span className="text-sm font-bold text-slate-800">
                                    <label className="inline-flex items-center">
                                        <input
                                            onClick={() => setChecked(!checked)}
                                            checked={checked}
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
                            </div> */}
                        <div className="inline-flex flex-col items-center justify-center min-w-[50vw] min-h-[30vh]">
                            {data?.map(item => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between w-full h-full p-4 mt-2 bg-slate-200 rounded-lg hover:bg-slate-500">
                                    <div className="flex flex-row">
                                        <span className="text-sm font-bold text-slate-800 my-auto mr-2">
                                            <label className="flex">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-md"
                                                    onChange={e => {
                                                        if (e.target.checked) {
                                                            setKeranjang([
                                                                ...keranjang,
                                                                item.id,
                                                            ])
                                                            setTotal([
                                                                ...total,
                                                                item.total_harga,
                                                            ])
                                                        } else {
                                                            setKeranjang(
                                                                keranjang.filter(
                                                                    x =>
                                                                        x !==
                                                                        item.id,
                                                                ),
                                                            )
                                                            setTotal(
                                                                total.filter(
                                                                    x =>
                                                                        x !==
                                                                        item.total_harga,
                                                                ),
                                                            )
                                                        }
                                                    }}
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
                                                    {item.produk.nama_produk}
                                                </p>
                                                <p className="text-xs font-normal text-slate-800">
                                                    New, {item.warna},{' '}
                                                    {item.ukuran}
                                                </p>
                                                <p className="text-xs font-normal text-slate-800">
                                                    {item.jumlah} x Rp{' '}
                                                    {item.total_harga
                                                        ? item.total_harga
                                                              .toString()
                                                              .replace(
                                                                  /\B(?=(\d{3})+(?!\d))/g,
                                                                  '.',
                                                              )
                                                        : 0}
                                                </p>
                                                <p className="text-sm font-bold text-slate-800 mt-2">
                                                    {onDiscount === false ? (
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
                                                            {/* Rp {item.harga} */}
                                                        </span>
                                                    )}
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="trash-icon text-2xl text-slate-800 flex-none gap-2">
                                        <button
                                            onClick={() => {
                                                deleteKeranjang(item.id)
                                            }}
                                            className="text-2xl text-red-700 opacity-[0.9] btn btn-ghost">
                                            <BsTrash size={20} />
                                        </button>
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
                                        Rp{' '}
                                        {total.reduce(
                                            (a, b) => parseInt(a) + parseInt(b),
                                            0,
                                        )}
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
                                    {/* <Link
                                        to={{
                                            pathname: '/checkout',
                                            state: keranjang,
                                        }}> */}
                                    <button
                                        onClick={e => {
                                            if (keranjang.length === 0) {
                                                alert('Silahkan pilih produk')
                                            } else {
                                                e.preventDefault()
                                                router.push({
                                                    pathname: '/checkout',
                                                    query: { id: keranjang },
                                                })
                                            }
                                        }}
                                        className="btn w-full py-2 text-lg font-bold text-white bg-slate-800 rounded-lg">
                                        Lanjutkan Pembayaran
                                    </button>
                                    {/* </Link> */}
                                    <button className="btn w-full py-2 text-lg font-bold text-slate-800 bg-slate-200 rounded-lg glass">
                                        Lanjutkan Belanja
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>asa</h1>
            )}

            <Head>
                <title>GakUniq - Keranjang..</title>
            </Head>
        </AppLayout>
    )
}

export default Keranjang
