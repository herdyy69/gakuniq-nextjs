import React, { useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const Checkout = () => {
    const products = [
        {
            id: 1,
            product_title: 'Costanza Bendelow',
            harga: 10000,
            qty: 1,
            color: 'Goldenrod',
            size: 'M',
            type: 'BFZ',
            image: 'http://dummyimage.com/82x92.png/5fa2dd/ffffff',
        },
        {
            id: 2,
            product_title: 'Costanza Bendelow',
            harga: 10000,
            qty: 2,
            color: 'Goldenrod',
            size: 'M',
            type: 'BFZ',
            image: 'http://dummyimage.com/82x92.png/5fa2dd/ffffff',
        },
    ]

    const totalQty = products.reduce((acc, item) => acc + item.qty, 0)
    const totalPrice = products.reduce((acc, item) => totalQty * item.harga, 0)

    const [wallet, setWallet] = useState('GAKUNIQ WALLET')
    const [voucher, setVoucher] = useState('NO VOUCHER')

    console.log(wallet)
    console.log(voucher)

    const walletOptions = [
        { value: 'GAKUNIQ WALLET', label: 'GAKUNIQ WALLET' },
        { value: 'OVO', label: 'OVO' },
        { value: 'GOPAY', label: 'GOPAY' },
        { value: 'DANA', label: 'DANA' },
    ]

    const voucherOptions = [
        { value: 'NO VOUCHER', label: 'NO VOUCHER', discount: 0 },
        { value: 'GAKUNIQ10', label: 'GAKUNIQ10', discount: 10 },
        { value: 'GAKUNIQ20', label: 'GAKUNIQ20', discount: 20 },
        { value: 'GAKUNIQ30', label: 'GAKUNIQ30', discount: 30 },
    ]

    const discount =
        (voucherOptions.find(item => item.value === voucher).discount / 100) *
        totalPrice

    const total = totalPrice - discount

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
                            Costanza Bendelow{' '}
                            <span className="text-xs font-normal">(RUMAH)</span>
                        </h1>
                        <p className="text-sm text-slate-800">0857-1234-5678</p>
                        <p className="text-sm text-slate-800">
                            Jl. Raya Ciputat No. 123, RT. 001, RW. 001
                            <br /> Ciputat, Tangerang Selatan, Banten 15412
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
                                        value={wallet}
                                        onChange={e =>
                                            setWallet(e.target.value)
                                        }>
                                        {walletOptions.map((option, i) => (
                                            <option
                                                key={i}
                                                value={option.value}>
                                                {option.label}
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
                                        {voucherOptions.map((option, i) => (
                                            <option
                                                key={i}
                                                value={option.value}>
                                                {option.label}
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
                                        Rp. {totalPrice}
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
                                        Rp. {totalPrice}
                                    </p>
                                </span>
                                <span className="flex flex-row justify-between">
                                    <p className="text-sm font-normal text-slate-800">
                                        Diskon
                                    </p>
                                    <p className="text-sm font-normal text-slate-800">
                                        Rp.{discount}
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
                                <button className="btn  btn-ghost bg-[#FFC700] text-slate-800 font-bold py-2 px-4 rounded-md">
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
                        {products.map((product, i) => (
                            <span
                                key={i}
                                className="bg-slate-800 min-w-[30vw] max-w-[30vw] min-h-[20vh] rounded-sm m-1 flex flex-row items-center justify-start overflow-hidden">
                                <img
                                    src="/logo.png"
                                    className="w-[100px] h-auto mx-1"
                                />
                                <div className="flex flex-col mx-1">
                                    <h1 className="text-lg font-bold text-white">
                                        {product.product_title}
                                    </h1>
                                    <p className="text-sm text-white">
                                        {product.type}, {product.color},{' '}
                                        {product.size}
                                    </p>
                                    <p className="text-sm text-white">
                                        {product.qty} x Rp {product.harga}
                                    </p>
                                    <p className="text-sm font-bold text-white">
                                        Rp {product.qty * product.harga}
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
