import NavLink from '@/components/NavLink'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Select from 'react-select'

const Checkout = props => {
    const router = useRouter()

    const data = [
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
            qty: 1,
            color: 'Goldenrod',
            size: 'M',
            type: 'BFZ',
            image: 'http://dummyimage.com/82x92.png/5fa2dd/ffffff',
        },
    ]

    // var onCart = data.length

    // const [value, setValue] = useState('GAKUNIQ WALLET')
    // const [voucher, setVoucher] = useState('NO VOUCHER')

    // const voucherOptions = [
    //     { value: 'NO VOUCHER', label: 'NO VOUCHER', discount: 0 },
    //     { value: 'GAKUNIQ10', label: 'GAKUNIQ10', discount: 10 },
    //     { value: 'GAKUNIQ20', label: 'GAKUNIQ20', discount: 20 },
    //     { value: 'GAKUNIQ30', label: 'GAKUNIQ30', discount: 30 },
    // ]

    // const totalQty = data.reduce((acc, item) => {
    //     return acc + item.qty
    // }, 0)
    // const totalHarga = data.reduce((acc, item) => {
    //     return acc + item.harga * item.qty
    // }, 0)
    // const ppn = (10 / 100) * totalHarga
    // const totalHargaPpn = totalHarga - ppn

    // const discount =
    //     (voucherOptions.find(x => x.value === voucher).discount / 100) *
    //     totalHargaPpn

    // const discountX = voucherOptions.find(x => x.value === voucher).discount

    // const allPrice = totalHargaPpn - discount

    // console.log(value)
    // console.log(voucher)

    // const [allValue, setAllValue] = useState()

    // const allData = {
    //     value,
    //     voucher,
    //     totalQty,
    //     totalHarga,
    //     ppn,
    //     totalHargaPpn,
    //     discount,
    //     discountX,
    //     allPrice,
    // }

    // const handleCheckout = () => {
    //     router.push({
    //         pathname: '/checkout/confirm',
    //         query: allData,
    //     })
    // }

    const [wallet, setWallet] = useState('GAKUNIQ WALLET')

    console.log(wallet)

    const walletOptions = [
        { value: 'GAKUNIQ WALLET', label: 'GAKUNIQ WALLET' },
        { value: 'OVO', label: 'OVO' },
        { value: 'GOPAY', label: 'GOPAY' },
        { value: 'DANA', label: 'DANA' },
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
                            CHECKOUT VOUCHER
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Checkout Voucher
                    </h1>
                </div>
            }>
            <div className="mx-auto my-[2rem] max-w-[80rem]">
                <div className="flex flex-row border-y-2 border-slate-700 py-3 my-3 w-full">
                    <div className="flex flex-col items-start justify-between">
                        <div className="flex flex-col bg-slate-200 min-w-[50vw] max-w-[70vw] rounded-md p-3">
                            <h1 className="text-lg font-bold text-slate-800">
                                Ringkasan Belanja
                            </h1>
                            <span className="flex flex-row justify-between">
                                <p className="text-sm font-normal text-slate-800">
                                    Nama Voucher
                                </p>
                                <p className="text-sm font-normal text-slate-800">
                                    gpt2033
                                </p>
                            </span>
                            <span className="flex flex-row justify-between">
                                <p className="text-sm font-normal text-slate-800">
                                    Harga Voucher
                                </p>
                                <p className="text-sm font-normal text-slate-800">
                                    Rp. 999
                                </p>
                            </span>

                            <span className="flex flex-row justify-between">
                                <p className="text-lg font-bold text-slate-800">
                                    Total
                                </p>
                                <p className="text-lg font-bold text-slate-800">
                                    Rp. 9999
                                </p>
                            </span>
                        </div>
                        <div className="flex flex-col min-w-[30vw] max-w-[30vw] my-3">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-lg font-bold text-slate-800">
                                    Metode Pembayaran
                                </h1>
                                <select
                                    className="text-sm text-slate-800"
                                    value={wallet}
                                    onChange={e => setWallet(e.target.value)}>
                                    {walletOptions.map((option, i) => (
                                        <option key={i} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <span className="flex flex-row  ml-1 mt-auto">
                            <button className="btn  btn-ghost bg-[#FFC700] text-slate-800 font-bold py-2 px-4 rounded-md">
                                Checkout
                            </button>
                            <span className="mx-[1px]"></span>
                            <button className="btn  btn-ghost bg-red-600 text-slate-800 font-bold py-2 px-4 rounded-md">
                                Cancel
                            </button>
                        </span>
                    </div>
                    <div
                        className="bg-slate-800 min-h-full w-full mx-3 flex flex-row items-center justify-center overflow-hidden rounded-md"
                        style={{
                            backgroundImage: `url(https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <h1>
                            <span className="text-4xl font-bold text-white">
                                HAPPY SHOPPING
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
            <Head>
                <title>GakUniq - Checkout Voucher..</title>
            </Head>
        </AppLayout>
    )
}

export default Checkout
