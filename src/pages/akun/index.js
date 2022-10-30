import React, { useState, useEffect } from 'react'
import User from '@/components/UserComponent/user'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import axios from 'axios'

const Profiles = () => {
    const Router = useRouter()
    const token = Cookies.get('token')
    const [user, setUser] = useState({})

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.get(`http://127.0.0.1:8000/api/user`).then(response => {
            setUser(response.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    console.log(user)

    return (
        <User>
            <div className="flex flex-row py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center bg-slate-200 px-3 py-4 rounded-lg max-w-[16rem] max-h-96 shadow-2xl">
                    <img src="/logo.png" className="w-60 h-60" />
                    <button className="w-[13rem] bg-slate-800 text-white font-bold py-2 px-5 rounded">
                        Ganti Foto
                    </button>
                    <p className="w-[13rem] text-sm text-slate-800 py-2 mx-5">
                        Foto profil harus berupa gambar dengan format .jpg,
                        .jpeg, atau .png
                    </p>
                </div>
                <span className="m-4"></span>
                <div className="flex flex-col items-start bg-slate-200 px-6 py-7 rounded-lg w-full max-w-[35vw] shadow-2xl">
                    <h1 className="text-lg text-slate-800 font-bold">
                        Informasi Akun
                    </h1>
                    <span className="my-2"></span>
                    <table className="table-fixed text-slate-800">
                        <tr>
                            <td className="min-w-[15rem]">Nama</td>
                            <td className="min-w-[15rem]">
                                {user.nama_depan} {user.nama_belakang}
                            </td>
                        </tr>
                        <tr>
                            <td className="min-w-[15rem]">Tanggal Lahir</td>
                            <td className="min-w-[15rem]">{user.tanggal_lahir}</td>
                        </tr>
                        <tr>
                            <td className="min-w-[15rem]">Jenis Kelamin</td>
                            <td className="min-w-[15rem]">{user.jenis_kelamin}</td>
                        </tr>
                    </table>
                    <span className="my-2"></span>
                    <h1 className="text-lg text-slate-800 font-bold">
                        Informasi Kontak
                    </h1>
                    <span className="my-2"></span>
                    <table className="table-fixed text-slate-800">
                        <tr>
                            <td className="min-w-[15rem]">Email</td>
                            <td className="min-w-[15rem]">{user.email}</td>
                        </tr>
                        <tr>
                            <td className="min-w-[15rem]">Nomor Telepon</td>
                            <td className="min-w-[15rem]">{user.nomer_telepon}</td>
                        </tr>
                    </table>
                    <span className="my-2"></span>
                    <h1 className="text-lg text-slate-800 font-bold">
                        Informasi Alamat
                    </h1>
                    <span className="my-2"></span>
                    <table className="table-fixed text-slate-800">
                        <tr>
                            <td className="w-96">Label Alamat</td>
                            <td className="min-w-[15rem]">{user.label_alamat}</td>
                        </tr>
                        <tr>
                            <td className="min-w-[15rem]">Kota / Kecamatan</td>
                            <td className="min-w-[15rem]">{user.kota_kecamatan}</td>
                        </tr>
                        <tr>
                            <td className="min-w-[15rem]">Alamat Lengkap</td>
                            <td className="min-w-[15rem]">{user.alamat_lengkap}</td>
                        </tr>
                    </table>
                    <button className="w-[13rem] bg-slate-800 text-white font-bold py-2 px-5 rounded mt-4">
                        Ubah Informasi
                    </button>
                </div>
            </div>
        </User>
    )
}

export default Profiles
