import React from 'react'
import { CardCol } from '@/components/card/cardCol'

export const DataRefereces = Props => {
    const [data, setData] = React.useState()
    const [style, setStyle] = React.useState()

    const dataHover = () => {
        return (
            <div className="rounded-xl border-2 max-w-[10rem] min-h-[40vh]  bg-transparent shadow-lg myAnimate ml-[-0.25rem] mt-[0.25rem]">
                <div className="m-4">
                    <div className="px-0 py-0">
                        <p className="text-gray-700 text-base">{Props.desc}</p>
                    </div>
                    <div className="px-0 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #lorem
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    function handleMouseEnter() {
        setData(dataHover())
    }
    function handleMouseOut() {
        setTimeout(() => {
            setData('')
        }, 5000)
    }
    return (
        <div className="flex flex-row mx-0 my-2">
            <CardCol>
                <div
                    className="inline-flex flex-col items-center justify-center w-full h-full p-3"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseOut}>
                    <div className="">
                        <img
                            src="/logo.png"
                            alt="logo"
                            className="w-[100px] "
                        />
                    </div>
                    <div className="font-bold text-base mt-1 text-slate-800">
                        {Props.title}
                    </div>
                </div>
            </CardCol>
            <div id={Props.id} onMouseLeave={handleMouseOut}>
                {data}
            </div>
        </div>
    )
}
;``
