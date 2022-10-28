import React, { useState, useEffect } from 'react'
import AppLayout from '../Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavLink from '@/components/NavLink'
import Router from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'

const User = ({ children }) => {
    const [headers, setHeader] = useState()
    const token = Cookies.get('token')
    const [user, setUser] = useState({})

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.get(`http://127.0.0.1:8000/api/user`).then(response => {
            headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
            setUser(response.data)
        })
    }

    useEffect(() => {
        if (!token) {
            Router.push('/login')
        }
        fetchData()
    }, [])

    const logoutHanlder = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post(`http://127.0.0.1:8000/api/logout`).then(() => {
            Cookies.remove('token')
            Router.push('/login')
        })
    }
    console.log(user)

    const akunFiturItems = [
        {
            id: 1,
            label: 'Pengaturan Akun',
            pathname: '/akun',
        },
        {
            id: 2,
            label: 'Top Up Saldo',
            pathname: '/akun/topup',
        },
        {
            id: 3,
            label: 'Voucher',
            pathname: '/akun/voucher',
        },
        {
            id: 4,
            label: 'Riwayat Transaksi',
            pathname: '/akun/history',
        },
    ]

    const dataHeader = () => {
        return (
            <div className="flex flex-row flex-wrap md:flex-nowrap items-start justify-center">
                <div className="flex flex-col mx-2">
                    <div className="bg-transparent min-w-[20rem] my-2 min-h-[auto] rounded-md border-[2px] shadow-lg py-2">
                        <div className="flex flex-row items-center px-4 mt-5">
                            <img
                                src="/logo.png"
                                alt=""
                                className="max-w-[70px] rounded-[100%]"
                            />
                            <div className="flex flex-col ml-2">
                                <span className="text-sm font-bold ml-2">
                                    {user.name}
                                </span>
                                <button
                                    onClick={logoutHanlder}
                                    className="text-sm font-bold ml-2 glass rounded-lg text-center p-[1px] bg-red-600 hover:bg-red-800 text-white">
                                    Logout
                                </button>
                            </div>
                        </div>
                        <hr className="border-[1px] border-[#f4f4f4] mt-5" />

                        <div className="mt-4">
                            <div className="flex flex-row justify-between px-4 py-1">
                                <span className="text-sm font-bold">POINT</span>
                                <span className="text-sm font-bold">0</span>
                            </div>
                            <div className="flex flex-row justify-between px-4 py-1">
                                <span className="text-xs font-bold">
                                    GAKUNIQ WALLET
                                </span>
                                <span className="text-sm">Rp 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex mx-2">
                        <div className="bg-transparent min-w-[20rem] my-2 min-h-[50vh] rounded-md border-[2px] shadow-lg py-2">
                            <div className="flex flex-col items-center px-4 mt-1">
                                <h1 className="text-lg font-extrabold px-1 mb-1">
                                    NOTIFICATION
                                </h1>
                                <span className="p-3 border-2 rounded-md w-full">
                                    <span className="text-sm font-extrabold px-1">
                                        Belum ada notifikasi...
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex mx-2">
                    <div className="bg-transparent min-w-[60vw] my-2 max-h-[auto] rounded-md border-[2px] shadow-lg py-2">
                        <div className="flex flex-col md:flex-row items-center px-4 mt-1">
                            {akunFiturItems.map(item => (
                                <NavLink
                                    key={item.id}
                                    href={{
                                        pathname: item.pathname,
                                    }}
                                    active={router.pathname === item.pathname}>
                                    <span className="text-[12px] font-extrabold px-1">
                                        {item.label}
                                    </span>
                                </NavLink>
                            ))}
                        </div>
                        <hr className="border-[1px] border-[#f4f4f4] mt-3" />
                        {children}
                    </div>
                </div>
            </div>
        )
    }

    var login = false

    useEffect(() => {
        if (login) {
            router.push('/login')
        } else {
            setHeader(dataHeader())
        }
    }, [login])

    const router = useRouter()
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
            header={<div>{headers}</div>}>
            <Head>
                <title>GakUniq - User..</title>
            </Head>
        </AppLayout>
    )
}

export default User
