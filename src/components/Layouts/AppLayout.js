import Nav from '@/components/Layouts/Nav'
import Footer from './Footer'
import { useRouter } from 'next/router'

const AppLayout = ({ header, children, ...props }) => {
    const router = useRouter()

    return (
        <>
            <div className="min-h-screen bg-[#FFFF]">
                <Nav />
                {props.title ? (
                    <h1 className="py-4 px-4 font-extrabold">{props.title}</h1>
                ) : (
                    ' '
                )}
                {/* Page Heading */}
                {router.pathname === '/beranda' ? (
                    ''
                ) : (
                    <header className="bg-[#FFFFFF] shadow">
                        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 shadow">
                            {header}
                        </div>
                    </header>
                )}
                <main>{children}</main>

                {props.subTitle}
                {/* Page Content */}
                <Footer />
            </div>
        </>
    )
}

export default AppLayout
