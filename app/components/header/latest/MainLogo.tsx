import React from 'react'
import { Link } from 'react-router'

const MainLogo = () => {
    return (
        <>
            <Link to={'/'}>
                <div className={`flex place-items-center w-fit text-[24px] font-extrabold font-sans place-content-between`}>

                    <div className={`text-black first-letter:`}>
                        <span className=' '>v</span><span className='font-bold relative -left-1px '>eycet</span>.
                    </div>


                </div>
            </Link>
        </>
    )
}

export default MainLogo
