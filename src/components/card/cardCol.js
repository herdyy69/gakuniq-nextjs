import React from 'react'
const css = { maxWidth: '100%', height: 'auto' }

export const CardCol = ({ children }) => {
    return (
        <div className="max-w-[auto] min-h-[40vh] rounded-lg overflow-hidden shadow-lg flex flex-col border-[3px] glass z-10 m-1">
            {children}
        </div>
    )
}
