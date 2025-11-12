import React from 'react'
import ActionButton from '~/components/body/ActionButton'

const AboutUsSection = () => {
    const imgLnk = `https://unbound.radiantthemes.com/wp-content/uploads/2018/05/about-Simple-image01.png`

    return (
        <div>
            <div className={`w-full px-[15px] py-20`}>
                <div className={`max-w-[1200px] mx-auto w-full`}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8`}>
                        <div className={`w-full sm:w-[80%] lg:w-full mx-auto h-full relative`}>
                            <img
                                src={imgLnk}
                                alt=""
                                className={`object-cover w-full h-full`}
                            />
                        </div>
                        <div className={`flex flex-col space-y-6 h-fit`}>
                            <div className={`text-[13px] font-bold tracking-[2px] uppercase`}>
                                Your Vision, Engineered.
                            </div>
                            <div className={`text-[40px] leading-[1.2em] font-black max-w-[80%]`}>
                                We build the custom software that powers ambitious businesses.
                            </div>
                            <div className={`text-xl md:max-w-[95%]`}>
                                We are committed to customers success from start to finish. Our input helps make their solutions stand out from the crowd.
                            </div>
                            <div className={`text-[14px] md:max-w-[95%]`}>
                                We are committed to one outcome: your success. By focusing on your unique challenges and opportunities, we deliver tailored solutions that are not only powerful and scalable but are designed to set you apart in the marketplace.
                            </div>

                            <ActionButton>
                                Contact us
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection
