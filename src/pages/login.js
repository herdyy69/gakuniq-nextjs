import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'

const Login = () => {
    const Router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validation, setValidation] = useState([])

    const loginHandler = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        console.log(formData)

        await axios
            .post(`http://127.0.0.1:8000/api/login`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => {
                Cookies.set('token', response.data.token)
                Router.push('/akun')
            })
            .catch(error => {
                setValidation(error.response.data)
            })
    }
    useEffect(() => {
        if (Cookies.get('token')) {
            Router.push('/akun')
        }
    }, [])

    const dataReferensi = [
        {
            id: 1,
            title: 'Modern',
        },
        {
            id: 2,
            title: 'Minimalis',
        },
        {
            id: 3,
            title: 'Klasik',
        },
        {
            id: 4,
            title: 'Retro',
        },
    ]

    const [nama_depan, setNamaDepan] = useState('')
    const [nama_belakang, setNamaBelakang] = useState('')
    const [nomer_telepon, setNomerTelepon] = useState('')
    const [username_daftar, setUsernameDaftar] = useState('')
    const [email_daftar, setEmailDaftar] = useState('')
    const [password_daftar, setPasswordDaftar] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [jenis_kelamin, setJenisKelamin] = useState('Laki-laki')
    const [tanggal_lahir, setTanggalLahir] = useState('')
    const [referensi, setReferensi] = useState('')
    const [label_alamat, setLabelAlamat] = useState('Rumah')
    const [kota_kecamatan, setKotaKecamatan] = useState('')
    const [alamat_lengkap, setAlamatLengkap] = useState('')

    const [kota, setKota] = useState('')
    const [kecamatan, setKecamatan] = useState('')

    const kota_kecamatanHandler = kota + ', ' + kecamatan

    useEffect(() => {
        setKotaKecamatan(kota_kecamatanHandler)
    }, [kota_kecamatanHandler])

    const handleRegister = async e => {
        e.preventDefault()
        const allValue = new FormData()
        allValue.append('nama_depan', nama_depan)
        allValue.append('nama_belakang', nama_belakang)
        allValue.append('nomer_telepon', nomer_telepon)
        allValue.append('username', username_daftar)
        allValue.append('email', email_daftar)
        allValue.append('password', password_daftar)
        allValue.append('password_confirmation', password_confirmation)
        allValue.append('tanggal_lahir', tanggal_lahir)
        allValue.append('jenis_kelamin', jenis_kelamin)
        allValue.append('referensi', referensi)
        allValue.append('label_alamat', label_alamat)
        allValue.append('kota_kecamatan', kota_kecamatan)
        allValue.append('alamat_lengkap', alamat_lengkap)

        console.log(allValue)

        await axios
            .post(`http://127.0.0.1:8000/api/register`, allValue, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => {
                console.log(response)
                Router.push('/login')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="antialiased">
            <Head>
                <title>Gakuniq - Login</title>
            </Head>
            {validation.message && (
                <div className="toast toast-start">
                    <div className="alert alert-info">
                        <div>
                            <span>{validation.message}</span>
                        </div>
                    </div>
                </div>
            )}
            <div className="min-h-screen flex flex-row items-center justify-center bg-slate-500">
                <div className="w-full max-w-md bg-transparent rounded-lg">
                    <div className=" rounded-lg">
                        <div className="flex flex-row items-center justify-start p-6 animate__animated animate__fadeInRight animate__slow">
                            <img
                                src="/logo.png"
                                className="w-[150px] h-[150px] fill-current text-white rounded-lg animate__animated animate__fadeIn animate__slow"
                            />
                            <h1 className="text-5xl font-bold text-slate-50">
                                MADE <br /> FOR ME LAH
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-md bg-slate-50 rounded-lg animate__animated animate__fadeIn animate__faster">
                    <form onSubmit={loginHandler}>
                        <div className="flex flex-col items-center justify-center p-6">
                            <img
                                src="/logo.png"
                                className="w-20 h-20 fill-current text-white"
                            />
                            <input
                                type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs bg-slate-100 bg-opacity-100 mt-2"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder=" Password"
                                className="input input-bordered w-full max-w-xs bg-slate-100 bg-opacity-100 mt-2"
                            />
                            <div className="flex items-center justify-between w-full max-w-xs mt-5">
                                <div className="block items-center">
                                    <label
                                        htmlFor="remember_me"
                                        className="inline-flex items-start">
                                        <input
                                            id="remember_me"
                                            type="checkbox"
                                            name="remember"
                                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />

                                        <span className="ml-2 text-sm text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                                <div className="block items-start">
                                    <label className="inline-flex items-center">
                                        <span className="text-sm text-gray-600">
                                            <Link
                                                href={{
                                                    pathname:
                                                        '/forgot-password',
                                                }}>
                                                <a>Forgot your password?</a>
                                            </Link>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <button className="btn btn-outline btn-info bg-[#2563eb] bg-opacity-80 text-black w-full max-w-xs mt-2 font-bold">
                                <span className="text-black opacity-60">
                                    Login
                                </span>
                            </button>
                            <div className="divider after:bg-opacity-100 before:bg-opacity-100 w-full max-w-md px-10">
                                OR
                            </div>
                            <label
                                htmlFor="my-modal-3"
                                className="btn modal-button btn-success bg-[#16a34a] w-full max-w-xs font-bold ">
                                Buat Akun Baru
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box w-[40%] max-w-5xl relative bg-slate-500">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2 bg-slate-800">
                        ✕
                    </label>
                    <h3 className="text-lg font-bold border-b-2 mb-3 text-white">
                        Daftar Akun Baru
                    </h3>
                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col md:flex-row flex-wrap my-2">
                            <div className="form-control m-1">
                                <label className="input-group input-group-vertical w-full max-w-[15rem]">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Nama Depan
                                    </span>
                                    <input
                                        type="text"
                                        value={nama_depan}
                                        onChange={e =>
                                            setNamaDepan(e.target.value)
                                        }
                                        placeholder="Nama Depan"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                            <div className="form-control m-1">
                                <label className="input-group input-group-vertical w-full max-w-[15rem]">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Nama Belakang
                                    </span>
                                    <input
                                        type="text"
                                        value={nama_belakang}
                                        onChange={e =>
                                            setNamaBelakang(e.target.value)
                                        }
                                        placeholder="Nama Belakang"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                            <div className="form-control m-1 w-full max-w-[100%]">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Nomer Telepon
                                    </span>
                                    <input
                                        type="number"
                                        value={nomer_telepon}
                                        onChange={e =>
                                            setNomerTelepon(e.target.value)
                                        }
                                        placeholder="Nomer Telepon"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                            <div className="form-control m-1 w-full max-w-[100%]">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Email
                                    </span>
                                    <input
                                        type="email"
                                        value={email_daftar}
                                        onChange={e =>
                                            setEmailDaftar(e.target.value)
                                        }
                                        placeholder="Email"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                            <div className="form-control m-1 w-full max-w-[100%]">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Username
                                    </span>
                                    <input
                                        type="text"
                                        value={username_daftar}
                                        onChange={e =>
                                            setUsernameDaftar(e.target.value)
                                        }
                                        placeholder="Username"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                            <div className="form-control m-1 w-full max-w-[100%]">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Password Baru
                                    </span>
                                    <input
                                        type="password"
                                        value={password_daftar}
                                        onChange={e =>
                                            setPasswordDaftar(e.target.value) +
                                            setPasswordConfirmation(
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Password Baru"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                            <div className="form-control m-1 w-full max-w-[45.7%]">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Jenis Kelamin
                                    </span>
                                    <select
                                        value={jenis_kelamin}
                                        onChange={e =>
                                            setJenisKelamin(e.target.value)
                                        }
                                        className="input input-bordered bg-slate-100 bg-opacity-100">
                                        <option value="Laki-laki">
                                            Laki-laki
                                        </option>
                                        <option value="Perempuan">
                                            Perempuan
                                        </option>
                                    </select>
                                </label>
                            </div>
                            <div className="form-control m-1 w-full max-w-[50%]">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Tanggal Lahir
                                    </span>
                                    <input
                                        type="date"
                                        value={tanggal_lahir}
                                        onChange={e =>
                                            setTanggalLahir(e.target.value)
                                        }
                                        placeholder="Tanggal Lahir"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                            <div className="form-control m-1 w-full max-w-[50%]">
                                <h1 className="text-white font-bold">
                                    Referensi
                                </h1>
                                <div className="flex flex-row">
                                    {dataReferensi.map((item, index) => (
                                        <label
                                            key={index}
                                            className="w-full h-auto my-1 radio-referensi border-2 rounded-md max-w-[45%] m-1">
                                            <input
                                                value={item.title}
                                                onChange={e =>
                                                    setReferensi(
                                                        item.title +
                                                            '-' +
                                                            jenis_kelamin,
                                                    )
                                                }
                                                type="radio"
                                                name="voucher-referensi"
                                            />
                                            <span className="labels-referensi p-3 border-slate-800">
                                                <span className="text-sm font-bold text-white">
                                                    {item.title}
                                                </span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <hr className="w-full h-px my-3 border-slate-200" />
                        <h1 className="text-white font-bold">Data Alamat</h1>
                        <div className="flex flex-col md:flex-row flex-wrap my-2">
                            <div className="form-control m-1">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Label Rumah / Kantor
                                    </span>
                                    <select
                                        value={label_alamat}
                                        onChange={e =>
                                            setLabelAlamat(e.target.value)
                                        }
                                        className="input input-bordered bg-slate-100 bg-opacity-100">
                                        <option value="Rumah">Rumah</option>
                                        <option value="Kantor">Kantor</option>
                                    </select>
                                </label>
                            </div>
                            <div className="form-control m-1  w-full md:max-w-[18rem] max-w-[auto]">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Kota / Kabupaten
                                    </span>
                                    <input
                                        type="text"
                                        value={kota}
                                        onChange={e => setKota(e.target.value)}
                                        placeholder="Kota / Kabupaten"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                            <div className="form-control m-1 w-full max-w-[auto]">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Kecamatan
                                    </span>
                                    <input
                                        type="text"
                                        value={kecamatan}
                                        onChange={e =>
                                            setKecamatan(e.target.value)
                                        }
                                        placeholder="Kecamatan"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                            <div className="form-control m-1  w-full max-w-[auto]">
                                <label className="input-group input-group-vertical">
                                    <span className="bg-slate-600 font-bold text-white py-1">
                                        Alamat Lengkap
                                    </span>
                                    <input
                                        type="text"
                                        value={alamat_lengkap}
                                        onChange={e =>
                                            setAlamatLengkap(e.target.value)
                                        }
                                        placeholder="Alamat Lengkap"
                                        className="input input-bordered bg-slate-100 bg-opacity-100"
                                    />
                                </label>
                            </div>
                        </div>
                        <hr className="w-full h-px my-3 border-slate-200" />
                        <div className="privacy&policy">
                            <div className="flex flex-row">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    id="checkbox-1"
                                />
                                <label
                                    htmlFor="checkbox-1"
                                    className="cursor-pointer">
                                    <span className="checkbox-mark">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-check"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#ffffff"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                            />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </span>
                                    <span className="ml-2 text-white">
                                        Saya telah membaca dan menyetujui
                                        <a
                                            href="#"
                                            className="text-blue-500 font-bold">
                                            {' '}
                                            Syarat & Ketentuan{' '}
                                        </a>
                                        dan
                                        <a
                                            href="#"
                                            className="text-blue-500 font-bold">
                                            {' '}
                                            Kebijakan Privasi{' '}
                                        </a>
                                        yang berlaku
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center my-2">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block w-full max-w-[100%]">
                                Daftar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
