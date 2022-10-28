//import component Navbar
import Navbar from '../navbar'

export default function Layouts({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}
