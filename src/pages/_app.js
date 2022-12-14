import 'tailwindcss/tailwind.css'
import 'animate.css'
import 'swiper/css/bundle'
import '../../style/Swiper.css'
import '../../style/global.css'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleStart = url => {
            setLoading(true)
        }
        const handleComplete = url => {
            setLoading(false)
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    }, [])

    return (
        <>
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center bg-white">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Wait a moment...
                    </h1>
                </div>
            )}
        </>
    )
}

const App = ({ Component, pageProps }) => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        window.addEventListener('online', () => {
            setIsOnline(true)
        })
        window.addEventListener('offline', () => {
            setIsOnline(false)
        })
    })

    return (
        <>
            <Loader />
            <Component {...pageProps} />
            {!isOnline && (
                <div className="toast z-[999]">
                    <div className="alert alert-error bg-red-600">
                        <div>
                            <span className="text-lg font-bold text-white">
                                No Internet Connection !, Please check your
                                internet connection and try again ! ????
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default App
