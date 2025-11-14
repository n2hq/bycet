import { BsCart, BsFillBriefcaseFill, BsPhone, BsPhoneFill } from 'react-icons/bs'
import { CgAbstract, CgGenderFemale, CgGenderMale, CgHome, CgPhone, CgShield, CgShoppingCart, CgWorkAlt } from 'react-icons/cg'
import { FaIndustry } from 'react-icons/fa'
import { IoInformation } from 'react-icons/io5'
import { RiInformation2Fill } from 'react-icons/ri'
export const mainHeaderCenterMenu = [
    {
        title: "Home",
        url: '/',
        icon: <CgHome />
    },
    {
        title: "Services",
        url: '/services',
        icon: <CgGenderMale />
    },
    {
        title: "Industries",
        url: '/industries',
        icon: <FaIndustry />
    },
    {
        title: "Consultation",
        url: '/consultation',
        icon: <CgShoppingCart />
    }
]