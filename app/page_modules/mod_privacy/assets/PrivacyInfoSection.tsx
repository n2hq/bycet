import React from 'react'
import { IndustriesJson } from '~/page_modules/mod_home/json/IndustriesJson'




const PrivacyInfoSection = () => {
    return (
        <div className={`w-full px-[15px] bg-blue-50/30 py-30 border-b border-gray-200`}>
            <div className={`max-w-[1200px] mx-auto w-full flex flex-col gap-y-6`}>
                <div className={`text-sm text-center uppercase`}>
                    Your Privacy is Our Commitment.
                </div>
                <div className={`text-4xl text-center font-black`}>
                    Your Privacy, Our Principle.
                </div>
                <div className={`text-sm text-center text-[19px] text-gray-500 md:w-[80%] mx-auto`}>
                    At Voysce, we build intelligent software with a foundational commitment to data security and privacy. This policy outlines how we protect your information and uphold your trust.
                </div>

            </div>
        </div>
    )
}

export default PrivacyInfoSection
