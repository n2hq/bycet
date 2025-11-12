import React, { useState } from 'react'
import { BsBriefcase, BsCheck2All, BsShare } from 'react-icons/bs'
import { FaCcDiscover } from 'react-icons/fa'
import { IoCreate } from 'react-icons/io5'

const OrderServiceJson = [
    {
        title: "Share your vision",
        description: "The journey begins with you. Tell us about your project, and we'll listen intently.",
        img: "https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Create-Your-Wallet-Icon.png",
        step: 1,
        icon: <BsShare />
    },
    {
        title: "Discovery & Strategy Call",
        description: "Within 24 hours, you will get a call from our tech specialists  to schedule a free, no-obligation discovery call.",
        img: "https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Make-Payments-Icon.png",
        step: 2,
        icon: <BsCheck2All />
    },
    {
        title: "Receive Your Tailored Proposal",
        description: "Based on our discovery session, we will craft a detailed proposal designed specifically for you.",
        img: "https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Buy-Or-Sell-Orders-Icon.png",
        step: 3,
        icon: <BsBriefcase />
    },
    {
        title: "Kick-off & Development",
        description: "Once you approve the proposal, we sign a clear contract and start crystallizing your vision.",
        img: "https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Create-Your-Wallet-Icon.png",
        step: 4,
        icon: <IoCreate />
    }
]

const OrderServiceSection = () => {
    const bg = `https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Converter-Background-Image.png?id=3376`

    const bgImg = `bg-[url(${bg})]`


    return (
        <div>
            <div className={`px-[15px] w-full bg-black bg-[url(https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Converter-Background-Image.png?id=3376)] bg-no-repeat bg-cover`}>
                <div className={`max-w-[1200px] mx-auto w-full`}>
                    <div className={` h-auto text-white flex flex-col place-content-center gap-y-6 py-30`}>
                        <div className={`text-center uppercase text-[13px] tracking-[5px] font-semibold`}>
                            Let's Build Something Great Together
                        </div>
                        <div className={`text-center text-5xl font-black`}>
                            Your Blueprint for Success Starts Here
                        </div>
                        <div className={`text-center font-extralight max-w-[60%] mx-auto w-full`}>
                            At Voysce, we believe that starting a new software project should be exciting, not overwhelming. Our ordering process is designed to be a collaborative conversation, not a complex sales funnel. We seek to understand your vision, your challenges, and your goals to ensure we are the right partner for your success.
                        </div>
                    </div>
                </div>


            </div>
            <div className={`px-[15px] max-w-[1300px] mx-auto w-full relative -top-10`}>
                <div className={`grid grid-cols-1 lg:grid-cols-4 gap-x-3 gap-y-12`}>
                    {OrderServiceJson.map((order, index: number) => {
                        return (
                            <div key={index} className={``}>
                                <div className={`flex flex-col place-items-center gap-y-3`}>
                                    <div className={`relative h-22 w-22 rounded-full text-white flex place-items-center place-content-center border-2 border-white bg-blue-900 text-4xl`}>
                                        {order.icon}
                                    </div>

                                    <div className={`text-center font-bold text-2xl`}>
                                        Step {order.step}
                                    </div>

                                    <div className={`text-center font-semibold text-lg`}>
                                        {order.title}
                                    </div>

                                    <div className={`text-center max-w-[70%] md:max-w-[50%] lg:max-w-[80%] mx-auto text-sm`}>
                                        {order.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OrderServiceSection
