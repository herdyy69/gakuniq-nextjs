import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/bundle'
import SwiperCore, { Mousewheel, Pagination } from 'swiper'

const swiperVertical = () => {
    SwiperCore.use([Mousewheel, Pagination])

    const dataCarousel = [
        {
            id: 1,
            title: 'NEW SEASON NEW STYLE',
            desc: 'JANGAN LEWATKAN KOLEKSI SEASON MUSIM DINGIN KAMI!',
            background:
                'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg',
            href: '#',
        },
        {
            id: 2,
            title: 'NEW YEAR NEW OUTFIT',
            desc: 'blablablablabla',
            background:
                'https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg',
            href: '#',
        },
    ]

    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={{
                forceToAxis: false,
                releaseOnEdges: true,
                sensitivity: -10,
            }}
            pagination={{
                clickable: true,
            }}
            className="mySwiper">
            {dataCarousel.map(data => (
                <SwiperSlide key={data.id}>
                    <div
                        style={{
                            backgroundImage: `url(${data.background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className={'h-full w-full flex items-center px-8'}>
                        <div className="flex flex-col flex-nowrap items-start">
                            {/* text outline shadow */}
                            <h1 className="text-lg md:text-2xl text-slate-200 font-extrabold text-stroke">
                                {data.title}
                            </h1>
                            <span className="text-[10.5px] md:text-lg text-slate-300 py-3 text-stroke2">
                                {data.desc}
                            </span>
                            <button className="text-xs md:text-sm p-3 bg-slate-100 rounded-md text-slate-800 font-bold border-[1.5px] border-slate-700 glass">
                                SELENGKAPNYA
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default swiperVertical
