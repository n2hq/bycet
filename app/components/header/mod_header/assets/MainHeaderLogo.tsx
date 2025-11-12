import React from 'react'
import '../css/main_header.css'
import { Link } from 'react-router'

const MainHeaderLogo = () => {
    return (
        <div className='main-header-logo'>
            <Link to={'/'}>
                <span className='font-light'>Voysce</span>.
            </Link>
        </div>
    )
}

export default MainHeaderLogo
