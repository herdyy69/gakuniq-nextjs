import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const HoverCategoryWanita = () => {
    return (
        <div className="bg-white h-auto w-full absolute z-10">
            <div className="mx-auto py-0 md:py-4 px-4 sm:px-6 lg:px-8 shadow ">
                <div className="flex flex-row flex-wrap items-start justify-start">
                    <div className="flex flex-col flex-nowrap my-2 md:my-0 mx-2 md:mx-5">
                        <h1 className="text-xs md:text-lg font-bold mb-0 md:mb-2 ">
                            ATASAN WANITA
                        </h1>
                        <span className="text-sm">Koleksi Atasan</span>
                    </div>
                    <div className="flex flex-col flex-nowrap my-2 md:my-0 mx-2 md:mx-5">
                        <h1 className="text-xs md:text-lg font-bold mb-0 md:mb-2 ">
                            ATASAN
                        </h1>
                        <span className="text-sm">Koleksi Atasan</span>
                    </div>
                    <div className="flex flex-col flex-nowrap my-2 md:my-0 mx-2 md:mx-5">
                        <h1 className="text-xs md:text-lg font-bold mb-0 md:mb-2 ">
                            ATASAN
                        </h1>
                        <span className="text-sm">Koleksi Atasan</span>
                    </div>
                    <div className="flex flex-col flex-nowrap my-2 md:my-0 mx-2 md:mx-5">
                        <h1 className="text-xs md:text-lg font-bold mb-0 md:mb-2 ">
                            ATASAN
                        </h1>
                        <span className="text-sm">Koleksi Atasan</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const HoverCategoryPria = () => {
    return (
        <div className="bg-white h-auto w-full absolute z-10">
            <div className="mx-auto py-0 md:py-4 px-4 sm:px-6 lg:px-8 shadow ">
                <div className="flex flex-row flex-wrap items-start justify-start">
                    <div className="flex flex-col flex-nowrap my-2 md:my-0 mx-2 md:mx-5">
                        <h1 className="text-xs md:text-lg font-bold mb-0 md:mb-2 ">
                            ATASAN PRIA
                        </h1>
                        <span className="text-sm">Koleksi Atasan</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
