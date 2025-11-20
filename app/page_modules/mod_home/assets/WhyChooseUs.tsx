import React from 'react'
import { PreWhyJson, WhyChooseUsJson } from '../json/WhyChooseUsJson'
import { index } from '@react-router/dev/routes'

const WhyChooseUs = () => {
    const bgimg = `https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Investment-image01.jpg?id=3052`

    return (
        <div>
            <div className={`mx-auto w-full bg-blue-50`}>
                <div className={`grid grid-cols-1 md:grid-cols-2`}>
                    <div className={`h-full w-full relative`}>
                        <div className={`relative h-full w-full`}>
                            <img
                                className={`object-cover w-full h-full z-2`}
                                src={bgimg}
                                alt=""
                            />
                            <div className={`absolute bottom-0 right-0 z-3 bg-red-500/50 text-white w-full md:w-[60%] h-[50%] md:h-[30%] `}>
                                <div className={`w-full h-full flex flex-col place-content-center`}>
                                    <div className={`space-y-2 w-[80%] mx-auto`}>
                                        <div>
                                            Streamline Operations, Amplify Results
                                        </div>
                                        <div className={`text-2xl md:text-3xl font-black`}>

                                            Automate complex workflows to reduce costs & eliminate errors
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={` py-16 max-w-[80%] md:max-w-[70%] mx-auto w-full flex text-black flex-col place-content-center gap-y-8`}>
                        <div className={`text-4xl font-black tracking-tighter`}>
                            Why Choose <span className="font-extralight">Veycet</span>?
                        </div>

                        <div className={`text-lg font-bold`}>
                            We Help You Transform Your Vision into Market-Ready Reality
                        </div>

                        <div>
                            <div className={`mb-2`}>
                                We go beyond just codes. We partner with you to solve complex challenges, drive growth, and create a sustainable competitive advantage through technology.
                            </div>

                            <ul className={`space-y-2 text-[15px]`}>
                                {
                                    PreWhyJson.map((choice, index: number) => {
                                        return (
                                            <li
                                                key={index}
                                                className={`list-disc ml-7`}>
                                                {choice.title}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className={`text-[17px] font-black`}>
                            The <span className="font-normal underline">Veycet</span> Difference: How We Deliver Success
                        </div>

                        <ul className={`space-y-3`}>
                            {
                                WhyChooseUsJson.map((choice, index: number) => {
                                    return (
                                        <li key={index}
                                            className={`list-disc ml-6 space-y-1`}
                                        >
                                            <div className={`font-semibold text-red-500`}>
                                                {choice.title}</div>
                                            <div className={`text-sm`}>
                                                {choice.description}
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div>
                            <button className={`text-red-600 uppercase font-bold text-sm border-2 border-red-600 py-3 px-7 rounded-full hover:bg-red-700 hover:text-white cursor-pointer transition-all duration-500 ease-in-out`}>
                                Hire us now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
