import React, { useContext } from 'react'
import { CgMenu } from 'react-icons/cg'
import MobileMenu from './MobileMenu'
import MainNavContext from '~/context/MainNavContext'

const HamburgerMenu = () => {
    const mainMenuContext = useContext(MainNavContext)

    return (
        <div>
            <div className={`text-xl w-8 h-8 flex place-items-center place-content-center rounded-full hover:cursor-pointer bg-gray-100 hover:bg-gray-200`}
                onClick={() => mainMenuContext.showMenu()}
            >
                <CgMenu />
            </div>

            <MobileMenu openMenu={mainMenuContext.isOpen} closeNav={mainMenuContext.closeMenu} />
        </div>
    )
}

export default HamburgerMenu
