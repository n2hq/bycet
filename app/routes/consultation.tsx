import BannerSection from "~/page_modules/mod_home/assets/BannerSection";
import type { Route } from "./+types/home";
import ShowcaseSection from "~/page_modules/mod_home/assets/ShowcaseSection";
import PageBarSection from "~/page_modules/mod_home/assets/PageBarSection";
import SummarySection from "~/page_modules/mod_home/assets/SummarySection";
import StatusSection from "~/page_modules/mod_home/assets/ContactSection";
import VerticalSpace from "~/components/content/VerticalSpace";
import UniqueExperienceSection from "~/page_modules/mod_home/assets/UniqueExperienceSection";
import OrderShowCase from "~/page_modules/mod_order/assets/OrderShowCaseSection";
import OrderShowcaseSection from "~/page_modules/mod_order/assets/OrderShowCaseSection";
import OrderServiceSection from "~/page_modules/mod_order/assets/OrderServiceSection";
import OrderSummarySection from "~/page_modules/mod_order/assets/OrderSummarySection";
import HeroAlt from "~/components/body/HeroAlt";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Consultation({ loaderData }: Route.ComponentProps) {
  const bgImg = `https://unbound.radiantthemes.com/wp-content/uploads/2018/04/banner-five.jpg?id=3113`
  const title = `Global Software & Business solutions that works.`
  const description = `No matter the size or complexity of your business, we offer digital tools, insights and expertise that keep you ahead.`

  return (
    <div>
      <HeroAlt
        pageTitle="Consultation"
        bgImg={bgImg}
        title={title}
        description={description}
        showContact={true}
      />


      <PageBarSection />
      <VerticalSpace />
      <OrderSummarySection />
      <VerticalSpace />
      <OrderServiceSection />

      <StatusSection />
      <VerticalSpace />
    </div>
  )
}
