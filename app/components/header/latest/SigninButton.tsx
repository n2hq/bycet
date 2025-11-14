import React from 'react'

const SigninButton = () => {
    return (
        <div className={`hidden sm:block `}>
            <button className={` w-[70px] h-[35px] border rounded-full text-sm border-gray-300 cursor-pointer hover:border-gray-800 hover:shadow-4xl`}>
                Sign in
            </button>
        </div>
    )
}

export default SigninButton
