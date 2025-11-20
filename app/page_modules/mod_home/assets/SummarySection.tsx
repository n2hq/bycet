import React from 'react'
import { SummaryJson } from '../json/SummaryJson'
import { config } from '~/lib/lib'

const SummarySection = () => {
    return (
        <div className={`w-full px-[15px] py-0`}>
            <div className={`max-w-[1200px] w-full mx-auto flex flex-col gap-y-5`}>
                {/* <div className={`text-center text-xl font-semibold tracking-tight`}>
                    Try Four Easy Steps
                </div> */}
                <div className={`text-center text-3xl font-black tracking-normal text-purple-900`}>
                    Your Partner in Digital Transformation
                </div>

                <div className={`text-center text-[19px] md:mx-40`}>
                    At {config.VITE_SITE}, we understand that technology is not a one-size-fits-all solution. We are a dedicated team of engineers, data scientists, and DevOps specialists who partner with you to build, integrate, and optimize the custom technology solutions your business needs to thrive in a competitive landscape. We don't just write code; we solve complex problems and deliver measurable results.
                </div>
            </div>

            <div className={`max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 mt-12 gap-16`}>
                {
                    SummaryJson.map((summary, index: number) => {
                        return (
                            <div
                                key={index}
                                className={`flex flex-col grid-cols-3 gap-y-5`}>
                                <div className={`flex place-content-center text-5xl text-red-700`}>
                                    {summary.icon}
                                </div>
                                <div className={`flex place-content-center text-xl font-semibold`}>
                                    {summary.title}
                                </div>
                                <div className={`text-center text-[15px] max-w-[70%] mx-auto w-full`}>
                                    {summary.description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SummarySection
