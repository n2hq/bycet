import React, { useState } from 'react'
import ActionButton from './ActionButton'

export type HeroAltProps = {
    pageTitle?: string,
    bgImg: string,
    title: string,
    description: string,
    showContact?: boolean
}

const HeroAlt = ({ pageTitle = "", bgImg, title, description, showContact = false }: HeroAltProps) => {
    const bgUrl = `https://unbound.radiantthemes.com/wp-content/uploads/2018/06/business-agency-3-banner.jpg?id=7870`

    const [bg, setBg] = useState(bgImg ?? bgUrl)
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
                    <div className={`max-w-full md:max-w-[80%]  w-full mx-auto h-full flex flex-col place-content-center text-white`}>
                        {
                            pageTitle && <div className={`text-2xl font-bold mb-2 italic`}>
                                {pageTitle}
                            </div>
                        }
                        <div className={`text-3xl font-extralight mb-3`}>
                            {
                                title ?? 'Industry-Specific Solutions, Powered by AI & Data.'
                            }
                        </div>

                        <div className={` mb-6`}>
                            {
                                description ?? `We don't just build technology; we build your competitive advantage. Our end-to-end expertise delivers custom software and intelligent systems that solve your unique industry challenges and drive growth.`
                            }
                        </div>

                        {
                            showContact && <ActionButton>
                                Contact us today
                            </ActionButton>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeroAlt
