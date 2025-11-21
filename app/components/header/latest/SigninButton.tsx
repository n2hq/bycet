import React from 'react'
import { Link } from 'react-router'

const SigninButton = () => {
    return (
        <div className={`hidden sm:block `}>
            <Link className={``} to={`https://index.bycet.com/web/signin`}>
                <button className={` w-[70px] h-[35px] border rounded-full text-sm border-gray-300 cursor-pointer hover:border-gray-800 hover:shadow-4xl`}>
                    Sign in
                </button>
            </Link>
        </div>
    )
}

export default SigninButton
