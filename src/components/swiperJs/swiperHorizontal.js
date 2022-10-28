import React from 'react'
import { CardCol } from '../card/cardCol'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HrefPusherDetail, HrefPusherwishlist } from '../hrefPusher'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import SwiperCore, { Mousewheel, Pagination } from 'swiper'

const SwiperHorizontal = () => {
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

    var data = 'test'

    return (
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
            {dataFlashSales.map(data => (
                <SwiperSlide key={data.id}>
                    <CardCol>
                        <div className="inline-flex flex-col items-start justify-start p-3">
                            <div className="">
                                <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="w-[100px] "
                                />
                            </div>
                            <div className="font-bold text-base mt-1 text-slate-800">
                                {data.title}
                            </div>
                            <p className="text-slate-700 text-xs">
                                {data.desc}
                            </p>
                            <span className="text-lg font-bold">
                                Rp {data.harga}
                            </span>
                            <div className="flex flex-row flex-nowrap items-center">
                                <div className="badge rounded-[5px] p-3 bg-red-500 border-hidden text-white font-bold">
                                    {data.discount}%
                                </div>
                                <span className="text-xs font-light line-through mx-2">
                                    Rp {data.hargaDiscount}
                                </span>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <HrefPusherwishlist>
                                    ADD TO WISHLIST
                                </HrefPusherwishlist>
                                <HrefPusherDetail href={data.id}>
                                    DETAIL
                                </HrefPusherDetail>
                            </div>
                        </div>
                    </CardCol>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperHorizontal
