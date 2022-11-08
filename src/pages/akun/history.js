import React, { useEffect, useState } from 'react'
import User from '@/components/UserComponent/user'
import Input from '@/components/Input'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'

const History = () => {
    const router = useRouter()
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const [data, setData] = useState()
    const [history, setHistory] = useState()

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produk`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/history`)
            .then(res => {
                setHistory(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(history)
    const [gambar_produk, setGambar_produk] = useState()
    const [nama_produk, setNama_produk] = useState()
    const [kodeTransaksi, setKodeTransaksi] = useState()
    const [harga_produk, setHarga_produk] = useState()
    const [jumlah_produk, setJumlah_produk] = useState()
    const [total_harga, setTotal_harga] = useState()
    const [status, setStatus] = useState()
    const [waktuPesanan, setWaktuPesanan] = useState()

    const [review, setReview] = useState('Kamu nanyaeaa aku mau komen apa?')
    const [rating, setRating] = useState('Recommended')

    return (
        <User>
            <div>
                <div className="p-4 m-2 border-2 border-[#525252] bg-slate-500 rounded-lg max-w-[full] overflow-hidden">
                    <div className="flex flex-col">
                        <div className="flex flex-row flex-nowrap items-center w-full">
                            <Input
                                className={'border-2 w-full'}
                                type="text"
                                placeholder="Cari Transaksi"
                                values=""
                            />
                            <div className="flex flex-row justify-end">
                                <button className="bg-green-500 text-sm font-bold rounded-md p-2 mx-1 text-white">
                                    CARI
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row flex-nowrap items-center w-full mt-4">
                            <div className="title mr-2">
                                <span className="text-sm font-bold">
                                    STATUS
                                </span>
                            </div>
                            <div className="title">
                                <span className="text-xs font-bold border-2 px-2 py-1 rounded-md cursor-pointer mx-1">
                                    SEMUA
                                </span>
                                <span className="text-xs font-bold border-2 px-2 py-1 rounded-md cursor-pointer mx-1">
                                    BERLANGSUNG
                                </span>
                                <span className="text-xs font-bold border-2 px-2 py-1 rounded-md cursor-pointer mx-1">
                                    BERHASIL
                                </span>
                                <span className="text-xs font-bold border-2 px-2 py-1 rounded-md cursor-pointer mx-1">
                                    REFUND
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {history?.map((item, index) => (
                    <div
                        key={index}
                        className="m-2 border-2 border-[#525252] bg-slate-500 rounded-lg max-w-[full]">
                        <div className="flex flex-col m-2">
                            <div className="body">
                                <div className="flex flex-row flex-nowrap items-center w-full">
                                    <div className="inline-flex mr-2">
                                        <img
                                            src={
                                                process.env
                                                    .NEXT_PUBLIC_BACKEND_URL +
                                                '/' +
                                                item.gambar_produk
                                            }
                                            className="max-w-[85px]"
                                        />
                                    </div>
                                    <div className="flex flex-row flex-nowrap items-center justify-between w-full">
                                        <div className="desc1">
                                            <div className="inline-flex flex-col mt-0">
                                                <h1 className="text-lg font-bold">
                                                    {item.nama_produk}
                                                </h1>
                                                <span className="text-sm font-normal">
                                                    {item.jumlah} Barang | Rp.
                                                    {item.total_harga}
                                                </span>
                                                <span className="text-xs font-normal text-slate-800 cursor-pointer mt-1">
                                                    {item.kode_transaksi} -{' '}
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="inline-flex flex-col px-3">
                                            {item.status === 'proses' ? (
                                                <div className="flex flex-row flex-nowrap items-center justify-between w-full">
                                                    <button
                                                        className="btn btn-ghost bg-green-500 text-sm font-bold rounded-md p-2 mx-1 text-white"
                                                        onClick={() => {
                                                            axios
                                                                .put(
                                                                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/history/${item.id}/edit`,
                                                                    {
                                                                        status:
                                                                            'sukses',
                                                                    },
                                                                )
                                                                .then(res => {
                                                                    router.push(
                                                                        '/akun/history',
                                                                    )
                                                                    router.reload()
                                                                })
                                                                .catch(err => {
                                                                    console.log(
                                                                        err,
                                                                    )
                                                                })
                                                        }}>
                                                        SELESAI
                                                    </button>
                                                    <button
                                                        className="btn btn-ghost bg-red-500 text-sm font-bold rounded-md p-2 mx-1 text-white"
                                                        onClick={() => {
                                                            axios
                                                                .put(
                                                                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/history/${item.id}/edit`,
                                                                    {
                                                                        status:
                                                                            'dikembalikan',
                                                                    },
                                                                )
                                                                .then(res => {
                                                                    router.push(
                                                                        '/akun/history',
                                                                    )
                                                                    router.reload()
                                                                })
                                                                .catch(err => {
                                                                    console.log(
                                                                        err,
                                                                    )
                                                                })
                                                        }}>
                                                        REFUND
                                                    </button>
                                                </div>
                                            ) : item.status === 'sukses' ? (
                                                // button for modal review
                                                <>
                                                    <label
                                                        htmlFor="my-modal-6"
                                                        className="btn btn-ghost bg-green-500 text-sm font-bold rounded-md p-2 mx-1 text-white">
                                                        REVIEW
                                                    </label>
                                                    <input
                                                        type="checkbox"
                                                        id="my-modal-6"
                                                        className="modal-toggle"
                                                    />
                                                    <div className="modal modal-bottom sm:modal-middle bg-slate-800 bg-opacity-50">
                                                        <div className="modal-box bg-slate-600 text-slate-800">
                                                            <h3 className="text-lg font-bold text-center">
                                                                Review Produk
                                                            </h3>
                                                            <div className="rating">
                                                                <input
                                                                    type="radio"
                                                                    name="rating-1"
                                                                    className="mask mask-star"
                                                                    onClick={() =>
                                                                        setRating(
                                                                            'Gak Recommended Banget',
                                                                        )
                                                                    }
                                                                />
                                                                <input
                                                                    type="radio"
                                                                    name="rating-1"
                                                                    className="mask mask-star"
                                                                    onClick={() =>
                                                                        setRating(
                                                                            'Gak Recommended',
                                                                        )
                                                                    }
                                                                />
                                                                <input
                                                                    type="radio"
                                                                    name="rating-1"
                                                                    className="mask mask-star"
                                                                    onClick={() =>
                                                                        setRating(
                                                                            'Biasa Saja',
                                                                        )
                                                                    }
                                                                />
                                                                <input
                                                                    type="radio"
                                                                    name="rating-1"
                                                                    className="mask mask-star"
                                                                    onClick={() =>
                                                                        setRating(
                                                                            'Recommended',
                                                                        )
                                                                    }
                                                                />
                                                                <input
                                                                    type="radio"
                                                                    name="rating-1"
                                                                    className="mask mask-star"
                                                                    onClick={() =>
                                                                        setRating(
                                                                            'Recommended Banget',
                                                                        )
                                                                    }
                                                                />
                                                            </div>

                                                            <input
                                                                type="text"
                                                                className="input input-bordered w-full mt-2 bg-slate-400 text-slate-800"
                                                                placeholder="Tulis review anda disini"
                                                                value={review}
                                                                onChange={e =>
                                                                    setReview(
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                            />
                                                            <div className="modal-action">
                                                                <label
                                                                    onClick={() => {
                                                                        axios
                                                                            .post(
                                                                                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review_produk/create`,
                                                                                {
                                                                                    transaksi_id:
                                                                                        item.id,
                                                                                    status: rating,
                                                                                    komen: review,
                                                                                },
                                                                            )
                                                                            .then(
                                                                                res => {
                                                                                    axios
                                                                                        .put(
                                                                                            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/history/${item.id}/edit`,
                                                                                            {
                                                                                                status:
                                                                                                    'selesai',
                                                                                            },
                                                                                        )
                                                                                        .then(
                                                                                            res => {
                                                                                                router.push(
                                                                                                    '/akun/history',
                                                                                                )
                                                                                                router.reload()
                                                                                            },
                                                                                        )
                                                                                        .catch(
                                                                                            err => {
                                                                                                console.log(
                                                                                                    err,
                                                                                                )
                                                                                            },
                                                                                        )
                                                                                },
                                                                            )
                                                                            .catch(
                                                                                err => {
                                                                                    console.log(
                                                                                        err,
                                                                                    )
                                                                                },
                                                                            )
                                                                    }}
                                                                    htmlFor="my-modal-6"
                                                                    className="btn">
                                                                    KIRIM
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <span className="text-xs font-normal text-slate-800 mt-0">
                                                    {item.status}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </User>
    )
}

export default History
