import React from 'react'
import { mainHeaderCenterMenu } from '../json/main_header_center_json'
import { Link, useLocation } from 'react-router'
import { BsThreeDotsVertical } from 'react-icons/bs';

export type MainHeaderCenterProps = {
    showMenu: () => void
    closeMenu: () => void
}

const MainHeaderCenter = ({ showMenu, closeMenu }: MainHeaderCenterProps) => {

    const location = useLocation();


    return (
        <div className='main-header-center'>
            {
                mainHeaderCenterMenu.map((menu, index: number) => {
                    return (
                        <div key={index} className={`main-header-menu-item ${location.pathname === menu.url && ' bg-blue-500 text-white'}`}>
                            <Link to={`${menu.url}`}>
                                <div className={`main-header-menu-item-link `}>
                                    {/* <div className='main-header-menu-item-link-icon'>
                                        {menu.icon}
                                    </div> */}
                                    <div>
                                        {menu.title}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })


            }

            <More showMenu={showMenu} closeMenu={closeMenu} />
        </div>
    )
}

export default MainHeaderCenter


export const More = ({ showMenu, closeMenu }: MainHeaderCenterProps) => {
    return (
        <div
            className={`bg-blue-300/40 flex place-items-center w-7 place-content-center rounded-full h-7 font-bold cursor-pointer`}
            onClick={() => showMenu()}>
            <BsThreeDotsVertical />
        </div>
    )
}