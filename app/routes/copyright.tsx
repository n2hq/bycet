import BannerSection from "~/page_modules/mod_home/assets/BannerSection";
import type { Route } from "./+types/home";
import ShowcaseSection from "~/page_modules/mod_home/assets/ShowcaseSection";
import PageBarSection from "~/page_modules/mod_home/assets/PageBarSection";
import SummarySection from "~/page_modules/mod_home/assets/SummarySection";
import StatusSection from "~/page_modules/mod_home/assets/ContactSection";
import VerticalSpace from "~/components/content/VerticalSpace";
import UniqueExperienceSection from "~/page_modules/mod_home/assets/UniqueExperienceSection";
import ServiceShowcaseSection from "~/page_modules/mod_services/assets/ServiceShowCaseSection";
import DigitalWorldSection from "~/page_modules/mod_services/assets/DigitalWorldSection";
import CoreServicesSection from "~/page_modules/mod_home/assets/CoreServicesSection";
import HowWeWork from "~/page_modules/mod_home/assets/HowWeWork";
import WhyChooseUs from "~/page_modules/mod_home/assets/WhyChooseUs";
import IndustriesSection from "~/page_modules/mod_home/assets/IndustriesSection";
import ContactSection from "~/page_modules/mod_home/assets/ContactSection";
import IndustriesShowcaseSection from "~/page_modules/mod_industries/assets/IndustriesShowCaseSection";
import HeroAlt from "~/components/body/HeroAlt";
import PrivacyInfoSection from "~/page_modules/mod_privacy/assets/PrivacyInfoSection";
import PrivacySection from "~/page_modules/mod_privacy/assets/PrivacySection";
import CopyrightPolicy from "~/page_modules/mod_privacy/assets/CopyrightPolicy";
import CopyrightInfoSection from "~/page_modules/mod_copyright/assets/CopyrightInfoSection";
import PolicyInfoHeader from "~/components/body/PolicyInfoHeader";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export function loader({ context }: Route.LoaderArgs) {
    return { message: context.VALUE_FROM_EXPRESS };
}

export default function Copyright({ loaderData }: Route.ComponentProps) {
    const bgImg = `https://unbound.radiantthemes.com/wp-content/uploads/2018/06/business-agency-3-banner.jpg?id=7870`
    const title = `Industry-Specific Solutions, Powered by AI & Data.`
    const description = `We don't just build technology; we build your competitive advantage. Our end-to-end expertise delivers custom software and intelligent systems that solve your unique industry challenges and drive growth.`

    return (
        <div>
            {/* <HeroAlt
                bgImg={bgImg}
                title={title}
                description={description}
            /> */}

            <PolicyInfoHeader
                title="Protecting Intellectual Property, Respecting Creativity."
                subTitle="Copyright Policy"
                description={`This policy outlines the intellectual property rights for all content associated with Voysce and establishes the procedures for reporting any potential copyright infringement.`}
            />



            <CopyrightPolicy />
            <ContactSection />
        </div>
    )
}
