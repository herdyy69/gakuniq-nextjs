import React from 'react'

export const CardRow = ({ children }) => {
    return (
        <div className="max-w-[auto] rounded overflow-hidden shadow-lg flex flex-col border-[1px] glass p-1 m-0">
            {children}
        </div>
    )
}
