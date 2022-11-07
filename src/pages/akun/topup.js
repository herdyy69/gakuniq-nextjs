import React, { useState, useEffect } from 'react'
import User from '@/components/UserComponent/user'
import Input from '@/components/Input'
import axios from 'axios'
import Cookies from 'js-cookie'

const TopUp = () => {
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const [nominal, setNominal] = useState('')
    const [payment, setPayment] = useState('')

    console.log(nominal + ' ' + payment)
    const listPayment = [
        {
            id: 1,
            name: 'BCA',
        },
        {
            id: 2,
            name: 'BNI',
        },
        {
            id: 3,
            name: 'BRI',
        },
        {
            id: 4,
            name: 'Mandiri',
        },
    ]

    const handleSubmit = async () => {
        await axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/top_up/create`, {
                jumlah_saldo: nominal,
                metode_pembayaran: payment,
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <User>
            <div>
                <div className="m-2 border-2 rounded-lg max-w-[full] shadow-lg bg-slate-200">
                    <div className="flex flex-col m-2">
                        <div className="heading text-slate-800">
                            <h1 className="text-sm font-bold">TOP UP</h1>
                            <hr className="border-[1px] border-slate-800 my-1" />
                        </div>
                        <div className="body">
                            <form>
                                <div className="flex flex-col text-slate-800">
                                    <span className="my-1">
                                        <div className="inline-flex flex-col">
                                            <label className="text-sm">
                                                NOMINAL
                                            </label>
                                            <Input
                                                type="number"
                                                placeholder="Masukkan nominal top up"
                                                value={nominal}
                                                onChange={e =>
                                                    setNominal(e.target.value)
                                                }
                                            />
                                        </div>
                                    </span>

                                    <span className="my-1">
                                        <div className="flex flex-row">
                                            <div className="inline-flex flex-col w-full">
                                                <label className="text-sm">
                                                    PAYMENT
                                                </label>
                                                <select
                                                    onChange={e =>
                                                        setPayment(
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="border-2 w-full">
                                                    {listPayment.map(
                                                        (payment, index) => (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    payment.name
                                                                }>
                                                                {payment.name}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </span>
                                </div>

                                <span
                                    onClick={() => {
                                        handleSubmit() 
                                    }}
                                    className="bg-green-500 text-sm font-bold rounded-md p-2 mt-2 mx-1 text-white">
                                    PROSES
                                </span>
                                <button className="bg-red-600 text-sm font-bold rounded-md p-2 mt-2 mx-1 text-white">
                                    KEMBALI
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </User>
    )
}

export default TopUp
