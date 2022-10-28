import React, { useState } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import { BsTrash } from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper'

const DetailProduct = () => {
    const router = useRouter()

    var onDiscount = true

    const DummyData = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ]

    const warna = [
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
                        <li>Title Product</li>
                    </ul>
                </div>
            }>
            <div className="mx-auto my-[2rem] max-w-[80rem]">
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
                                            'background-image':
                                                'url(https://image.uniqlo.com/UQ/ST3/id/imagesgoods/450535/sub/idgoods_450535_sub28.jpg?width=1600&impolicy=quality_75)',
                                        }}
                                        data-swiper-parallax="-23%"></div>
                                    <SwiperSlide>
                                        <div
                                            className="mx-2 flex flex-col"
                                            data-swiper-parallax="-200">
                                            <img
                                                src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/450535/item/idgoods_18_450535.jpg?width=1600&impolicy=quality_75"
                                                alt=""
                                                className="max-w-[150px] h-auto object-cover my-1"
                                            />
                                            <img
                                                src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/450535/item/idgoods_18_450535.jpg?width=1600&impolicy=quality_75"
                                                alt=""
                                                className="max-w-[150px] h-auto object-cover my-1"
                                            />
                                        </div>
                                        <div
                                            className="img"
                                            data-swiper-parallax="-100">
                                            <img
                                                src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/450535/item/idgoods_18_450535.jpg?width=1600&impolicy=quality_75"
                                                alt=""
                                                className="max-w-[400px] h-full object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div
                                            className="describe bg-slate-100 hover:bg-slate-200 max-w-[40vw] max-h-[60vh] flex flex-col items-start px-3 py-5 rounded-md shadow-md opacity-[1]"
                                            data-swiper-parallax="-100">
                                            <h1 className="text-lg font-bold opacity-[1]">
                                                Sweater Pria dengan 100% tekstur
                                                mewah wol premium. Diperbarui
                                                dengan permukaan yang lebih
                                                lembut.
                                            </h1>
                                            <span className="detail text-sm font-bold">
                                                Kode Produk 450535
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
                                        Sweater Extra Fine Merino Kerah Bulat{' '}
                                        <span className="text-sm opacity-[0.5]">
                                            New Limited Store
                                        </span>
                                        <br />
                                        <span className="text-2xl">
                                            Rp 999.999
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
                                            {warna.map(data => (
                                                <label
                                                    className="custom-radio"
                                                    key={data.id}>
                                                    <input
                                                        type="radio"
                                                        name="radio-warna"
                                                        value={data.warna}
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
                                        <div className="flex flex-row">
                                            {/* SELECT OPTION */}
                                            <select
                                                className="select-css w-[16rem] rounded-md"
                                                name="jumlah"
                                                id="jumlah">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <span className="flex flex-row items-center justify-start mt-4">
                                        <Link
                                            href={{
                                                pathname: '/checkout',
                                            }}>
                                            <button className="btn w-auto py-2 mx-1 text-lg font-bold text-white bg-slate-800 hover:bg-green-800 rounded-lg">
                                                TAMBAHKAN KE KERANJANG
                                            </button>
                                        </Link>
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

            <Head>
                <title>GakUniq - Keranjang..</title>
            </Head>
        </AppLayout>
    )
}

export default DetailProduct
