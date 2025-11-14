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

export default function Privacy({ loaderData }: Route.ComponentProps) {


    return (
        <div>
            {/* <HeroAlt
                bgImg={bgImg}
                title={title}
                description={description}
            /> */}


            <PolicyInfoHeader
                title="Your Privacy, Our Principle."
                subTitle="Your Privacy is Our Commitment."
                description={`At Veycet, we build intelligent software with a foundational commitment to data security and privacy. This policy outlines how we protect your information and uphold your trust.`}
            />


            <PrivacySection />
            <ContactSection />
        </div>
    )
}
