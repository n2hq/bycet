import { CgDollar, CgMediaLive } from "react-icons/cg";
import { FaCar, FaCartPlus, FaCloudSunRain, FaIndustry } from "react-icons/fa";

export const IndustriesJson = [
    {
        title: "Automotive",
        description: "We engineer the software that powers the future of mobility—from connected vehicle platforms and fleet management systems to immersive digital showrooms and EV charging networks, helping you navigate the shift towards intelligent, sustainable transportation.",
        icon: <FaCar />
    },
    {
        title: "Consumer, Retail & Leisure",
        description: "We create seamless digital experiences that captivate customers and drive growth. Our solutions include e-commerce platforms, personalized loyalty apps, smart inventory systems, and booking engines that enhance the customer journey from discovery to purchase and beyond.",
        icon: <FaCartPlus />
    },
    {
        title: "Energy & Natural Resources",
        description: "We build robust software for a smarter, more sustainable resource management. Our applications support critical operations like grid optimization, predictive maintenance for assets, remote monitoring, and ESG (Environmental, Social, and Governance) reporting, enabling efficiency and safer, greener operations.",
        icon: <FaCloudSunRain />
    },
    {
        title: "Financial Services",
        description: "We develop secure, compliant, and innovative solutions for the digital finance era. From fintech apps and payment gateways to regulatory technology (RegTech) and blockchain-based systems, we help you enhance security, improve customer experience, and launch new financial products with confidence.",
        icon: <CgDollar />
    },
    {
        title: "Manufacturing",
        description: "We drive the evolution towards Industry 4.0 with software that optimizes the entire production lifecycle. Our systems integrate IoT data, power smart factories, streamline supply chains, and enable predictive maintenance, unlocking new levels of operational efficiency and productivity.",
        icon: <FaIndustry />
    },
    {
        title: "Technology, Media & Telco",
        description: "We are the architects behind the platforms that connect and entertain the world. We help TMT companies scale their infrastructure, develop cutting-edge SaaS products, manage content ecosystems, and deploy next-generation networks to stay ahead in a hyper-competitive, fast-paced market.",
        icon: <CgMediaLive />
    },
]