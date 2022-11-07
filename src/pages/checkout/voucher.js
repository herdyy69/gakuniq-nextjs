import NavLink from '@/components/NavLink'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'js-cookie'
import axios from 'axios'

const Checkout = props => {
    const router = useRouter()
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const [params, setParams] = useState(router.query.id)
    const [voucher, setVoucher] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher/${params}`)
            .then(res => {
                setVoucher(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`)
            .then(response => {
                setUser(response.data.data[0])
            })
    }, [])

    const [metode_pembayaran, setMetode_pembayaran] = useState('gakuniq wallet')

    const walletOptions = [
        { value: 'gakuniq wallet', label: 'GAKUNIQ WALLET', saldo: user.saldo },
        { value: 'OVO', label: 'OVO' },
        { value: 'GOPAY', label: 'GOPAY' },
        { value: 'DANA', label: 'DANA' },
    ]

    const checkout = () => {
        axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher_user/create`,
                {
                    metode_pembayaran: metode_pembayaran,
                    voucher_id: voucher.id,
                },
            )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
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
                                    {voucher.kode_voucher}
                                </p>
                            </span>
                            <span className="flex flex-row justify-between">
                                <p className="text-sm font-normal text-slate-800">
                                    Harga Voucher
                                </p>
                                <p className="text-sm font-normal text-slate-800">
                                    Rp. {voucher.harga}
                                </p>
                            </span>

                            <span className="flex flex-row justify-between">
                                <p className="text-lg font-bold text-slate-800">
                                    Total
                                </p>
                                <p className="text-lg font-bold text-slate-800">
                                    Rp. {voucher.harga}
                                </p>
                            </span>
                        </div>
                        <div className="flex flex-col min-w-[30vw] max-w-[auto] my-3">
                            <div className="flex flex-row items-center justify-between">
                                <h1 className="text-lg font-bold text-slate-800 mr-3">
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
                                                ? '- ' +
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
                        </div>
                        <span className="flex flex-row  ml-1 mt-auto">
                            <button
                                onClick={e => {
                                    if (
                                        metode_pembayaran === 'gakuniq wallet'
                                    ) {
                                        if (user.saldo < voucher.harga) {
                                            alert(
                                                'Saldo GAKUNIQ WALLET anda tidak mencukup',
                                            )
                                        } else {
                                            checkout() && e.preventDefault()
                                            router.push({
                                                pathname: '/akun/voucher',
                                            })
                                        }
                                    } else {
                                        checkout() && e.preventDefault()
                                        router.push({
                                            pathname: '/akun/voucher',
                                        })
                                    }
                                }}
                                className="btn  btn-ghost bg-[#FFC700] text-slate-800 font-bold py-2 px-4 rounded-md">
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
