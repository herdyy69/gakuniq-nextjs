import React, { useState, useEffect } from 'react'
import AppLayout from '../Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Sidehref from '@/components/Sidehref'
import axios from 'axios'
import Cookies from 'js-cookie'
import {
    AiFillWallet,
    AiOutlineShoppingCart,
    AiOutlineLogout,
    AiOutlineLogin,
} from 'react-icons/ai'
import { FaCoins } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { GrMoney, GrTransaction } from 'react-icons/gr'
import { HiOutlineTicket } from 'react-icons/hi'
import { GiSelfLove } from 'react-icons/gi'

const User = ({ children }) => {
    const Router = useRouter()
    const token = Cookies.get('token')
    const [user, setUser] = useState({})

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios
            .get(`http://127.0.0.1:8000/api/user`)
            .then(response => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const logoutHandler = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post(`http://127.0.0.1:8000/api/logout`).then(() => {
            Cookies.remove('token')
            Router.push('/login')
        })
    }
    const akunFiturItems = [
        {
            id: 1,
            label: 'Pengaturan Akun',
            icon: <FiSettings className="text-lg" />,
            pathname: '/akun',
        },
        {
            id: 2,
            label: 'Top Up Saldo',
            icon: <GrMoney className="text-lg" />,
            pathname: '/akun/topup',
        },
        {
            id: 3,
            label: 'Voucher',
            icon: <HiOutlineTicket className="text-lg" />,
            pathname: '/akun/voucher',
        },
        {
            id: 4,
            label: 'Riwayat Transaksi',
            icon: <GrTransaction className="text-lg" />,
            pathname: '/akun/history',
        },
    ]
    const navItems = [
        {
            id: 1,
            label: 'Wishlist',
            icon: <GiSelfLove className="text-lg" />,
            pathname: '/nav-item/wishlist',
        },
        {
            id: 2,
            label: 'Keranjang',
            icon: <AiOutlineShoppingCart className="text-lg" />,
            pathname: '/nav-item/keranjang',
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
                                    pathname: '/member/user',
                                }}>
                                <a className="underline">GAKUNIQ</a>
                            </Link>
                            <span className="text-sm px-[2.5px] text-[#b9b9b9]">
                                /
                            </span>
                            CARI
                        </p>
                    </div>
                </div>
            }
            header={
                <div className="flex flex-col">
                    <h1 className="text-lg text-slate-800 font-bold">
                        Pengaturan Akun
                    </h1>
                </div>
            }>
            <Head>
                <title>GakUniq - User..</title>
            </Head>
            {token ? (
                <div className="antialiased">
                    <div className="min-h-screen bg-[#525252] text-white flex flex-row">
                        <div className="flex flex-col bg-slate-200 w-[50%] py-6 px-4 sm:px-6 lg:px-8 rounded-lg m-4">
                            <div className="flex flex-row md:flex-nowrap flex-wrap items-center">
                                <img src="/logo.png" className="w-20 h-20" />
                                <span className="mx-1"> </span>
                                <div className="flex flex-col">
                                    <h1 className="text-lg text-slate-800 font-bold">
                                        {user.nama_depan} {user.nama_belakang}
                                    </h1>
                                    <p className="text-sm text-slate-800">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                            <hr className="my-4 border-[1px] border-slate-800" />
                            <div className="flex flex-col">
                                <span className="flex flex-row flex-nowrap items-center justify-between text-slate-800">
                                    <span className="flex flex-row items-center text-xs font-bold">
                                        <AiFillWallet className="text-xl" />
                                        <span className="mx-1"> </span>
                                        GNQ Wallet
                                    </span>
                                    <span className="mx-1"> </span>
                                    <h1 className="text-sm text-slate-800 font-bold">
                                        Rp {user.saldo}
                                    </h1>
                                </span>
                                <span className="my-1"></span>
                                <span className="flex flex-row flex-nowrap items-center justify-between text-slate-800">
                                    <span className="flex flex-row items-center text-xs font-bold">
                                        <FaCoins className="text-xl" />
                                        <span className="mx-1"> </span>
                                        GNQ Point
                                    </span>
                                    <span className="mx-1"> </span>
                                    <h1 className="text-sm text-slate-800 font-bold">
                                        Rp {user.score}
                                    </h1>
                                </span>
                            </div>
                            <hr className="my-4 border-[1px] border-slate-800" />
                            <div className="flex flex-col">
                                {akunFiturItems.map(item => (
                                    <Sidehref
                                        key={item.id}
                                        href={{
                                            pathname: item.pathname,
                                        }}
                                        active={
                                            Router.pathname === item.pathname
                                        }>
                                        <span className="flex flex-row items-center text-xs font-bold">
                                            {item.icon}
                                            <span className="mx-1"> </span>
                                            {item.label}
                                        </span>
                                    </Sidehref>
                                ))}
                            </div>
                            <hr className="my-4 border-[1px] border-slate-800" />
                            <div className="flex flex-col">
                                {navItems.map(item => (
                                    <Sidehref
                                        key={item.id}
                                        href={{
                                            pathname: item.pathname,
                                        }}
                                        active={
                                            Router.pathname === item.pathname
                                        }>
                                        <span className="flex flex-row items-center text-xs font-bold">
                                            {item.icon}
                                            <span className="mx-1"> </span>
                                            {item.label}
                                        </span>
                                    </Sidehref>
                                ))}
                            </div>
                            <hr className="my-4 border-[1px] border-slate-800" />
                            <button
                                className="bg-red-800 btn glass flex flex-row items-center text-xs font-bold"
                                onClick={logoutHandler}>
                                <AiOutlineLogout className="text-xl" />
                                <span className="mx-1"> </span>
                                Keluar
                            </button>
                        </div>
                        <div className="bg-slate-300 w-full py-6 px-4 sm:px-6 lg:px-8 rounded-lg m-4 overflow-x-auto">
                            {children}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="antialiased">
                    <div className="min-h-screen bg-[#525252] text-white flex flex-row">
                        <div className="flex flex-col items-start justify-center bg-slate-200 w-full py-6 px-4 sm:px-6 lg:px-8 rounded-lg m-4">
                            <h1 className="text-5xl text-slate-800 font-bold">
                                Anda belum login
                            </h1>
                            <p className="text-2xl text-slate-800">
                                Silahkan login terlebih dahulu
                            </p>
                            <span className="my-1"></span>
                            <Link href="/login">
                                <button className="bg-red-800 btn glass flex flex-row items-center text-3xl font-bold">
                                    <AiOutlineLogin className="text-xl" />
                                    <span className="mx-1"> </span>
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    )
}

export default User
