import React, { useState } from 'react'
import data from '../json/status.json'

const ContactSection = () => {
    let cnt = 0
    return (
        <div className={`px-[15px] w-full pt-20 pb-25 space-y-20 bg-white text-black`}>
            <div className={`max-w-[1200px] mx-auto w-full flex flex-col place-items-center place-content-center relative`}>
                <div className={`font-black text-4xl bg-white px-5 absolute z-2`}>
                    Our Contact
                </div>
                <div className={`border-b border-b-gray-200 w-full absolute top-[50%] z-0`} />
            </div>
            <div className={`max-w-[1200px] mx-auto w-[90%] sm:w-[50%] lg:w-full grid grid-cols-1 lg:grid-cols-3 gap-x-0`}>

                {
                    data.map((data: any, index: number) => {
                        cnt = cnt + 1

                        return (
                            <div className={`flex flex-col place-items-center ${cnt % 2 === 0 && 'bg-blue-50'} pt-10 pb-15 `}>
                                <div
                                    className={`opacity-50`}
                                >
                                    <img src={data.img} alt="" />
                                </div>
                                <div className={`text-2xl font-light`}>
                                    {data.topPhrase}
                                </div>
                                <div className={`text-4xl font-black`}>
                                    {data.noun}
                                </div>
                                <div className={`text-center text-[15px] max-w-[70%] mx-auto w-full mt-2 pb-2.5`}>
                                    {data.description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ContactSection
