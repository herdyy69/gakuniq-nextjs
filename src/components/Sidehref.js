import Link from 'next/link'

const Sidehref = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a
            className={`inline-flex items-center px-[0.3rem] pt-1 pb-[5px] border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out my-1 ${
                active
                    ? 'border-gray-300 text-gray-900 focus:border-gray-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'
            }`}>
            {children}
        </a>
    </Link>
)

export default Sidehref
