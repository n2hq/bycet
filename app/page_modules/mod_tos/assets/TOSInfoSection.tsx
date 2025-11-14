import React from 'react'

const TOSInfoSection = () => {
    return (
        <div className={`w-full px-[15px] bg-blue-50/30 py-30 border-b border-gray-200`}>
            <div className={`max-w-[1200px] mx-auto w-full flex flex-col gap-y-6`}>
                <div className={`text-sm text-center uppercase`}>
                    Our Terms of Use.
                </div>
                <div className={`text-4xl text-center font-black`}>
                    Clear Guidelines for a Secure Partnership.
                </div>
                <div className={`text-sm text-center text-[19px] text-gray-500 md:w-[80%] mx-auto`}>
                    Welcome to Veycet. These terms outline the rules and guidelines for using our website and services, ensuring a secure and productive experience for all our partners and users.
                </div>

            </div>
        </div>
    )
}

export default TOSInfoSection
