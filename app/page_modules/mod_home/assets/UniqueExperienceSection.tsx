import React from 'react'

const UniqueExperienceSection = () => {
    return (
        <div className={`px-[15px] w-full`}>
            <div className={`max-w-[1200px] mx-auto w-full`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3`}>
                    <div className={`w-full h-full sm:w-[70%] lg:w-[90%] mx-auto relative`}>

                        <img
                            src={`https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Advice-Main-Image.png`} alt=""
                            className={`object-cover w-full h-full `}
                        />
                    </div>
                    <div className={`flex flex-col gap-y-5 place-content-center `}>
                        <div className={`text-4xl font-black w-[70%] mx-auto lg:mx-0 text-center lg:text-start`}>
                            We Create Unique Experiences
                        </div>
                        <div className={`text-center max-w-[70%] mx-auto w-full lg:max-w-full lg:text-start `}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                        </div>
                        <div className={`text-center max-w-[70%] mx-auto w-full lg:max-w-full lg:text-start `}>
                            <button className={` text-[11px] font-semibold cursor-pointer border border-blue-700 rounded-full py-4 px-12 text-blue-700 uppercase hover:bg-blue-700 hover:text-white transition-all ease-in-out duration-700`}>
                                contact us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`max-w-[1200px] mx-auto w-full mt-14 lg:mt-10 `}>
                <div className={`flex flex-col lg:flex-row lg:divide-x lg:divide-gray-300 gap-x-8 gap-y-4`}>
                    <div className={`text-[30px] font-black min-w-[250px] leading-7 tracking-tighter text-center lg:text-start`}>
                        Operational
                        Processes
                    </div>
                    <div className={`text-center lg:text-start max-w-[70%] mx-auto lg:max-w-full `}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniqueExperienceSection
