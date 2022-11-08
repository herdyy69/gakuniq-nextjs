import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Link from 'next/link'
import axios from 'axios'
import Cookies from 'js-cookie'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Parallax, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const DetailProduct = () => {
    const router = useRouter()
    const token = Cookies.get('token')

    const [data, setData] = useState()
    const [dataSub, setDataSub] = useState()
    const [params, setParams] = useState(router.query.id)
    const [showAlert, setshowAlert] = useState(false)

    const [qty, setQty] = useState(1)
    const [warna, setWarna] = useState()
    const [ukuran, setUkuran] = useState('s')

    const addToCart = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/keranjang/create`,
                {
                    produk_id: params,
                    jumlah: qty,
                    warna: warna,
                    ukuran: ukuran,
                },
            )
            .then(res => {
                console.log(res)
                setshowAlert('success add to cart')
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        addToCart()
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produk/${params}`)
            .then(res => {
                setData(res.data.data)
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
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review_produk`)
            .then(res => {
                setUlasan(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const [ulasan, setUlasan] = useState()
    console.log(ulasan)

    const warnas = [
        {
            id: 1,
            warna: '#525252',
        },
        {
            id: 2,
            warna: '#515151',
        },
    ]
    const size = [
        {
            id: 1,
            size: 'S',
        },
        {
            id: 2,
            size: 'M',
        },
        {
            id: 3,
            size: 'L',
        },
        {
            id: 4,
            size: 'XL',
        },
    ]

    const coment = [
        {
            id: 1,
            name: 'Rizky',
            coment:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            status: 'Rekomendasi',
        },
    ]

    const stok = data?.stok
    const stokArray = []
    for (let i = 1; i <= stok; i++) {
        stokArray.push(i)
    }
    console.log(qty)
    return (
        <AppLayout
            subTitle={
                <div className="bg-[#FFFFFF] shadow mt-3">
                    <div className="max-w-7xl mx-auto py-0 px-0 shadow">
                        <p className="text-xs py-4 px-4 font-extrabold">
                            <Link
                                href={{
                                    pathname: '/beranda',
                                }}>
                                <a className="underline">GAKUNIQ</a>
                            </Link>
                            <span className="text-sm px-[2.5px] text-[#b9b9b9]">
                                /
                            </span>
                            KERANJANG
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Product</a>
                        </li>
                        <li>{data?.nama_produk}</li>
                    </ul>
                </div>
            }>
            <div className="mx-auto my-[2rem] max-w-[80rem]">
                {showAlert && (
                    <div className="toast toast-start z-[999]">
                        <div className={'alert alert-success'}>
                            <div className="flex flex-row">
                                <span>{showAlert}</span>
                                <button
                                    className="bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none"
                                    onClick={() => setshowAlert(false)}>
                                    <span>×</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col justify-around">
                            <div className="inline-flex flex-col items-center justify-center min-w-[50vw] min-h-[30vh]">
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#525252',
                                        '--swiper-pagination-color': '#525252',
                                    }}
                                    speed={600}
                                    parallax={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Parallax, Pagination, Navigation]}
                                    className="mySwiper swiper4 rounded-md">
                                    <div
                                        slot="container-start"
                                        className="parallax-bg"
                                        style={{
                                            'background-image': `url(${
                                                process.env
                                                    .NEXT_PUBLIC_BACKEND_URL +
                                                '/' +
                                                data?.gambar_produk1
                                            })`,
                                        }}
                                        data-swiper-parallax="-23%"></div>
                                    <SwiperSlide>
                                        <div
                                            className="mx-2 flex flex-col"
                                            data-swiper-parallax="-200">
                                            <img
                                                src={
                                                    process.env
                                                        .NEXT_PUBLIC_BACKEND_URL +
                                                    '/' +
                                                    data?.gambar_produk3
                                                }
                                                alt=""
                                                className="max-w-[150px] h-auto object-cover my-1"
                                            />
                                            <img
                                                src={
                                                    process.env
                                                        .NEXT_PUBLIC_BACKEND_URL +
                                                    '/' +
                                                    data?.gambar_produk3
                                                }
                                                alt=""
                                                className="max-w-[150px] h-auto object-cover my-1"
                                            />
                                        </div>
                                        <div
                                            className="img"
                                            data-swiper-parallax="-100">
                                            <img
                                                src={
                                                    process.env
                                                        .NEXT_PUBLIC_BACKEND_URL +
                                                    '/' +
                                                    data?.gambar_produk2
                                                }
                                                alt=""
                                                className="max-w-[400px] h-full object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div
                                            className="describe bg-slate-100 hover:bg-slate-200 flex flex-col items-start px-3 py-5 rounded-md shadow-md opacity-[1]"
                                            data-swiper-parallax="-100">
                                            <p className="font-bold opacity-[1]">
                                                {data?.deskripsi}
                                            </p>
                                            <span className="detail text-sm font-bold">
                                                {
                                                    dataSub?.find(
                                                        x =>
                                                            x.id ===
                                                            data?.sub_kategori_id,
                                                    )?.sub_kategori
                                                }
                                            </span>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <span className="w-[full] h-[50px] bg-slate-300 rounded-md flex items-center justify-center btn btn-ghost">
                                <p className="text-sm font-bold">
                                    Cek Detail dan Ketersediaan Produk
                                </p>
                            </span>
                        </div>
                        <div className="flex flex-col w-full mt-4 md:mt-0 md:ml-4">
                            <div className="flex flex-col w-full h-auto p-4 bg-slate-200 rounded-lg">
                                <div className="flex flex-col w-full h-full">
                                    <h1 className="text-4xl font-bold text-slate-800 mb-2">
                                        {data?.nama_produk}{' '}
                                        <span className="text-sm opacity-[0.5]">
                                            New Limited Store
                                        </span>
                                        <br />
                                        <span className="text-2xl">
                                            Rp {data?.harga}
                                        </span>
                                    </h1>
                                    <span className="flex flex-row items-center justify-between mt-2">
                                        <hr className="w-full border-1 border-slate-400" />
                                    </span>

                                    <div className="flex flex-col flex-nowrap mt-2">
                                        <span className="text-lg font-bold">
                                            WARNA
                                        </span>
                                        <div className="flex flex-row">
                                            {warnas.map(data => (
                                                <label
                                                    className="custom-radio"
                                                    key={data.id}>
                                                    <input
                                                        type="radio"
                                                        name="radio-warna"
                                                        value={data.warna}
                                                        onChange={e =>
                                                            setWarna(
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                    <span
                                                        className="radio-btn"
                                                        style={{
                                                            background:
                                                                data.warna,
                                                        }}></span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-nowrap mt-2">
                                        <span className="text-lg font-bold">
                                            UKURAN
                                        </span>
                                        <div className="flex flex-row">
                                            {size.map(data => (
                                                <label
                                                    className="custom-radio"
                                                    key={data.id}>
                                                    <input
                                                        type="radio"
                                                        name="radio-ukuran"
                                                        value={data.size}
                                                        onChange={e =>
                                                            setUkuran(
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                    <span className="radio-btn">
                                                        <h3>{data.size}</h3>
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-nowrap mt-2">
                                        <span className="text-lg font-bold">
                                            JUMLAH
                                        </span>
                                        <div className="flex flex-row no-wrap">
                                            <button
                                                onClick={() => {
                                                    if (qty <= 1) {
                                                        setQty(1)
                                                    } else {
                                                        setQty(qty - 1)
                                                    }
                                                }}
                                                className="btn btn-square btn-ghost glass">
                                                <AiOutlineMinus />
                                            </button>
                                            <input
                                                type="text"
                                                className="min-w-[90px] h-[50px] text-center mx-1 rounded-lg"
                                                value={
                                                    data?.stok > 0
                                                        ? qty
                                                        : 'stok habis'
                                                }
                                                onChange={e =>
                                                    setQty(e.target.value)
                                                }
                                            />
                                            <button
                                                onClick={() => {
                                                    if (qty >= data?.stok) {
                                                        setQty(data?.stok)
                                                    } else {
                                                        setQty(qty + 1)
                                                    }
                                                }}
                                                className="btn btn-square btn-ghost glass">
                                                <AiOutlinePlus />
                                            </button>
                                            {/* SELECT OPTION */}
                                            {/* <select
                                                className="select-css w-[16rem] rounded-md"
                                                value={qty}
                                                onChange={e =>
                                                    setQty(e.target.value)
                                                }>
                                                {stokArray.length > 0 ? (
                                                    stokArray.map(data => (
                                                        <option
                                                            key={data}
                                                            value={data}>
                                                            {data
                                                                ? data
                                                                : 'STOK KOSONG'}
                                                        </option>
                                                    ))
                                                ) : (
                                                    <option value="STOK KOSONG">
                                                        STOK KOSONG
                                                    </option>
                                                )}
                                            </select> */}
                                        </div>
                                    </div>
                                    <span className="flex flex-row items-center justify-start mt-4">
                                        <button
                                            onClick={() => {
                                                token
                                                    ? data?.stok > 0
                                                        ? addToCart()
                                                        : alert('Stok Habis')
                                                    : alert(
                                                          'Silahkan Login Terlebih Dahulu',
                                                      )
                                            }}
                                            className="btn w-auto py-2 mx-1 text-lg font-bold text-white bg-slate-800 hover:bg-green-800 rounded-lg">
                                            TAMBAHKAN KE KERANJANG
                                        </button>
                                        <button className="btn w-auto py-2 mx-1 text-lg font-bold text-slate-800 bg-slate-200 rounded-lg glass">
                                            Lanjutkan Belanja
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap w-full mt-4">
                        <div className="flex flex-col min-w-full mt-4 md:mt-0">
                            <div className="flex flex-col w-full h-auto p-4 bg-slate-200 rounded-lg">
                                <h1 className="text-2xl font-bold text-slate-800 mb-2">
                                    Ulasan Pembeli
                                </h1>

                                {coment.map(data => (
                                    <div
                                        key={data.id}
                                        className="bg-slate-100 flex flex-col flex-nowrap mt-2 border-y-2 rounded-lg border-slate-900 py-4 px-3 my-1">
                                        <div className="flex flex-col">
                                            <h1 className="text-2xl font-bold text-slate-800">
                                                {data.name}
                                            </h1>
                                            <p className="text-sm text-slate-800">
                                                {data.status}
                                            </p>
                                            {/* komen */}
                                            <p className="text-sm text-slate-800">
                                                {data.coment}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default DetailProduct
