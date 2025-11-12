import React from 'react'

const CopyrightInfoSection = () => {
    return (
        <div className={`w-full px-[15px] bg-blue-50/30 py-30 border-b border-gray-200`}>
            <div className={`max-w-[1200px] mx-auto w-full flex flex-col gap-y-6`}>
                <div className={`text-sm text-center uppercase`}>
                    Copyright Policy
                </div>
                <div className={`text-4xl text-center font-black`}>
                    Protecting Intellectual Property, Respecting Creativity.
                </div>
                <div className={`text-sm text-center text-[19px] text-gray-500 md:w-[80%] mx-auto`}>
                    This policy outlines the intellectual property rights for all content associated with Voysce and establishes the procedures for reporting any potential copyright infringement.
                </div>

            </div>
        </div>
    )
}

export default CopyrightInfoSection
