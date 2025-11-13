import React, { useState } from 'react'
import { Link } from 'react-router'

const PageBarSection = () => {
    const [popUp, setPopUp] = useState(false)

    const popUpConsultation = () => {
        setPopUp(true)
    }
    return (
        <div className='bg-purple-900'>
            {
                popUp && <ShowPopUp showPopUp={setPopUp} />
            }
            <div className={` min-h-[150px] py-8 md:py-0 gap-y-5 md:gap-y-0 text-center md:text-start text-white flex flex-col md:flex-row place-content-between place-items-center px-[15px] max-w-[1200px] mx-auto w-full`}>
                <div className={`text-[28px] text-blue-50 leading-tight font-semibold md:text-3xl`}>
                    Now! Get a Free Consultation for Your Business
                </div>
                <div>

                    <button
                        onClick={popUpConsultation}
                        className='bg-blue-800 text-white py-4 px-8 rounded-full text-lg font-normal cursor-pointer w-60 min-w-[220px]'>
                        Request Consultation
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PageBarSection

export type ShowPopUpProps = {
    showPopUp: (popUp: boolean) => void
}

export const ShowPopUp = ({ showPopUp }: ShowPopUpProps) => {
    return (
        <div className='bg-black/50 fixed top-0 left-0 right-0 w-full h-full flex place-items-center place-content-center z-50'>
            <div className={`w-md md:w-lg h-fit rounded-lg bg-white overflow-hidden pb-6`}>
                <div className={`w-full h-full flex flex-col place-items-start place-content-start`}>
                    <div className={`w-full px-4.5 py-3 text-lg font-semibold bg-blue-100`}>
                        Send us an email
                    </div>
                    <div className={`mt-8 w-full px-4.5 text-sm`}>
                        Click the email below to open a mail client. Alternatively, you can click the copy button to copy the email.
                    </div>
                    <div className={`mt-3 w-full px-4.5`}>
                        <Link to={`mailto:contact@voysce.com`}>
                            <div>
                                <b>Consultation:</b> help@veycet.com
                            </div>
                        </Link>
                    </div>

                    <div className={`mt-8 px-4.5 flex w-full place-content-end gap-x-1.5`}>
                        <CopyEmailButton />
                        <button className={`bg-blue-700 text-lg px-10 pt-1.5 pb-2 rounded-full text-white hover:cursor-pointer`}
                            onClick={() => showPopUp(false)}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}


export const CopyEmailButton = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = 'contact@voysce.com';

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            // Fallback
            const textArea = document.createElement('textarea');
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    return (
        <button
            onClick={handleCopyEmail}
            className={`
                px-8 py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer
                ${isCopied
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-200 text-gray-800 hover:bg-gray-300'
                }
            `}
        >
            {isCopied ? 'Copied!' : 'Copy Email'}
        </button>
    );
};
