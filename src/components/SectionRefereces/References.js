import React from 'react'
import { DataRefereces } from './dataRefereces'

const data = [
    {
        id: 1,
        title: 'LOREM CELANAX',
        desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    },
    {
        id: 2,
        title: 'LOREM CELANAX ',
        desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.AA',
    },
]


export function References() {
    return (
        <div className="flex flex-row flex-wrap mx-3">
            {data.map(item => (
                <DataRefereces
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    )
}
