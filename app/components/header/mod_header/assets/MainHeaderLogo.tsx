import React from 'react'
import '../css/main_header.css'
import { Link } from 'react-router'

const MainHeaderLogo = () => {
    return (
        <div className='text-[28px] font-sans font-black tracking-tighter flex place-items-center'>
            <Link to={'/'} className=' flex'>
                <span className='font-light flex'>
                    <b className={`font-bold`}>V</b>
                    <span className=' relative -left-0.5'>eycet</span>
                </span>
                <span>.</span>
            </Link>
        </div>
    )
}

export default MainHeaderLogo
