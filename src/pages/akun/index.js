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
        if (token) {
            await axios
                .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`)
                .then(response => {
                    setUser(response.data.data[0])
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    console.log(user)

    return (
        <User>
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex flex-col items-center bg-slate-200 px-3 py-4 rounded-lg max-w-[16rem] max-h-96 shadow-2xl">
                    <img src="/logo.png" className="max-w-50 h-auto" />
                    {/* <button className="max-w-[13rem] h-auto bg-slate-800 text-white font-bold py-2 px-5 rounded">
                        Ganti Foto
                    </button> */}
                    <p className="max-w-[13rem] text-sm text-slate-800 py-2 mx-5">
                        Foto profil harus berupa gambar dengan format .jpg,
                        .jpeg, atau .png
                    </p>
                </div>
                <span className="m-4"></span>
                <div className="flex flex-col items-start bg-slate-200 px-6 py-7 rounded-lg w-full shadow-2xl">
                    <table className="table-auto text-slate-800">
                        <tr className="my-2">
                            <td className="">
                                <h1 className="text-lg text-slate-800 font-bold">
                                    Informasi Akun
                                </h1>
                            </td>
                        </tr>

                        <tr className="my-2">
                            <td className="">Nama</td>
                            <td className="">
                                {user.nama_depan} {user.nama_belakang}
                            </td>
                        </tr>
                        <tr className="my-2">
                            <td className="">Tanggal Lahir</td>
                            <td className="">{user.tanggal_lahir}</td>
                        </tr>
                        <tr className="my-2">
                            <td className="">Jenis Kelamin</td>
                            <td className="">{user.jenis_kelamin}</td>
                        </tr>

                        <tr className="my-2">
                            <td className="">
                                <h1 className="text-lg text-slate-800 font-bold">
                                    Informasi Kontak
                                </h1>
                            </td>
                        </tr>

                        <tr className="my-2">
                            <td className="">Email</td>
                            <td className="">{user.email}</td>
                        </tr>
                        <tr className="my-2">
                            <td className="">Nomor Telepon</td>
                            <td className="">{user.nomer_telepon}</td>
                        </tr>
                        <tr className="my-2">
                            <td className="">
                                <h1 className="text-lg text-slate-800 font-bold">
                                    Informasi Alamat
                                </h1>
                            </td>
                        </tr>
                        <tr className="my-2">
                            <td className="">Label Alamat</td>
                            <td className="">{user.label_alamat}</td>
                        </tr>
                        <tr className="my-2">
                            <td className="">Kota / Kecamatan</td>
                            <td className="">{user.kota_kecamatan}</td>
                        </tr>
                        <tr className="my-2">
                            <td className="">Alamat Lengkap</td>
                            <td className="">{user.alamat_lengkap}</td>
                        </tr>
                    </table>
                    {/* <button className="w-[13rem] bg-slate-800 text-white font-bold py-2 px-5 rounded mt-4">
                        Ubah Informasi
                    </button> */}
                </div>
            </div>
        </User>
    )
}

export default Profiles
