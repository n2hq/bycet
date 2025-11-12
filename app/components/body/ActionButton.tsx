import React from 'react'
import { Link } from 'react-router'

const ActionButton = ({ children }: any) => {
    return (
        <Link to={'/contact'}>
            <button className={`w-[200px] cursor-pointer bg-blue-800 py-3 rounded-full text-lg text-white`}>
                {children}
            </button>
        </Link>
    )
}

export default ActionButton
