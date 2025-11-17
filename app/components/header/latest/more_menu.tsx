import { BsBook, BsFillBriefcaseFill, BsLock } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { FaBlenderPhone, FaHome, FaIndustry, FaShoppingBag } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export const moremenu = [
    {
        title: "Home",
        url: '/',
        icon: <FaHome />
    },
    {
        title: "Services",
        url: '/services',
        icon: <IoSettings />
    },
    {
        title: "Industries",
        url: '/industries',
        icon: <FaIndustry />
    },
    {
        title: "About",
        url: '/about',
        icon: <BsFillBriefcaseFill />
    },
    {
        title: "Contact",
        url: '/contact',
        icon: <CgPhone />
    },
    {
        title: "Terms of Use",
        url: "/terms",
        icon: <FaShoppingBag />
    },
    {
        "title": "Privacy",
        "url": "/privacy",
        icon: <BsLock />
    },
    {
        "title": "Responsible Disclosure",
        "url": "/responsible_disclosure",
        icon: <FaBlenderPhone />
    },
    {
        "title": "Copyright",
        "url": "/copyright",
        icon: <BsBook />
    },

]