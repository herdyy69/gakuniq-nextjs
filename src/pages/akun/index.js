import React from 'react'
import User from '@/components/UserComponent/user'
import Input from '@/components/Input'
import { useAuth } from '@/hooks/auth'

const Profiles = () => {
    const formAlamatFix = () => {
        const [form, setForm] = React.useState()

        const handleChange = e => {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            })
        }

        const buttonSubmit = () => {
            const json = JSON.stringify(form)
            console.log(json)
            // send to api
            // fetch('http://localhost:3000/api/alamat', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: json,
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data)
            //     })

            // clear form
            setForm('')
        }
        return (
            <form>
                <div className="flex flex-col">
                    <span className="my-1">
                        <div className="inline-flex flex-col">
                            <label className="text-sm">NAMA PENERIMA</label>
                            <Input
                                onChange={e => {
                                    setForm({
                                        ...form,
                                        namaPenerima: e.target.value,
                                    })
                                }}
                                className={'border-2 w-[full]'}
                                type="text"
                                placeholder="Input Here"
                                values=""
                            />
                        </div>
                    </span>

                    <span className="my-1">
                        <div className="inline-flex flex-col">
                            <label className="text-sm">NOMER TELEPON</label>
                            <Input
                                onChange={e => {
                                    setForm({
                                        ...form,
                                        nomerTelepon: e.target.value,
                                    })
                                }}
                                className={'border-2 w-[full]'}
                                type="text"
                                placeholder="Input Here"
                                values=""
                            />
                        </div>
                    </span>

                    <span className="my-1">
                        <div className="flex flex-row flex-wrap">
                            <div className="inline-flex flex-col">
                                <label className="text-sm">LABEL ALAMAT</label>
                                <select
                                    onChange={e => {
                                        setForm({
                                            ...form,
                                            labelAlamat: e.target.value,
                                        })
                                    }}
                                    className="border-2 rounded-md">
                                    <option value="Rumah">Rumah</option>
                                    <option value="Kantor">Kantor</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                            <div className="inline-flex flex-col mx-0 md:mx-2">
                                <label className="text-sm">
                                    Kota & Kecamatan
                                </label>
                                <Input
                                    onChange={e => {
                                        setForm({
                                            ...form,
                                            kotaKecamatan: e.target.value,
                                        })
                                    }}
                                    className={'border-2'}
                                    type="text"
                                    placeholder="Input Here"
                                    values=""
                                />
                            </div>
                        </div>
                    </span>

                    <span className="my-1">
                        <div className="inline-flex flex-col">
                            <label className="text-sm">Alamat Lengkap</label>
                            <Input
                                onChange={e => {
                                    setForm({
                                        ...form,
                                        alamatLengkap: e.target.value,
                                    })
                                }}
                                className={'border-2 w-[full]'}
                                type="text"
                                placeholder="Input Here"
                                values=""
                            />
                        </div>
                    </span>
                </div>

                <span
                    onClick={() => {
                        buttonSubmit()
                    }}
                    className="bg-green-500 text-sm font-bold rounded-md p-2 mt-2 mx-1 text-white">
                    CHANGE
                </span>
                <button className="bg-red-600 text-sm font-bold rounded-md p-2 mt-2 mx-1 text-white">
                    KEMBALI
                </button>
            </form>
        )
    }

    return (
        <User>
            <div>
                <div className="p-4 m-2 border-2 rounded-lg max-w-[full] overflow-hidden">
                    <div className="flex flex-row">
                        <div className="inline-flex">
                            <img src="/logo.png" className="max-w-[85px]" />
                        </div>
                        <div className="inline-flex">
                            <div className="flex items-center pt-0">
                                <div className="flex flex-col justify-between">
                                    <span className="text-sm font-bold">
                                        HERDYANSAH
                                    </span>

                                    <span className="text-sm font-normal">
                                        Herdyansah203@gmail.com
                                    </span>
                                    <div className="flex items-center justify-center bg-slate-500 max-w-[70px] rounded-md mt-1">
                                        <p className="text-xs font-bold text-white">
                                            MEMBER
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-2 border-2 rounded-lg max-w-[full]">
                    <div className="flex flex-col m-2">
                        <div className="heading">
                            <h1 className="text-sm font-bold">ALAMAT</h1>
                            <hr className="border-[1px] border-[#f4f4f4] my-1" />
                        </div>
                        <div className="body">{formAlamatFix()}</div>
                    </div>
                </div>
            </div>
        </User>
    )
}

export default Profiles
