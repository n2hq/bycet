import { CgSupport } from "react-icons/cg";
import { FaCcDiscover } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiCompassDiscoverFill, RiPassExpiredLine } from "react-icons/ri";

export const HowWeWorkJson = [
    {
        step: 1,
        title: "Discovery & Strategy",
        description: "We deep-dive into your challenges and goals to define a clear roadmap and solution blueprint.",
        icon: <RiCompassDiscoverFill />
    },
    {
        step: 2,
        title: "Design & Develop",
        description: "Using agile methodologies, we build in transparent sprints, with regular updates and demos to ensure we're on track.",
        icon: <IoSettings />
    },
    {
        step: 3,
        title: "Deploy & Scale",
        description: "We handle the seamless launch and scaling of your solution on the optimal cloud infrastructure.",
        icon: <RiPassExpiredLine />
    },
    {
        step: 4,
        title: "Optimize & Support",
        description: "Our partnership continues with ongoing support, maintenance, and iterative improvements to drive long-term value.",
        icon: <CgSupport />
    },
]