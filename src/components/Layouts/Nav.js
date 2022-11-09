import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HoverCategoryPria, HoverCategoryWanita } from '../common/HoverCategory'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { GiSelfLove } from 'react-icons/gi'
import Cookies from 'js-cookie'
import axios from 'axios'

const Nav = () => {
    const router = useRouter()

    const [dataCategory, setDataCategory] = useState(false)

    const listCategory = [
        {
            id: 1,
            name: 'PRIA',
            link: '/kategori/pria',
            hover: <HoverCategoryPria />,
        },
        {
            id: 2,
            name: 'WANITA',
            link: '/kategori/wanita',
            hover: <HoverCategoryWanita />,
        },
    ]
    const listMenu = [
        {
            id: 1,
            name: 'AKUN',
            link: '/akun',
            icon: <AiOutlineUser className="text-2xl" />,
        },
        {
            id: 2,
            name: 'KERANJANG',
            link: '/nav-item/keranjang',
            icon: <AiOutlineShoppingCart className="text-2xl" />,
        },
        {
            id: 3,
            name: 'WISHLIST',
            link: '/nav-item/wishlist',
            icon: <GiSelfLove className="text-2xl" />,
        },
    ]

    const [data, setData] = useState()

    const fetchData = async () => {
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/kategori`)
            .then(response => {
                setData(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    // console.log(data)

    return (
        <div>
            <nav
                className="bg-white p-0 shadow"
                onMouseEnter={() => {
                    setDataCategory('')
                }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center justify-between px-4 h-[auto] py-[1rem]">
                        <div className="flex flex-row items-center">
                            <div
                                className="flex-shrink-0 flex items-center mr-5"
                                onMouseEnter={() => {
                                    setDataCategory('')
                                }}>
                                <NavLink
                                    href={{
                                        pathname: '/beranda',
                                    }}
                                    active={router.pathname === '/beranda'}>
                                    <Image
                                        src="/logo.png"
                                        width={40}
                                        height={40}
                                    />
                                    <Image
                                        className="hidden"
                                        src="/logo.png"
                                        width={35}
                                        height={35}
                                    />
                                </NavLink>
                            </div>
                            <div className="hidden md:flex flex-row flex-wrap items-center justify-center">
                                {data?.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        href={{
                                            pathname: item.link,
                                            query: { id: item.id },
                                        }}
                                        active={router.pathname === item.link}>
                                        <span
                                            onMouseEnter={() => {
                                                if (item.id === 1) {
                                                    setDataCategory(
                                                        <HoverCategoryPria />,
                                                    )
                                                }
                                                if (item.id === 2) {
                                                    setDataCategory(
                                                        <HoverCategoryWanita />,
                                                    )
                                                }
                                            }}
                                            className="text-[12px] font-extrabold px-1">
                                            {item.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start">
                            {/* <div className="relative mx-2">
                                <input
                                    type="search"
                                    className="bg-transparent mb-2 md:mb-0 rounded-md max-w-[300px] h-[40px] pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="im sorry this feature is not available yet"
                                    disabled
                                />
                                <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div> */}
                            <div>
                                {listMenu.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        href={{
                                            pathname: item.link,
                                        }}
                                        active={router.pathname === item.link}>
                                        <span className="text-[12px] font-extrabold px-1">
                                            {item.icon}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className=""
                onMouseLeave={() => {
                    setDataCategory('')
                }}>
                {dataCategory}
            </div>
        </div>
    )
}

export default Nav
