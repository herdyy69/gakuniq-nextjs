import axios from 'axios'
import { useEffect, useState } from 'react'

const onProgress = () => {
    // const [data, setData] = useState()
    // const Get = async () => {
    //     await axios
    //         .get('http://192.168.1.16:8000/api/kategori/')
    //         .then(response => setData(response.data.data))
    //         .catch(error => {})
    // }
    // useEffect(() => {
    //     Get()
    // }, [])

    // console.log(data)

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col items-center pt-8 sm:justify-start sm:pt-0">
                    <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                        On Progress
                    </div>

                    <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                        Comming soon...
                    </div>
                    {/* {data?.map(item => (
                        <div
                            key={item.id}
                            className="flex flex-col flex-nowrap my-2 md:my-0 mx-2 md:mx-5">
                            <h1 className="text-xs md:text-lg font-bold mb-0 md:mb-2 ">
                                {item.name}
                            </h1>
                            <span className="text-sm">Koleksi Atasan</span>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default onProgress
