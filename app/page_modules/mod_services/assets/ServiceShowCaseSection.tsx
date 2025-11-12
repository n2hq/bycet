import React, { useState } from 'react'
import { Link } from 'react-router'
import ActionButton from '~/components/body/ActionButton'

const ServiceShowcaseSection = () => {
    const bgUrl = `https://unbound.radiantthemes.com/wp-content/uploads/2018/06/business-agency-3-banner.jpg?id=7870`

    const [bg, setBg] = useState(bgUrl)
    const [bgCss, setBgCss] = useState(`bg-[url(${bg})]`)

    return (
        <div className={`w-full h-[500px] relative`}>

            <div className={`w-full h-full relative`}>


                <img src={bg} alt=""
                    className={` object-cover w-full h-full`}
                />
            </div>

            <div className={`w-full h-full bg-black/20 absolute top-0 left-0 right-0 px-[15px]`}>
                <div className={`max-w-[1200px] w-full h-full mx-auto`}>
                    <div className={`max-w-full md:max-w-[80%] w-full mx-auto h-full flex flex-col place-content-center text-white gap-y-6`}>
                        <div className={`text-3xl font-extralight`}>
                            Scalable Software Solutions for a Competitive Edge
                        </div>

                        <div>
                            We deliver the digital tools, strategic insights, and expert partnership to transform your operations and drive measurable growth.
                        </div>

                        <ActionButton>
                            Contact us today
                        </ActionButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceShowcaseSection
