import React, { useState, useEffect } from 'react'

const Modal = ({ children, ...props }) => {
    const [value, setValue] = useState([])

    const onClick = () => {
        setValue(props.item)
    }

    console.log(props.item)

    return (
        <div>
            <label
                onClick={onClick}
                htmlFor="my-modal-6"
                className="modal-button btn btn-ghost bg-[#f4f4f4] text-[#000] rounded-md px-2 py-0 text-xs font-bold">
                {children}
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            {props.item.map(item => (
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{}</h3>
                        <p className="py-4">
                            You've been selected for a chance to get one year of
                            subscription to use Wikipedia for free!
                        </p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">
                                Yay!
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Modal
