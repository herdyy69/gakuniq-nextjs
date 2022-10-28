import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { HrefPusherwishlist, HrefPusherDetail } from '@/components/hrefPusher'
import { useRouter } from 'next/router'

const Pria = () => {
    const data = [
        {
            id: 1,
            product_title: 'Russia',
            sub_title: 'Ramenki',
            price: 'n/a',
            image: 'http://dummyimage.com/136x100.png/ff4444/ffffff',
        },
        {
            id: 2,
            product_title: 'France',
            sub_title: 'Privas',
            price: '$15.47B',
            image: 'http://dummyimage.com/141x100.png/cc0000/ffffff',
        },
        {
            id: 3,
            product_title: 'China',
            sub_title: 'Fuzhai',
            price: '$127.36B',
            image: 'http://dummyimage.com/148x100.png/cc0000/ffffff',
        },
        {
            id: 4,
            product_title: 'Indonesia',
            sub_title: 'Muara Dua',
            price: '$1.04B',
            image: 'http://dummyimage.com/142x100.png/ff4444/ffffff',
        },
        {
            id: 5,
            product_title: 'Burkina Faso',
            sub_title: 'Diapaga',
            price: '$1.89B',
            image: 'http://dummyimage.com/211x100.png/ff4444/ffffff',
        },
        {
            id: 6,
            product_title: 'United States',
            sub_title: 'Kingsport',
            price: 'n/a',
            image: 'http://dummyimage.com/106x100.png/5fa2dd/ffffff',
        },
        {
            id: 7,
            product_title: 'Argentina',
            sub_title: 'La Falda',
            price: '$2.36B',
            image: 'http://dummyimage.com/129x100.png/ff4444/ffffff',
        },
        {
            id: 8,
            product_title: 'Denmark',
            sub_title: 'København',
            price: '$4.84B',
            image: 'http://dummyimage.com/175x100.png/ff4444/ffffff',
        },
        {
            id: 9,
            product_title: 'Russia',
            sub_title: 'Ullubiyaul',
            price: '$2.93B',
            image: 'http://dummyimage.com/151x100.png/5fa2dd/ffffff',
        },
        {
            id: 10,
            product_title: 'South Africa',
            sub_title: 'Belfast',
            price: '$4.83B',
            image: 'http://dummyimage.com/116x100.png/dddddd/000000',
        },
        {
            id: 11,
            product_title: 'United States',
            sub_title: 'Little Rock',
            price: '$588.87M',
            image: 'http://dummyimage.com/171x100.png/cc0000/ffffff',
        },
        {
            id: 12,
            product_title: 'Brazil',
            sub_title: 'Jaru',
            price: 'n/a',
            image: 'http://dummyimage.com/209x100.png/cc0000/ffffff',
        },
        {
            id: 13,
            product_title: 'Sweden',
            sub_title: 'Ludvika',
            price: '$225.51M',
            image: 'http://dummyimage.com/123x100.png/dddddd/000000',
        },
        {
            id: 14,
            product_title: 'Thailand',
            sub_title: 'Phra Khanong',
            price: '$133.56M',
            image: 'http://dummyimage.com/199x100.png/5fa2dd/ffffff',
        },
        {
            id: 15,
            product_title: 'Sweden',
            sub_title: 'Uppsala',
            price: 'n/a',
            image: 'http://dummyimage.com/188x100.png/5fa2dd/ffffff',
        },
    ]
    var number = data.length

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
                            PRIA
                        </p>
                    </div>
                </div>
            }
            headerX="TRUE"
            header={
                <div className="flex flex-col">
                    <h1 className="text-4xl text-slate-800 font-bold mb-2">
                        MENS
                    </h1>
                    <div className="flex flex-col items-start">
                        <img
                            src="https://cdn.pixabay.com/photo/2015/01/15/12/46/woman-600225_960_720.jpg"
                            alt="PRIA"
                            className="max-h-[400px] w-full object-cover"
                        />
                    </div>
                </div>
            }>
            <Head>
                <title>GakUniq - Pria..</title>
            </Head>
            <div className="mt-4">
                <div className="flex flex-col items-center justify-center">
                    {/* <h1 className="text-2xl text-slate-800 font-bold mb-2">
                        KATALOG WOMEN
                    </h1> */}
                    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
                        {data.map(item => (
                            <div className="min-w-[15rem] max-w-[30rem] min-h-[40vh] rounded-lg overflow-hidden shadow-lg flex flex-col border-[3px] glass z-10 m-1">
                                <div className="inline-flex flex-col p-3">
                                    <div className="flex fle-row items-center justify-center">
                                        <img
                                            src={item.image}
                                            alt="logo"
                                            className="min-w-[190px] max-w-[190px] min-h-[150px] max-h-[150px] object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="font-bold text-base mt-1 text-slate-800">
                                        {item.product_title}
                                    </div>
                                    <p className="text-slate-700 text-xs">
                                        {item.sub_title}
                                    </p>
                                    <span className="text-lg font-bold">
                                        Rp {item.price}
                                    </span>
                                    {/* <div className="flex flex-row flex-nowrap items-center">
                                        <div className="badge rounded-[5px] p-3 bg-red-500 border-hidden text-white font-bold"></div>
                                        <span className="text-xs font-light line-through mx-2">
                                            Rp
                                        </span>
                                    </div> */}
                                    <div className="flex flex-col md:flex-row">
                                        <HrefPusherwishlist>
                                            ADD TO WISHLIST
                                        </HrefPusherwishlist>
                                        <HrefPusherDetail href="">
                                            DETAIL
                                        </HrefPusherDetail>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Pria
