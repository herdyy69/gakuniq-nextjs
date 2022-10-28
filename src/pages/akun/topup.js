import React from 'react'
import User from '@/components/UserComponent/user'
import Input from '@/components/Input'

const TopUp = () => {
    const formTopup = () => {
        const [form, setForm] = React.useState()

        const buttonSubmit = () => {
            const json = JSON.stringify(form)
            console.log(json)
        }
        return (
            <form>
                <div className="flex flex-col">
                    <span className="my-1">
                        <div className="inline-flex flex-col">
                            <label className="text-sm">NOMINAL</label>
                            <Input
                                onChange={e => {
                                    setForm({
                                        ...form,
                                        nominal: e.target.value,
                                    })
                                }}
                                className={'border-2 w-[38.5vw]'}
                                type="text"
                                placeholder="Input Here"
                                values=""
                            />
                        </div>
                    </span>

                    <span className="my-1">
                        <div className="flex flex-row">
                            <div className="inline-flex flex-col w-full">
                                <label className="text-sm">PAYMENT</label>
                                <select
                                    onChange={e => {
                                        setForm({
                                            ...form,
                                            payment: e.target.value,
                                        })
                                    }}
                                    className="border-2 w-full">
                                    <option value="BCA">BCA</option>
                                    <option value="BNI">BNI</option>
                                    <option value="BRI">BRI</option>
                                    <option value="MANDIRI">MANDIRI</option>
                                </select>
                            </div>
                        </div>
                    </span>
                </div>

                <span
                    onClick={() => {
                        buttonSubmit()
                    }}
                    className="bg-green-500 text-sm font-bold rounded-md p-2 mt-2 mx-1 text-white">
                    PROSES
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
                            <h1 className="text-sm font-bold">TOP UP</h1>
                            <hr className="border-[1px] border-[#f4f4f4] my-1" />
                        </div>
                        <div className="body">{formTopup()}</div>
                    </div>
                </div>
            </div>
        </User>
    )
}

export default TopUp
