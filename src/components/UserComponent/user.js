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
} from 'react-icons/ai'
import { FaCoins } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { GrMoney, GrTransaction } from 'react-icons/gr'
import { HiOutlineTicket } from 'react-icons/hi'
import { GiSelfLove } from 'react-icons/gi'
import Guest from '../Layouts/Guest'

const User = ({ children }) => {
    const Router = useRouter()
    const token = Cookies.get('token')
    const [user, setUser] = useState({})

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`)
            .then(response => {
                setUser(response.data.data[0])
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
        await axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/logout/${user.id}`,
            )
            .then(() => {
                Cookies.remove('token')
                Router.push('/beranda')
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
                    <div className="min-h-screen bg-[#525252] text-white flex flex-col md:flex-row items-center md:items-start justify-center">
                        <div className="flex flex-col bg-slate-200 md:w-[29rem] w-[21rem]  py-6 px-4 rounded-lg m-4">
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
                                        Rp{' '}
                                        {user.saldo
                                            ? user.saldo
                                                  .toString()
                                                  .replace(
                                                      /\B(?=(\d{3})+(?!\d))/g,
                                                      '.',
                                                  )
                                            : 0}
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
                                        Rp{' '}
                                        {user.score
                                            ? user.score
                                                  .toString()
                                                  .replace(
                                                      /\B(?=(\d{3})+(?!\d))/g,
                                                      '.',
                                                  )
                                            : 0}
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
                        <div className="bg-slate-300 max-w-[auto] md:w-[50rem] rounded-lg m-4 py-6 px-4 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </div>
                </div>
            ) : (
                <Guest />
            )}
        </AppLayout>
    )
}

export default User
