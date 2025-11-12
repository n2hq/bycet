import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("services", "routes/services.tsx"),
    route("consultation", "routes/consultation.tsx"),
    route("contact", "routes/contact.tsx"),
    route("industries", "routes/industries.tsx"),
    route("about", "routes/about.tsx"),
    route("privacy", "routes/privacy.tsx"),
    route("terms", "routes/tos.tsx"),
    route("copyright", "routes/copyright.tsx"),
    route("responsible_disclosure", "routes/responsible_disclosure_page.tsx")
] satisfies RouteConfig;
