import React from 'react'

const RDPInfoSection = () => {
    return (
        <div className={`w-full px-[15px] bg-blue-50/30 py-30 border-b border-gray-200`}>
            <div className={`max-w-[1200px] mx-auto w-full flex flex-col gap-y-6`}>
                <div className={`text-sm text-center uppercase`}>
                    Responsible Disclosure Policy
                </div>
                <div className={`text-4xl text-center font-black`}>
                    Partnering to Strengthen Our Defenses.
                </div>
                <div className={`text-sm text-center text-[19px] text-gray-500 md:w-[80%] mx-auto`}>
                    At Voysce, we consider the security of our systems and our clients' data a top priority. We value the role that security researchers play in keeping us secure and welcome the responsible reporting of any potential vulnerabilities.
                </div>

            </div>
        </div>
    )
}

export default RDPInfoSection
