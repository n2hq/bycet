import React from 'react'
import { OrderSummaryJson } from '../json/OrderSummaryJson'

const OrderSummarySection = () => {
    return (
        <div className={`w-full px-[15px] py-0`}>
            <div className={`max-w-[1200px] w-full mx-auto flex flex-col gap-y-5`}>
                <div className={`text-center text-[13px] font-semibold tracking-widest uppercase`}>
                    Begin your project with a trusted partner.
                </div>
                <div className={`text-center text-3xl font-black tracking-normal text-purple-900`}>
                    Your Vision, Our Expertise: A Partnership for Growth
                </div>

                <div className={`text-center text-[15px] md:mx-40`}>
                    Ready to transform your business with a custom software solution? We partner with you through a clear, transparent process to ensure your project is not just built, but built for success.
                </div>
            </div>

            {/* <div className={`max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 mt-12 gap-16`}>
                {
                    OrderSummaryJson.map((summary, index: number) => {
                        return (
                            <div className={`flex flex-col grid-cols-3 gap-y-5`}>
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
            </div> */}
        </div>
    )
}

export default OrderSummarySection
