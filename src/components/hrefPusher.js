import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Nav from './Layouts/Nav'

export const HrefPusherDetail = ({ children, ...props }) => {
    const router = useRouter()

    // const handleClick = e => {
    //     router.push(props.href)
    // }

    return (
        <Link
            href={{
                pathname: '/product',
            }}>
            <button className="bg-transparent glass hover:bg-[#78716c] text-slate-800 text-sm font-bold px-3 py-2 rounded-sm mt-3">
                {children}
            </button>
        </Link>
    )
}

export const HrefPusherwishlist = ({ children, ...props }) => {
    return (
        <Link
            href={{
                pathname: '/katalog/detail-product/',
            }}>
            <button className="bg-transparent glass hover:bg-[#57534e] text-slate-800 text-sm font-bold px-3 py-2 rounded-sm mt-3">
                {children}
            </button>
        </Link>
    )
}
