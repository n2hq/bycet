import React, { useState } from 'react'
import '../css/main_header.css'
import MainHeaderLogo from './MainHeaderLogo'
import MainHeaderCenter from './MainHeaderCenter'
import MainHeaderRight, { Search } from './MainHeaderRight'
import { CgClose } from 'react-icons/cg'

const MainHeader = () => {
    const [clickSearch, setClickSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const showMenu = () => setIsOpen(true)
    const closeMenu = () => setIsOpen(false)

    return (
        <div>
            <div className={`main-header-wrapper`}>
                {
                    clickSearch &&
                    <MainHeaderSearch setClickSearch={setClickSearch} />
                }
                <div className='main-header-inner'>
                    <div className='main-header-columns'>
                        <MainHeaderLogo />
                        <MainHeaderCenter
                            showMenu={showMenu}
                            closeMenu={closeMenu}
                        />
                        <MainHeaderRight
                            setClickSearch={setClickSearch}
                            showMenu={showMenu}
                            closeMenu={closeMenu}
                            isOpen={isOpen}
                        />
                    </div>
                </div>

            </div>

            <div className='h-[60px] w-full'></div>
        </div>
    )
}

export default MainHeader

export const MainHeaderSearch = ({ setClickSearch }: any) => {
    return (
        <div className='main-header-main-search-wrapper'>
            <div className='main-header-main-search-inner'>
                <div className='main-header-main-search-box'>
                    <Search setClickSearch={setClickSearch} />
                    <input
                        className='main-header-main-search-input'
                        placeholder='Type and hit enter'
                    />

                </div>
                <div className='main-header-main-search-close group'
                    onClick={() => setClickSearch(false)}
                >
                    <CgClose size={24} className='transition-all duration-500 ease-in-out group-hover:rotate-90' />
                </div>

            </div>
        </div>
    )
}
