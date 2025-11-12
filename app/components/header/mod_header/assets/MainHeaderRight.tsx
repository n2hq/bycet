import React, { useState } from 'react'
import { CgMenu, CgSearch, CgMenuBoxed } from 'react-icons/cg'
import MobileMenu from './MobileMenu'
import { BsSearch } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";

export type MainHeaderRightProps = {
    isOpen: boolean
    showMenu: () => void
    closeMenu: () => void
    setClickSearch?: (isClicked: boolean) => void
}

const MainHeaderRight = ({ setClickSearch, showMenu, closeMenu, isOpen }: MainHeaderRightProps) => {
    return (
        <div className='main-header-right'>
            {/* <Search setClickSearch={setClickSearch} /> */}
            <Hamburger showMenu={showMenu}
                closeMenu={closeMenu}
                isOpen={isOpen}
            />
        </div>
    )
}

export default MainHeaderRight


export const Search = ({ setClickSearch }: any) => {

    return (
        <div className='main-header-search-icon group'
            onClick={(e) => {

                setClickSearch(true)
            }}
        >
            <RiSearch2Line size={24} className=' group-hover:rotate-360,block' />
        </div>
    )
}

export const Hamburger = ({ showMenu, closeMenu, isOpen }: MainHeaderRightProps) => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpen = () => setOpenMenu(true)
    const handleClose = () => setOpenMenu(false)

    return (
        <div>
            <div className='main-header-hamburger-icon group'
                onClick={() => showMenu()}
            >
                <CgMenu size={28} className='main-header-hamburger-icon-inner ' />
            </div>

            {
                <MobileMenu openMenu={isOpen} closeNav={closeMenu} />
            }
        </div>
    )
}
