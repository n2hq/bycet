import React from 'react'
import '../css/main_header.css'
import { Link } from 'react-router'

const MainHeaderLogo = () => {
    return (
        <div className='text-[28px] font-sans font-black tracking-tighter flex place-items-center'>
            <Link to={'/'}>
                <span className='font-light'><b className={`font-bold`}></b>vyget</span>.
            </Link>
        </div>
    )
}

export default MainHeaderLogo
