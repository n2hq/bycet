import React, { useState } from 'react'
import { Link } from 'react-router'
import ActionButton from '~/components/body/ActionButton'

const OrderShowcaseSection = () => {
    const bgUrl = `https://unbound.radiantthemes.com/wp-content/uploads/2018/04/banner-five.jpg?id=3113`

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
                            Global Software & Business solutions that works.
                        </div>

                        <div>
                            No matter the size or complexity of your business, we offer digital tools, insights and expertise that keep you ahead.
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

export default OrderShowcaseSection
