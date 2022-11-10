import React, { useEffect, useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { HrefPusherwishlist, HrefPusherDetail } from '@/components/hrefPusher'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'

const Wanita = () => {
    const router = useRouter()
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const [params, setParams] = useState(router.query.id)
    const [data, setData] = useState()
    const [dataSub, setDataSub] = useState()
    const [dataWishlist, setDataWishlist] = useState()
    const [showAlert, setshowAlert] = useState(false)

    const addToWishlist = async id => {
        await axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/wishlist/create`,
                {
                    produk_id: id,
                },
            )
            .then(res => {
                console.log(res)
                setshowAlert('success add to wishlist')
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produk/kategori/${params}`,
            )
            .then(response => {
                setData(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sub_kategori`)
            .then(response => {
                setDataSub(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/wishlist`)
            .then(res => {
                setDataWishlist(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <AppLayout
            subTitle={
                <div className="bg-[#FFFFFF] shadow mt-3">
                    <div className="max-w-7xl mx-auto py-0 px-0 shadow">
                        <p className="text-xs py-4 px-4 font-extrabold">
                            <Link
                                href={{
                                    pathname: '/kategori/wanita',
                                }}>
                                <a className="underline">GAKUNIQ</a>
                            </Link>
                            <span className="text-sm px-[2.5px] text-[#b9b9b9]">
                                /
                            </span>
                            Wanita
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div className="flex flex-col">
                    <h1 className="text-4xl text-slate-800 font-bold mb-2">
                        WOMENS
                    </h1>
                    <div className="flex flex-col items-start">
                        <img
                            src="https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_960_720.jpg"
                            alt="Wanita"
                            className="max-h-[400px] w-full object-cover"
                        />
                    </div>
                </div>
            }>
            <Head>
                <title>GakUniq - Wanita..</title>
            </Head>
            <div className="mt-4">
                {showAlert && (
                    <div className="toast toast-start z-[999]">
                        <div className={'alert alert-success'}>
                            <div className="flex flex-row">
                                <span>{showAlert}</span>
                                <button
                                    className="bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none"
                                    onClick={() => setshowAlert(false)}>
                                    <span>×</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex flex-col items-center justify-center">
                    {/* <h1 className="text-2xl text-slate-800 font-bold mb-2">
                        KATALOG WOMEN
                    </h1> */}
                    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
                        {data?.map(item => (
                            <div
                                key={item.id}
                                className="min-w-[15rem] max-w-[30rem] min-h-[40vh] rounded-lg overflow-hidden shadow-lg flex flex-col border-[3px] glass z-10 m-1">
                                <div className="inline-flex flex-col p-3">
                                    <div className="flex fle-row items-center justify-center">
                                        <img
                                            src={
                                                process.env
                                                    .NEXT_PUBLIC_BACKEND_URL +
                                                '/' +
                                                item.gambar_produk1
                                            }
                                            alt="logo"
                                            className="min-w-[190px] max-w-[190px] min-h-[150px] max-h-[150px] object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="font-bold text-base mt-1 text-slate-800">
                                        {item.nama_produk}
                                    </div>
                                    <p className="text-slate-700 text-xs">
                                        {
                                            dataSub?.find(
                                                x =>
                                                    x.id ===
                                                    item.sub_kategori_id,
                                            )?.sub_kategori
                                        }
                                    </p>
                                    <span className="text-lg font-bold">
                                        Rp{' '}
                                        {item.diskon > 0
                                            ? Math.round(
                                                  item.harga -
                                                      (item.harga *
                                                          item.diskon) /
                                                          100,
                                              )
                                                  .toString()
                                                  .replace(
                                                      /\B(?=(\d{3})+(?!\d))/g,
                                                      '.',
                                                  )
                                            : item.harga
                                                  .toString()
                                                  .replace(
                                                      /\B(?=(\d{3})+(?!\d))/g,
                                                      '.',
                                                  )}
                                    </span>
                                    {item.diskon > 0 && (
                                        <div className="flex flex-row flex-nowrap items-center">
                                            <div className="badge rounded-[5px] p-3 bg-red-500 border-hidden text-white font-bold">
                                                {item.diskon} %
                                            </div>
                                            <span className="text-xs font-light line-through mx-2">
                                                Rp
                                                {item.harga
                                                    .toString()
                                                    .replace(
                                                        /\B(?=(\d{3})+(?!\d))/g,
                                                        '.',
                                                    )}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex flex-col md:flex-row">
                                        <button
                                            onClick={e => {
                                                e.preventDefault()
                                                router.push({
                                                    pathname: `/product/${item.nama_produk}`,
                                                    query: { id: item.id },
                                                })
                                            }}
                                            className="bg-transparent glass hover:bg-[#57534e] text-slate-800 text-sm font-bold px-3 py-2 rounded-sm mt-3">
                                            Detail
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (token) {
                                                    dataWishlist?.find(
                                                        x =>
                                                            x.produk_id ===
                                                            item.id,
                                                    )
                                                        ? setshowAlert(
                                                              'Produk sudah ada di wishlist',
                                                          )
                                                        : addToWishlist(item.id)
                                                } else {
                                                    setshowAlert(
                                                        'Silahkan login terlebih dahulu',
                                                    )
                                                    setTimeout(() => {
                                                        router.push('/login')
                                                    }, 2000)
                                                }
                                            }}
                                            className="bg-transparent glass hover:bg-[#78716c] text-slate-800 text-sm font-bold px-3 py-2 rounded-sm mt-3">
                                            Wishlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Wanita
