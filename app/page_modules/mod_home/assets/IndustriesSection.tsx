import React from 'react'
import { CoreServicesJson } from '../json/CoreServicesJson'
import { IndustriesJson } from '../json/IndustriesJson'



const IndustriesSection = () => {
    return (
        <div className={`w-full px-[15px] bg-blue-50/30 py-30 border-b border-gray-200`}>
            <div className={`max-w-[1200px] mx-auto w-full flex flex-col gap-y-6`}>
                <div className={`text-sm text-center uppercase`}>
                    Shape the Future of Your Industry
                </div>
                <div className={`text-4xl text-center font-black`}>
                    Industries we serve
                </div>
                <div className={`text-sm text-center text-[19px] text-gray-500 md:w-[80%] mx-auto`}>
                    We leverage our deep technical and design expertise to deliver tailored solutions that address the unique challenges and drive innovation within your sector.
                </div>
                <div className={`max-w-[1200px] mx-auto w-full`}>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}>
                        {
                            IndustriesJson.map((industry, index: number) => {
                                return (
                                    <div key={index}>
                                        <div className={`border border-gray-200 px-6 pt-7 pb-9 flex flex-col gap-y-3 h-full shadow-lg shadow-gray-200 bg-white text-base rounded-lg`}>
                                            <div>
                                                <div className={`border border-gray-300 rounded-full w-10 h-10 flex place-items-center place-content-center text-2xl text-blue-600/50`}>
                                                    {industry.icon}
                                                </div>
                                            </div>
                                            <div className={` h-full flex flex-col gap-y-4`}>
                                                <div className={`font-semibold`}>
                                                    {industry.title}
                                                </div>
                                                <div className={`border-b border-gray-500`} />
                                                <div className={`text-base text-[13px] leading-[1.5em] `}>
                                                    {industry.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndustriesSection
