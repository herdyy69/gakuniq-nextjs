import React from 'react'
import { DataRefereces } from './dataRefereces'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const datas = [
    {
        id: 1,
        title: 'LOREM CELANAX',
        desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
    {
        id: 2,
        title: 'LOREM CELANAX ',
        desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.AA',
    },
]

export function References() {
    const router = useRouter()
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    const [produk, setProduk] = useState([])
    const [dataSub, setDataSub] = useState()

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`)
            .then(response => {
                setUser(response.data.data[0])
            })
            .catch(error => {
                console.log(error)
            })
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produk`)
            .then(res => {
                setProduk(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sub_kategori`)
            .then(response => {
                setDataSub(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log(produk)

    return (
        <div className="flex flex-row flex-wrap mx-3">
            {datas.map(item => (
                <DataRefereces
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    )
}
