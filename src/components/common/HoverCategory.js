import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

export const HoverCategoryWanita = () => {
    const [data, setData] = useState()

    const fetchData = async () => {
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sub_kategori`)
            .then(response => {
                setData(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)
    return (
        <div className="bg-white h-auto w-full absolute z-10">
            <div className="mx-auto py-0 md:py-4 px-4 sm:px-6 lg:px-8 shadow ">
                <div className="flex flex-row flex-wrap items-start justify-start">
                    {data?.map(item => (
                        <div className="flex flex-col flex-nowrap py-5">
                            {item.kategori.name === 'WANITA' ? (
                                <h1 className="text-xs md:text-lg mx-5 font-bold uppercase">
                                    {item.sub_kategori}
                                </h1>
                            ) : (
                                ''
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const HoverCategoryPria = () => {
    const [data, setData] = useState()

    const fetchData = async () => {
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sub_kategori`)
            .then(response => {
                setData(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="bg-white h-auto w-full absolute z-10">
            <div className="mx-auto py-0 md:py-4 px-4 sm:px-6 lg:px-8 shadow ">
                <div className="flex flex-row flex-wrap items-start justify-start">
                    {data?.map(item => (
                        <div className="flex flex-col flex-nowrap py-5">
                            {item.kategori.name === 'PRIA' ? (
                                <h1 className="text-xs md:text-lg mx-5 font-bold uppercase">
                                    {item.sub_kategori}
                                </h1>
                            ) : (
                                ''
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
