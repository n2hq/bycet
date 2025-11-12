import { BsCart, BsCloudArrowUpFill, BsDiamondFill } from "react-icons/bs";
import { CgBulb, CgSpinnerTwoAlt } from "react-icons/cg";
import { FaDev } from "react-icons/fa";
import { IoDiamond, IoSettings } from "react-icons/io5";
import { CgLock } from 'react-icons/cg'

export const CoreServicesJson = [
    {
        icon: <CgBulb />,
        title: "Customized Software",
        description: "From MVPs to complex enterprise applications, we build robust, scalable, and user-centric software tailored to your unique business processes and goals."
    },
    {
        icon: <IoDiamond />,
        title: "Machine Learning & AI",
        description: "Transform your data and processes with intelligent automation. We develop custom ML models to uncover patterns, predict outcomes, and automate complex decisions."
    },
    {
        icon: <BsCart />,
        title: "Data Analytics",
        description: "Go from raw data to actionable insights. We build dashboards and analytics pipelines that empower you to make smarter, data-driven decisions."
    },
    {
        icon: <CgLock />,
        title: "UI/UX Prototyping",
        description: "We craft intuitive and engaging user experiences that are not only beautiful but also drive user adoption and satisfaction. Our process involves research, wireframing, and interactive prototypes. "
    },
    {
        icon: <BsCloudArrowUpFill />,
        title: "DevOps & Cloud",
        description: "Accelerate your development and ensure rock-solid reliability. We architect secure, scalable cloud infrastructures and implement automated CI/CD pipelines."
    },
    {
        icon: <IoSettings />,
        title: "System Integration",
        description: "Break down data silos and create a unified tech ecosystem. We seamlessly connect your existing software, APIs, and platforms for flawless data flow and operational efficiency."
    },
]