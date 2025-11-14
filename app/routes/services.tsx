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
import HeroAlt from "~/components/body/HeroAlt";
import { preload } from "react-dom";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Services({ loaderData }: Route.ComponentProps) {
  const bgImg = `/images/services-banner.jpg`
  preload(bgImg, { as: 'image' })

  const title = `Scalable Software Solutions for a Competitive Edge`
  const description = `We deliver the digital tools, strategic insights, and expert partnership to transform your operations and drive measurable growth.`

  return (
    <div>
      <HeroAlt
        pageTitle="Services"
        bgImg={bgImg}
        title={title}
        description={description}
        showContact={true}
      />

      <PageBarSection />


      <CoreServicesSection />

      {/* <UniqueExperienceSection /> */}

      <ContactSection />
    </div>
  )
}
