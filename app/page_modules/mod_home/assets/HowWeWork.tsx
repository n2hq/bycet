import React from 'react'
import { HowWeWorkJson } from '../json/HowWeWorkJson'

const HowWeWork = () => {
    return (
        <div className={`w-full px-[15px] py-22 bg-white text-black`}>
            <div className={`flex flex-col mb-10`}>
                <div className={`text-center text-4xl font-black  md:max-w-[60%] mx-auto w-full flex place-content-center mb-5`}>
                    Our Work Process
                </div>
                <div className={`text-center text-lg font-black md:max-w-[70%] mx-auto w-full mb-4`}>
                    A Partnership Built on Transparency, Agility and Trust
                </div>
                <div className={`text-center text-sm md:max-w-[70%] mx-auto w-full text-[15px]`}>
                    We believe a successful project is rooted in more than just tasks and deadlines—it's a collaborative partnership. Our process is designed to be transparent and adaptive, ensuring we not only meet your expectations but exceed them.
                </div>
            </div>

            <div className={`max-w-[1200px] mx-auto w-full`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5`}>
                    {
                        HowWeWorkJson.map((process, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className={`border border-gray-200 py-16 px-4 flex flex-col place-items-center space-y-2`}
                                >
                                    <div className={`text-cyan-500 text-5xl`}>
                                        {process.icon}
                                    </div>
                                    <div className={`text-lg font-bold`}>
                                        {process.title}
                                    </div>
                                    <div className={`text-center`}>
                                        {process.description}
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HowWeWork
