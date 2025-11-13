import React, { useEffect, useState } from 'react'

export type GridContentProp = {
    count: string,
    title: string,
    borderLocation: string
}

const AboutFactsSection = () => {
    const bg = `https://unbound.radiantthemes.com/wp-content/uploads/2018/05/about-Simple-image03.png?id=5348`
    const [bgimg, setBgImg] = useState(`bg-[url(${bg})]`)

    return (
        <div>
            <div className={`w-full px-[15px] bg-center bg-[url(https://unbound.radiantthemes.com/wp-content/uploads/2018/05/about-Simple-image03.png?id=5348)]  bg-no-repeat bg-cover bg-black`}>
                <div className={`py-32`}>
                    <div className={`max-w-[1200px] mx-auto w-full`}>
                        <div className={`grid grid-cols-1 md:grid-cols-2`}>
                            <div>

                            </div>
                            <div className={`flex flex-col gap-y-8 text-white`}>
                                <div className={`text-[13px] uppercase tracking-[3px] font-extralight`}>
                                    Your Vision, Our Execution: A Partnership from the Start.
                                </div>
                                <div className={`text-[35px] leading-10 font-black`}>
                                    Why Partner with <span className={`font-extralight text-white`}>Veycet</span>?
                                </div>
                                <div>
                                    We are built on a fresh principle: your success is our only metric. We immerse ourselves in your world, transforming your unique challenges into powerful, custom software solutions. Our process is collaborative, transparent, and designed entirely around your goals.
                                </div>

                                <div className={`grid md:grid-cols-2 gap-0`}>

                                    <GridContent count='12+' title='Years of Founder Expertise' borderLocation='bottom' />

                                    <GridContent count='100%' title='Focus on Your Success' borderLocation='left' />

                                    <GridContent count='End-to-End' title='Technical Partnership' borderLocation='right' />
                                    <GridContent count='Cutting-Edge' title='Technology Stack' borderLocation='top' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFactsSection

export const GridContent = ({ count, title, borderLocation }: GridContentProp) => {

    const [border, setBorder] = useState('')

    useEffect(() => {
        if (borderLocation === 'bottom') {
            setBorder('border-b border-white/20')
        } else if (borderLocation === 'left') {
            setBorder(`md:border-l md:border-white/20 md:pl-10 border-b border-b-white/20 `)
        } else if (borderLocation === 'top') {
            setBorder('border-t border-white/20 md:pl-10')
        } else {
            setBorder('md:border-r md:border-white/20')
        }
    }, [borderLocation])

    return (
        <div className={`flex flex-col  gap-y-3 py-10 ${border}`}>
            <div className={`text-4xl font-black`}>
                {count}
            </div>
            <div>
                {title}
            </div>
        </div>
    )
}
