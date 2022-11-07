import React, { useState, useEffect } from 'react'
import User from '@/components/UserComponent/user'
import Link from 'next/link'
import Cookies from 'js-cookie'
import axios from 'axios'

const Voucher = () => {
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const dataVoucher = [
        {
            id: 1,
            voucher: 'GAKUNIQ10',
            nominal: 10000,
            expired: '2021-12-31',
        },
        {
            id: 2,
            voucher: 'GAKUNIQ20',
            nominal: 20000,
            expired: '2021-12-31',
        },
    ]

    return (
        <User>
            <div>
                <div className="p-2 m-0 max-w-[full] overflow-hidden text-slate-800">
                    <div className="flex flex-col items-start px-0 mt-1">
                        <h1 className="text-lg font-extrabold px-1 mb-1">
                            VOUCHER SAYA
                        </h1>
                        {dataVoucher.map(item => (
                            <span
                                key={item.id}
                                className="p-3 border-2 border-slate-800 rounded-md w-full my-1">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col items-start">
                                        <span
                                            id={item.id}
                                            className="text-xs font-bold">
                                            {item.voucher}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Rp {item.nominal}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-bold">
                                            {item.expired}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Expired
                                        </span>
                                    </div>
                                </div>
                            </span>
                        ))}
                    </div>
                    <hr className="border-[1px] border-[#f4f4f4] my-3" />
                    <div className="flex flex-col items-start px-0 mt-1">
                        <h1 className="text-lg font-extrabold px-1 mb-1">
                            FREE VOUCHER
                        </h1>
                        {dataVoucher.map(item => (
                            <span
                                key={item.id}
                                className="p-3 border-2 border-slate-800 rounded-md w-full my-1">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold">
                                            {item.voucher}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Rp {item.nominal}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-bold">
                                            {item.expired}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Expired
                                        </span>
                                    </div>
                                </div>
                            </span>
                        ))}
                    </div>
                    <hr className="border-[1px] border-[#535353] my-3" />
                    <div className="flex flex-col items-start px-0 mt-1">
                        <h1 className="text-lg font-extrabold px-1 mb-1">
                            BUY VOUCHER
                        </h1>
                        {dataVoucher.map(item => (
                            <label
                                className="w-full h-auto my-1 radio-voucher border-2 border-[#525252] rounded-md"
                                key={item.id}>
                                <input
                                    type="radio"
                                    name="voucher-r"
                                    value={item.voucher}
                                />
                                <span className="labels-voucher p-3 border-slate-800">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold">
                                            {item.voucher}
                                        </span>
                                        <span className="text-xs font-bold">
                                            Rp {item.nominal}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <Link
                                            href={{
                                                pathname: '/checkout/voucher',
                                            }}>
                                            <button className="modal-button btn btn-ghost bg-[#f4f4f4] text-[#000] rounded-md px-2 py-0 text-xs font-bold">
                                                BUY
                                            </button>
                                        </Link>
                                    </div>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </User>
    )
}

export default Voucher
