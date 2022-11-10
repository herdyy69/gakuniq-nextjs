import React, { useState, useEffect } from 'react'
import User from '@/components/UserComponent/user'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookies from 'js-cookie'
import axios from 'axios'

const Voucher = () => {
    const router = useRouter()
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const [voucher, setVoucher] = useState([])
    const [voucherUser, setVoucherUser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher`)
            .then(res => {
                setVoucher(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })

        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/voucher_user`)
            .then(res => {
                console.log(res)
                setVoucherUser(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const voucherUserFilter = voucherUser.filter(
        (item, index) =>
            voucherUser.findIndex(
                item2 => item2.voucher_id === item.voucher_id,
            ) === index,
    )

    const [disabled, setDisabled] = useState(false)

    return (
        <User>
            <div>
                <div className="p-2 m-0 max-w-[full] overflow-hidden text-slate-800">
                    <div className="flex flex-col items-start px-0 mt-1">
                        <h1 className="text-lg font-extrabold px-1 mb-1">
                            VOUCHER SAYA
                        </h1>
                        {voucherUserFilter.length < 1 ? (
                            <div className="flex flex-col items-center justify-center w-full h-16 bg-slate-500 rounded-lg">
                                <span className="text-lg font-bold">
                                    Voucher Kosong
                                </span>
                            </div>
                        ) : (
                            voucherUserFilter.map(item => (
                                <span
                                    key={item.id}
                                    className="p-3 border-2 border-slate-800 rounded-md w-full my-1">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-col items-start">
                                            <span
                                                id={item.id}
                                                className="text-xs font-bold">
                                                {item.voucher.kode_voucher}
                                            </span>
                                            <span className="text-xs font-bold">
                                                {item.voucher.diskon} %
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-xs font-bold">
                                                {item.voucher.waktu_berakhir}
                                            </span>
                                            <span className="text-xs font-bold">
                                                {item.voucher.status}
                                            </span>
                                        </div>
                                    </div>
                                </span>
                            ))
                        )}

                        <h1 className="text-lg font-extrabold px-1 mb-1 mt-4">
                            INFO VOUCHER
                        </h1>
                        {voucher
                            .sort((a, b) => (a.label === 'gratis' ? -1 : 1))
                            .map(item => (
                                <label
                                    className="w-full h-auto my-1 radio-voucher border-2 border-[#525252] rounded-md"
                                    key={item.id}>
                                    <input
                                        type="radio"
                                        name="voucher-r"
                                        value={item.id}
                                    />
                                    <span className="labels-voucher p-3 border-slate-800">
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs font-bold">
                                                {item.kode_voucher}
                                            </span>
                                            <span className="text-xs font-bold">
                                                {item.label === 'gratis' ? (
                                                    <span>Free</span>
                                                ) : (
                                                    <span>Rp {item.harga}</span>
                                                )}
                                            </span>
                                            <span className="text-xs font-bold">
                                                {item.diskon} %
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            {item.label === 'gratis' ? (
                                                <span className="text-xs font-bold">
                                                    {item.waktu_berakhir}
                                                </span>
                                            ) : (
                                                <button
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        router.push({
                                                            pathname:
                                                                '/checkout/voucher',
                                                            query: {
                                                                id: item.id,
                                                            },
                                                        })
                                                    }}
                                                    className="modal-button btn btn-ghost bg-[#f4f4f4] text-[#000] rounded-md px-2 py-0 text-xs font-bold">
                                                    BUY
                                                </button>
                                            )}
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
