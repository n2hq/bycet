import React from 'react'
import { DigitalWorld } from '../json/DigitalWorld'



const DigitalWorldSection = () => {
    return (
        <div className={`w-full px-[15px]`}>
            <div className={`max-w-[1200px] mx-auto w-full flex flex-col gap-y-6`}>
                <div className={`text-sm text-center uppercase`}>
                    Get ready to start your exciting journey
                </div>
                <div className={`text-4xl text-center font-black`}>
                    Choose from one of our specialist services.
                </div>
                <div className={`text-sm text-center`}>
                    In today's fast-paced digital landscape, you need a strategic technology partner. At Durche, we offer an integrated suite of services designed to cover every stage of your digital journey. From the initial spark of an idea to leveraging advanced intelligence, we provide the end-to-end expertise to build, scale, and transform your business.
                </div>
                <div className={`max-w-[1200px] mx-auto w-full`}>
                    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-9`}>
                        {
                            DigitalWorld.map((digital, index: number) => {
                                return (
                                    <div className={`flex flex-col place-items-center gap-y-3 max-w-[70%] mx-auto`}>

                                        <div className={`text-5xl text-blue-700`}>
                                            {digital.icon}
                                        </div>

                                        <div className={`font-semibold text-lg`}>
                                            {digital.title}
                                        </div>

                                        <div className={`text-center max-w-[90%] mx-auto`}>
                                            {digital.description}
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

export default DigitalWorldSection
