import React from 'react'
import User from '@/components/UserComponent/user'
import Input from '@/components/Input'

const History = () => {
    return (
        <User>
            <div>
                <div className="p-4 m-2 border-2 rounded-lg max-w-[full] overflow-hidden">
                    <div className="flex flex-col">
                        <div className="flex flex-row flex-nowrap items-center w-full">
                            <Input
                                className={'border-2 w-full'}
                                type="text"
                                placeholder="Cari Transaksi"
                                values=""
                            />
                            <div className="flex flex-row justify-end">
                                <button className="bg-green-500 text-sm font-bold rounded-md p-2 mx-1 text-white">
                                    CARI
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row flex-nowrap items-center w-full mt-4">
                            <div className="title mr-2">
                                <span className="text-sm font-bold">
                                    STATUS
                                </span>
                            </div>
                            <div className="title">
                                <span className="text-xs font-bold border-2 px-2 py-1 rounded-md cursor-pointer mx-1">
                                    SEMUA
                                </span>
                                <span className="text-xs font-bold border-2 px-2 py-1 rounded-md cursor-pointer mx-1">
                                    BERLANGSUNG
                                </span>
                                <span className="text-xs font-bold border-2 px-2 py-1 rounded-md cursor-pointer mx-1">
                                    BERHASIL
                                </span>
                                <span className="text-xs font-bold border-2 px-2 py-1 rounded-md cursor-pointer mx-1">
                                    REFUND
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-2 border-2 rounded-lg max-w-[full]">
                    <div className="flex flex-col m-2">
                        <div className="body">
                            <div className="flex flex-row flex-nowrap items-start w-full">
                                <div className="inline-flex">
                                    <img
                                        src="/logo.png"
                                        className="max-w-[85px]"
                                    />
                                </div>
                                <div className="flex flex-row flex-nowrap items-center justify-between w-full">
                                    <div className="desc1">
                                        <div className="inline-flex flex-col mt-0">
                                            <h1 className="text-lg font-bold">
                                                CELANA LOREM IPSUM
                                            </h1>
                                            <span className="text-sm font-normal">
                                                1 Barang | Rp. 100.000
                                            </span>
                                            <span className="text-xs font-normal text-blue-500 cursor-pointer mt-2">
                                                Lihat Detail
                                            </span>
                                        </div>
                                    </div>
                                    <div className="inline-flex flex-col px-3">
                                        <span className="text-sm font-normal">
                                            Total Belanja
                                        </span>
                                        <span className="text-sm font-bold">
                                            Rp. 100.000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-2 border-2 rounded-lg max-w-[full]">
                    <div className="flex flex-col m-2">
                        <div className="body">
                            <div className="flex flex-row flex-nowrap items-start w-full">
                                <div className="inline-flex">
                                    <img
                                        src="/logo.png"
                                        className="max-w-[85px]"
                                    />
                                </div>
                                <div className="flex flex-row flex-nowrap items-center justify-between w-full">
                                    <div className="desc1">
                                        <div className="inline-flex flex-col mt-0">
                                            <h1 className="text-lg font-bold">
                                                CELANA LOREM IPSUM
                                            </h1>
                                            <span className="text-sm font-normal">
                                                1 Barang | Rp. 100.000
                                            </span>
                                            <span className="text-xs font-normal text-blue-500 cursor-pointer mt-2">
                                                Lihat Detail
                                            </span>
                                        </div>
                                    </div>
                                    <div className="inline-flex flex-col px-3">
                                        <span className="text-sm font-normal">
                                            Total Belanja
                                        </span>
                                        <span className="text-sm font-bold">
                                            Rp. 100.000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </User>
    )
}

export default History
