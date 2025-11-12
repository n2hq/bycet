import React, { useState } from 'react'
import ActionButton from '~/components/body/ActionButton'

const AboutShowcaseSection = () => {
    const bgUrl = `https://unbound.radiantthemes.com/wp-content/uploads/2018/05/demo-eighteen-banner.jpg?id=4910`

    const [bg, setBg] = useState(bgUrl)


    return (
        <div className={`w-full h-[500px] relative`}>

            <div className={`w-full h-full relative`}>


                <img src={bg} alt=""
                    className={` object-cover w-full h-full`}
                />
            </div>

            <div className={`w-full h-full bg-black/20 absolute top-0 left-0 right-0 px-[15px]`}>
                <div className={`max-w-[1200px] w-full h-full mx-auto`}>
                    <div className={`max-w-full md:max-w-[80%] w-full mx-auto h-full flex flex-col place-content-center text-white gap-y-6 `}>
                        <div className={`text-4xl font-extralight`}>
                            Have a Challenge? Let's Solve It Together.
                        </div>

                        <div>
                            No matter the size or complexity of your project, our team is ready to provide the digital tools and expertise you need. Start the conversation today.
                        </div>

                        <ActionButton>
                            Contact us
                        </ActionButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutShowcaseSection
