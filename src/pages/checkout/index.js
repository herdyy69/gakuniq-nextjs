import React, { useState, useEffect } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import axios from 'axios'

const Checkout = () => {
    const router = useRouter()
    const token = Cookies.get('token')
    const [data, setData] = useState()
    const [user, setUser] = useState({})
    const [voucherme, setVoucherme] = useState()

    const [params, setParams] = useState(router.query.id)

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/keranjang/`)
            .then(response => {
                setData(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`)
            .then(response => {
                setUser(response.data.data[0])
            })
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher`)
            .then(response => {
                setVoucherme(response.data.data)
            })
    }
    console.log(voucherme)
    useEffect(() => {
        fetchData()
    }, [])

    const [voucher, setVoucher] = useState('NO VOUCHER')

    const walletOptions = [
        { value: 'gakuniq wallet', label: 'GAKUNIQ WALLET', saldo: user.saldo },
        { value: 'OVO', label: 'OVO' },
        { value: 'GOPAY', label: 'GOPAY' },
        { value: 'DANA', label: 'DANA' },
    ]

    const paramArr = params
    const filteredData =
        data?.filter(item => {
            return paramArr?.includes(item.id.toString())
        }) || []

    const totalPrice = filteredData.reduce(
        (acc, item) => item.total_harga + acc,
        0,
    )
    const voucherDiscount = voucherme?.filter(item => {
        return item.kode_voucher === voucher
    })

    const totalDiscount = voucherDiscount?.reduce(
        (acc, item) => item.diskon + acc,
        0,
    )
    const discount = (totalDiscount / 100) * totalPrice
    const total = totalPrice - discount

    const [metode_pembayaran, setMetode_pembayaran] = useState('gakuniq wallet')
    const [waktu_pemesanan, setWaktu_pemesanan] = useState(
        new Date().toISOString().slice(0, 19).replace('T', ' '),
    )
    const postCheckout = async () => {
        filteredData.map(item => {
            axios
                .post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/transaksi/create`,
                    {
                        keranjang_id: item.id,
                        voucher_id: voucherDiscount[0]?.id,
                        metode_pembayaran: metode_pembayaran,
                        waktu_pemesanan: waktu_pemesanan,
                    },
                )
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }

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
                            CHECKOUT
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Checkout
                    </h1>
                </div>
            }>
            <div className="mx-auto my-[2rem] max-w-[80rem]">
                <div className="flex flex-col items-start">
                    <h2 className="text-xl font-bold text-slate-800">
                        Alamat Pengiriman
                    </h2>
                    <span className="text-sm text-slate-800 border-y-[1px] border-slate-700 py-3 my-3 w-full">
                        <h1 className="text-lg font-bold text-slate-800">
                            {user
                                ? user.nama_depan + ' ' + user.nama_belakang
                                : ''}
                            <span className="text-xs font-normal">
                                {' '}
                                ({user ? user.label_alamat : ''})
                            </span>
                        </h1>
                        <p className="text-sm text-slate-800">
                            {user ? user.no_telepon : ''}
                        </p>
                        <p className="text-sm text-slate-800">
                            {user ? user.alamat_lengkap : ''}
                            <br /> {user ? user.kota_kecamatan : ''},{' '}
                        </p>
                    </span>
                    <div className="flex border-y-2 border-slate-700 py-3 my-3 w-full">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col min-w-[30vw] max-w-[30vw]">
                                <div className="flex flex-row justify-between">
                                    <h1 className="text-lg font-bold text-slate-800">
                                        Metode Pembayaran
                                    </h1>
                                    <select
                                        className="text-sm text-slate-800"
                                        value={metode_pembayaran}
                                        onChange={e =>
                                            setMetode_pembayaran(e.target.value)
                                        }>
                                        {walletOptions.map((option, i) => (
                                            <option
                                                key={i}
                                                value={option.value}
                                                onChange={e =>
                                                    setMetode_pembayaran(
                                                        e.target.value,
                                                    )
                                                }>
                                                {option.value}{' '}
                                                {option.saldo
                                                    ? '-' +
                                                      option.saldo
                                                          .toString()
                                                          .replace(
                                                              /(\d)(?=(\d{3})+(?!\d))/g,
                                                              '$1.',
                                                          )
                                                          .concat(' IDR')
                                                    : ''}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <span className="my-2"></span>
                                <div className="flex flex-row justify-between">
                                    <h1 className="text-lg font-bold text-slate-800">
                                        Voucher
                                    </h1>
                                    <select
                                        className="text-sm text-slate-800"
                                        value={voucher}
                                        onChange={e =>
                                            setVoucher(e.target.value)
                                        }>
                                        {/* filter berdasarkan harga terendah */}
                                        {voucherme
                                            ?.sort(
                                                (a, b) => a.diskon - b.diskon,
                                            )
                                            .map((option, i) => (
                                                <option
                                                    key={i}
                                                    value={option.kode_voucher}>
                                                    {option.kode_voucher} ({' '}
                                                    {option.diskon}% )
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col bg-slate-200 min-w-[50vw] max-w-[50vw] rounded-md p-3 ml-0 md:ml-5">
                                <h1 className="text-lg font-bold text-slate-800">
                                    Ringkasan Belanja
                                </h1>
                                <span className="flex flex-row justify-between">
                                    <p className="text-sm font-normal text-slate-800">
                                        Subtotal Produk
                                    </p>
                                    <p className="text-sm font-normal text-slate-800">
                                        Rp.{' '}
                                        {totalPrice
                                            ? totalPrice
                                                  .toString()
                                                  .replace(
                                                      /\B(?=(\d{3})+(?!\d))/g,
                                                      '.',
                                                  )
                                            : ''}
                                    </p>
                                </span>
                                <span className="flex flex-row justify-between">
                                    <p className="text-sm font-normal text-slate-800">
                                        Biaya Lainnya
                                    </p>
                                    <p className="text-sm font-normal text-slate-800">
                                        Rp. 0
                                    </p>
                                </span>
                                <span className="flex flex-row justify-between">
                                    <p className="text-lg font-bold text-slate-800">
                                        Subtotal
                                    </p>
                                    <p className="text-lg font-bold text-slate-800">
                                        Rp.{' '}
                                        {totalPrice
                                            ? totalPrice
                                                  .toString()
                                                  .replace(
                                                      /\B(?=(\d{3})+(?!\d))/g,
                                                      '.',
                                                  )
                                            : ''}
                                    </p>
                                </span>
                                <span className="flex flex-row justify-between">
                                    <p className="text-sm font-normal text-slate-800">
                                        Diskon
                                    </p>
                                    <p className="text-sm font-normal text-slate-800">
                                        Rp. {discount} ({totalDiscount}%)
                                    </p>
                                </span>
                                <span className="flex flex-row justify-between">
                                    <p className="text-lg font-bold text-slate-800">
                                        Total
                                    </p>
                                    <p className="text-lg font-bold text-slate-800">
                                        Rp. {total}
                                    </p>
                                </span>
                            </div>
                            <span className="flex flex-col  ml-1 mt-auto">
                                <button
                                    onClick={() => {
                                        if (
                                            metode_pembayaran ===
                                            'gakuniq wallet'
                                        ) {
                                            if (user.saldo < total) {
                                                alert(
                                                    'Saldo GAKUNIQ WALLET anda tidak mencukup',
                                                )
                                            } else {
                                                postCheckout()
                                            }
                                        } else {
                                            postCheckout()
                                        }
                                    }}
                                    className="btn  btn-ghost bg-[#FFC700] text-slate-800 font-bold py-2 px-4 rounded-md">
                                    Checkout
                                </button>
                                <span className="my-[1px]"></span>
                                <button className="btn  btn-ghost bg-red-600 text-slate-800 font-bold py-2 px-4 rounded-md">
                                    Cancel
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap">
                        {filteredData.map((item, i) => (
                            <span
                                key={i}
                                className="bg-slate-800 min-w-[30vw] max-w-[30vw] min-h-[20vh] rounded-sm m-1 flex flex-row items-center justify-start overflow-hidden">
                                <img
                                    src="/logo.png"
                                    className="w-[100px] h-auto mx-1"
                                />
                                <div className="flex flex-col mx-1">
                                    <h1 className="text-lg font-bold text-white">
                                        {item.produk.nama_produk}
                                    </h1>
                                    <p className="text-sm text-white">
                                        New, {item.ukuran}, {item.warna}
                                    </p>
                                    <p className="text-sm text-white">
                                        {item.jumlah} x Rp{''}
                                        {item.total_harga}
                                    </p>
                                </div>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <Head>
                <title>GakUniq - Checkout..</title>
            </Head>
        </AppLayout>
    )
}

export default Checkout
