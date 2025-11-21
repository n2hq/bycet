import React, { useContext } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link, useLocation } from 'react-router';
import MainNavContext from '~/context/MainNavContext';

const menudata = [
    {
        title: "Services",
        url: "/services"
    },

    {
        title: "Industry",
        url: "/industry"
    },
    {
        title: "Contact",
        url: "/contact"
    },
    {
        title: "Business Index",
        url: "https://index.bycet.com/web/browse"
    },
]
const SmallMenu = () => {
    const location = useLocation();


    return (
        <div className={`hidden lg:block`}>
            <div className={`flex gap-7 place-items-center text-[13px]`}>
                {
                    menudata.map((item, index: number) => {
                        return (
                            <div
                                key={index}
                                className={`font-semibold ${location.pathname === item.url ? 'text-black' : 'text-gray-500'} `}>
                                <Link to={item.url}>
                                    <div className={`capitalize`}>
                                        {
                                            item.title
                                        }
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

                <MoreItem />
            </div>
        </div>
    )
}

export default SmallMenu


export const MoreItem = () => {
    const mainNavCtx = useContext(MainNavContext)
    return (
        <div className={`h-[35px] w-[35px] rounded-full flex place-items-center place-content-center bg-gray-100 cursor-pointer font-bold`}
            onClick={() => mainNavCtx.showMenu()}>

            <BsThreeDotsVertical />
        </div>
    )
}