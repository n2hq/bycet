import React from 'react'
import '../css/main_header.css'
import { Link } from 'react-router'

const MainHeaderLogo = () => {
    return (
        <div className='text-[28px] font-sans font-black tracking-tighter flex place-items-center text-black'>
            <Link to={'/'} className=' flex'>
                <span className='font-light flex'>
                    <b className={`font-bold`}>b</b>
                    <span className=' relative -left-0.5'>ycet</span>
                </span>
                <span>.</span>
            </Link>
        </div>
    )
}

export default MainHeaderLogo
