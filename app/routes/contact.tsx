import BannerSection from "~/page_modules/mod_home/assets/BannerSection";
import type { Route } from "./+types/home";
import ShowcaseSection from "~/page_modules/mod_home/assets/ShowcaseSection";
import PageBarSection from "~/page_modules/mod_home/assets/PageBarSection";
import SummarySection from "~/page_modules/mod_home/assets/SummarySection";
import StatusSection from "~/page_modules/mod_home/assets/ContactSection";
import VerticalSpace from "~/components/content/VerticalSpace";
import UniqueExperienceSection from "~/page_modules/mod_home/assets/UniqueExperienceSection";
import ContactShowcaseSection from "~/page_modules/mod_contact/assets/ContactShowCaseSection";
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

export default function Contact({ loaderData }: Route.ComponentProps) {
  const bgImg = `/images/world-banner.jpg`
  preload(bgImg, { as: 'image' })

  const title = `Have a Challenge? Let's Solve It Together.`
  const description = `No matter the size or complexity of your project, our team is ready to provide the digital tools and expertise you need. Start the conversation today.`

  return (
    <div>
      <HeroAlt
        pageTitle="Contact us"
        bgImg={bgImg}
        title={title}
        description={description}
        showContact={true}
      />

      <PageBarSection />
      <StatusSection />
      <VerticalSpace />
    </div>
  )
}
