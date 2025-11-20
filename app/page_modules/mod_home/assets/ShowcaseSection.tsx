import React, { useState } from 'react'
import '../css/home.css'
import { Link } from 'react-router'
import ContactUsButton from '~/components/body/ActionButton'
import ActionButton from '~/components/body/ActionButton'
import { preload } from 'react-dom'
import { config } from '~/lib/lib'


const ShowcaseSection = () => {
    const bgUrl = `/images/world-banner.jpg`
    preload(bgUrl, { as: 'image' })

    const videoUrl = `/images/vids/51b5097e-34d3736d.mp4`
    preload(videoUrl, { as: `video` })

    const [bg, setBg] = useState(bgUrl)
    const [bgCss, setBgCss] = useState(`bg-[url(${bg})]`)

    return (
        <div className={`w-full h-[600px] relative`}>

            <div className={`w-full h-full relative`}>
                <video
                    className="w-full h-full object-cover shadow-lg"
                    poster={bgUrl}
                    controls={false}
                    autoPlay
                    muted
                    playsInline
                >
                    <source src={videoUrl} type="video/mp4" />

                    Your browser does not support the video tag.
                </video>

                {/*  <img src={bg} alt=""
                    className={` object-cover w-full h-full`}
                /> */}
            </div>


            <div className={`w-full h-full bg-black/40 absolute top-0 left-0 right-0 px-[15px]`}>
                <div className={`max-w-[1200px] w-full h-full mx-auto`}>
                    <div className={`max-w-full md:max-w-[80%] w-full mx-auto h-full flex flex-col place-content-center text-white gap-y-6`}>
                        <div className={`text-3xl font-extralight`}>
                            We Build your Future, Powered by AI & Data.
                        </div>

                        <div className={`md:w-[80%]`}>
                            {config.VITE_SITE} delivers end-to-end technology outsourcing—from custom software and AI to cloud infrastructure—helping innovative businesses scale, integrate, and dominate.
                        </div>

                        <ActionButton>
                            Start Your Project
                        </ActionButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShowcaseSection
