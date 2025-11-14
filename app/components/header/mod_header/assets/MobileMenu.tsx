import React from 'react'
import MainHeaderLogo from './MainHeaderLogo'
import { IoClose } from 'react-icons/io5'
import menudata from '../json/menu.json'
import { mainHeaderCenterMenu } from '../json/main_header_center_json'

import '../css/main_header.css'
import { CgChevronRight } from 'react-icons/cg'
import { Link, useLocation } from 'react-router'
import { moremenu } from '../json/more_menu'

export interface MobileMenuProps {
    openMenu: boolean
    closeNav: () => void
}

export type MenuType = {
    title: string,
    url: string
}

const MobileMenu = ({ openMenu, closeNav }: MobileMenuProps) => {
    const location = useLocation();

    const navOpen = openMenu ? 'translate-x-0' : 'translate-x-[-100%]'
    const bgOverlay = openMenu ? 'block' : 'hidden'



    return (
        <div className={`mobile-nav-wrapper bg-[url(https://unbound.radiantthemes.com/wp-content/uploads/2022/03/Banner-Image.png?id=8229)]`}>
            {/** overlay */}
            <div
                onClick={closeNav}
                className={`mobile-nav-overlay ${bgOverlay}`}>
            </div>


            {/** navlinks body wrapper */}
            <div className={`mobile-nav-body-wrapper ${navOpen} ${openMenu ? 'shadow-lg shadow-black/50' : ''} bg-[url(https://unbound.radiantthemes.com/wp-content/uploads/2022/03/Banner-Image.png?id=8229)]`}>

                {/** navlinks body */}
                <div className={`mobile-nav-links-body `}>

                    {/** mobile nav header with logo and close */}
                    <div className={`mobile-nav-header `}>

                        {/** logo wrapper */}
                        <div className='mobile-nav-header-logo-wrapper'>
                            <MainHeaderLogo />
                        </div>

                        <div className='mobile-nav-close-button-wrapper'>

                            <div
                                onClick={closeNav}
                                className='mobile-nav-close-button group'>
                                <IoClose size={28} className={` transition-all duration-500 ease-in-out group-hover:rotate-90`} />
                            </div>
                        </div>
                    </div>

                    <hr className={`mobile-nav-hrule`} />

                    <div className={`mobile-nav-links-wrapper text-black`}>
                        {
                            mainHeaderCenterMenu.map((menu: MenuType, index: number) => {
                                return (
                                    <div key={index}>
                                        <Link to={menu.url} onClick={() => closeNav()}>
                                            <div
                                                className={`group mobile-nav-menu-item ${location.pathname === menu.url && ' bg-blue-500 text-white'}`}
                                            >
                                                <div>
                                                    {menu.title}
                                                </div>
                                                <div>
                                                    <CgChevronRight size={20} className='mobile-menu-rotate-chevron group-hover:rotate-90' />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }

                        <div className={`border-b border-gray-100 shadow-xl  h-5`} />

                        {
                            moremenu.map((menu: MenuType, index: number) => {
                                return (
                                    <div key={index}>
                                        <Link to={menu.url} onClick={() => closeNav()}>
                                            <div
                                                className={`group mobile-nav-menu-item ${location.pathname === menu.url && ' bg-gray-300/80 text-gray-800 font-semibold'}`}
                                            >
                                                <div>
                                                    {menu.title}
                                                </div>
                                                <div>
                                                    <CgChevronRight size={20} className='mobile-menu-rotate-chevron group-hover:rotate-90' />
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={`h-10`} />

                </div>
            </div>
        </div>
    )
}

export default MobileMenu
