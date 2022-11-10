import React from 'react'
import { CardCol } from '../card/cardCol'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HrefPusherDetail, HrefPusherwishlist } from '../hrefPusher'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import SwiperCore, { Mousewheel, Pagination } from 'swiper'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const SwiperHorizontal = () => {
    const router = useRouter()
    const token = Cookies.get('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const [data, setData] = useState()
    const [dataWishlist, setDataWishlist] = useState()
    const [dataSub, setDataSub] = useState()
    const [showAlert, setshowAlert] = useState(false)

    const addToWishlist = async id => {
        await axios
            .post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/wishlist/create`,
                {
                    produk_id: id,
                },
            )
            .then(res => {
                console.log(res)
                setshowAlert('success add to wishlist')
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        addToWishlist()
        axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produk`)
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
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/wishlist`)
            .then(res => {
                setDataWishlist(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    SwiperCore.use([Mousewheel, Pagination])
    const dataFlashSales = [
        {
            id: 1,
            title: 'NEW SEASON NEW STYLE',
            desc: 'JANGAN LEWATKAN KOLEKSI SEASON MUSIM DINGIN KAMI!',
            harga: 20000,
            discount: 10,
            hargaDiscount: 5000,
            image: '#737373',
            href: '#',
        },
        {
            id: 2,
            title: 'NEW SEASON NEW STYLE',
            desc: 'JANGAN LEWATKAN KOLEKSI SEASON MUSIM DINGIN KAMI!',
            harga: 20000,
            discount: 10,
            hargaDiscount: 5000,
            image: '#737373',
            href: '#',
        },
        {
            id: 3,
            title: 'NEW SEASON NEW STYLE',
            desc: 'JANGAN LEWATKAN KOLEKSI SEASON MUSIM DINGIN KAMI!',
            harga: 20000,
            discount: 10,
            hargaDiscount: 5000,
            image: '#737373',
            href: '#',
        },
    ]

    return (
        <>
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
            <Swiper
                direction={'horizontal'}
                slidesPerView={5}
                spaceBetween={10}
                mousewheel={{
                    forceToAxis: true,
                    releaseOnEdges: true,
                    sensitivity: 1,
                }}
                className="mySwiper swiper2">
                {data &&
                    data
                        .filter(data => data.diskon > 0)
                        .map(data => (
                            <SwiperSlide key={data.id}>
                                <CardCol>
                                    <div className="inline-flex flex-col items-start justify-start p-3">
                                        <div className="">
                                            <img
                                                src={
                                                    process.env
                                                        .NEXT_PUBLIC_BACKEND_URL +
                                                    '/' +
                                                    data?.gambar_produk1
                                                }
                                                alt="logo"
                                                className="w-[100px] "
                                            />
                                        </div>
                                        <div className="font-bold text-base mt-1 text-slate-800">
                                            {data.nama_produk}
                                        </div>
                                        <p className="text-slate-700 text-xs">
                                            {data.deskripsi}
                                        </p>
                                        <span className="text-lg font-bold">
                                            Rp{' '}
                                            {data.diskon > 0
                                                ? Math.round(
                                                      data.harga -
                                                          (data.harga *
                                                              data.diskon) /
                                                              100,
                                                  )
                                                      .toString()
                                                      .replace(
                                                          /\B(?=(\d{3})+(?!\d))/g,
                                                          '.',
                                                      )
                                                : data.harga
                                                      .toString()
                                                      .replace(
                                                          /\B(?=(\d{3})+(?!\d))/g,
                                                          '.',
                                                      )}
                                        </span>
                                        <div className="flex flex-row flex-nowrap items-center">
                                            <div className="badge rounded-[5px] p-3 bg-red-500 border-hidden text-white font-bold">
                                                {data.diskon}%
                                            </div>
                                            <span className="text-xs font-light line-through mx-2">
                                                Rp {data.harga}
                                            </span>
                                        </div>
                                        <div className="flex flex-col md:flex-row">
                                            <button
                                                onClick={e => {
                                                    e.preventDefault()
                                                    router.push({
                                                        pathname: `/product/${data.nama_produk}`,
                                                        query: { id: data.id },
                                                    })
                                                }}
                                                className="bg-transparent glass hover:bg-[#57534e] text-slate-800 text-sm font-bold px-3 py-2 rounded-sm mt-3">
                                                Detail
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (token) {
                                                        dataWishlist?.find(
                                                            x =>
                                                                x.produk_id ===
                                                                item.id,
                                                        )
                                                            ? setshowAlert(
                                                                  'Produk sudah ada di wishlist',
                                                              )
                                                            : addToWishlist(
                                                                  item.id,
                                                              )
                                                    } else {
                                                        setshowAlert(
                                                            'Silahkan login terlebih dahulu',
                                                        )
                                                        setTimeout(() => {
                                                            router.push(
                                                                '/login',
                                                            )
                                                        }, 2000)
                                                    }
                                                }}
                                                className="bg-transparent glass hover:bg-[#78716c] text-slate-800 text-sm font-bold px-3 py-2 rounded-sm mt-3">
                                                Wishlist
                                            </button>
                                        </div>
                                    </div>
                                </CardCol>
                            </SwiperSlide>
                        ))}
            </Swiper>
        </>
    )
}

export default SwiperHorizontal
