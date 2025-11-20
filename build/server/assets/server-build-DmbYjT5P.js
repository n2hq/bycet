import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, Link, useNavigation, useFetchers, useLocation, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, Meta, Links, ScrollRestoration, Scripts, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useRef, useEffect, useState, createContext, useContext } from "react";
import NProgress from "nprogress";
import { CgPhone, CgChevronRight, CgMenu, CgBulb, CgLock, CgSupport, CgDollar, CgMediaLive } from "react-icons/cg";
import { IoSettings, IoClose, IoBuildOutline, IoDiamond, IoCreate } from "react-icons/io5";
import { BsFillBriefcaseFill, BsLock, BsBook, BsThreeDotsVertical, BsEye, BsCart, BsCloudArrowUpFill, BsShare, BsCheck2All, BsBriefcase } from "react-icons/bs";
import { FaHome, FaIndustry, FaShoppingBag, FaBlenderPhone, FaCar, FaCartPlus, FaCloudSunRain } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { preload } from "react-dom";
import { RiCompassDiscoverFill, RiPassExpiredLine } from "react-icons/ri";
import "@react-router/dev/routes";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body2 = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body2);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body2);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const header$4 = "Main";
const body$4 = [{ "title": "Home", "url": "/" }, { "title": "Services", "url": "/services" }, { "title": "Industries", "url": "/industry" }, { "title": "Consultation", "url": "/consultation" }];
const columnOneData = {
  header: header$4,
  body: body$4
};
const header$3 = "Discover";
const body$3 = [{ "title": "About us", "url": "/about" }, { "title": "Contact us", "url": "/contact" }, { "title": "", "url": "" }, { "title": "", "url": "" }];
const columnTwoData = {
  header: header$3,
  body: body$3
};
const header$2 = "Privacy";
const body$2 = [{ "title": "Privacy", "url": "/privacy" }, { "title": "Terms of Use", "url": "/terms" }, { "title": "Responsible Disclosure", "url": "/responsible_disclosure" }, { "title": "Copyright", "url": "/copyright" }];
const columnThreeData = {
  header: header$2,
  body: body$2
};
const header$1 = "Manage & Support";
const body$1 = [{ "title": "Support: info@bycet.com", "url": "mailto:info@bycet.com" }, { "title": "Consultation: info@bycet.com", "url": "mailto:info@bycet.com" }, { "title": "General: info@bycet.com", "url": "mailto:info@veycet.com" }, { "title": "", "url": "" }];
const columnFourData = {
  header: header$1,
  body: body$1
};
const header = "Social Media";
const body = [{ "title": "Twitter", "url": "http://x.com/bycetinc" }, { "title": "Facebook", "url": "http://facebook.com/bycetinc" }, { "title": "Instagram", "url": "http://instagram.com/bycetinc" }, { "title": "Youtube", "url": "https://www.youtube.com/@bycetinc" }];
const columnFiveData = {
  header,
  body
};
const FooterColumn = ({ data: data2 }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "footer-column-menu-header", children: data2.header }),
    /* @__PURE__ */ jsx("div", { className: "footer-column-menu", children: data2.body.map((item, index) => {
      return /* @__PURE__ */ jsx("div", { className: "footer-column-menu-one", children: /* @__PURE__ */ jsx(Link, { to: item.url, children: /* @__PURE__ */ jsx("div", { className: "footer-column-menu-title", children: item.title }) }) }, index);
    }) })
  ] });
};
const horizontalLinks = [
  {
    title: "Voysce Website",
    url: "/"
  },
  {
    title: "Terms of Use",
    url: "/terms"
  },
  {
    title: "Privacy & Cookie Notice",
    url: "/privacy"
  },
  {
    title: "Responsible Disclosure Policy",
    url: "/responsible_disclosure"
  },
  {
    title: "Copyright",
    url: "/copyright"
  },
  {
    title: "Manage Cookies",
    url: "/privacy#cookies"
  }
];
const FooterHorizontalLinks = () => {
  return /* @__PURE__ */ jsx("div", { className: "footer-horizontal-links-wrapper", children: horizontalLinks.map((link, index) => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: "footer-horizontal-link",
        children: /* @__PURE__ */ jsx(Link, { to: link.url, children: link.title })
      },
      index
    );
  }) });
};
const FooterLogo = () => {
  return /* @__PURE__ */ jsxs("div", { className: "footer-logo", children: [
    /* @__PURE__ */ jsx("b", { children: /* @__PURE__ */ jsx("i", { children: "b" }) }),
    /* @__PURE__ */ jsx("span", { className: `font-extralight`, children: "ycet" }),
    "."
  ] });
};
const FooterColumnAlt = ({ data: data2 }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "footer-column-menu-header", children: data2.header }),
    /* @__PURE__ */ jsx("div", { className: "footer-column-menu", children: data2.body.map((item, index) => {
      return /* @__PURE__ */ jsx("div", { className: "footer-column-menu-one", children: /* @__PURE__ */ jsx(Link, { to: item.url, target: "_blank", children: /* @__PURE__ */ jsx("div", { className: "footer-column-menu-title", children: item.title }) }) }, index);
    }) })
  ] });
};
const MainFooter = () => {
  return /* @__PURE__ */ jsxs("div", { className: "footer-column-wrapper", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-columns", children: [
      /* @__PURE__ */ jsx("section", { className: "footer-column", children: /* @__PURE__ */ jsx(FooterColumn, { data: columnOneData }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(FooterColumn, { data: columnTwoData }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(FooterColumn, { data: columnThreeData }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(FooterColumn, { data: columnFourData }) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(FooterColumnAlt, { data: columnFiveData }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "footer-row", children: /* @__PURE__ */ jsx("div", { className: "footer-rule" }) }),
    /* @__PURE__ */ jsx("div", { className: "footer-row", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(FooterLogo, {}) }),
      /* @__PURE__ */ jsx("div", { className: "footer-horizontal-links", children: /* @__PURE__ */ jsx(FooterHorizontalLinks, {}) })
    ] }) })
  ] });
};
function useNProgress(delay = 300) {
  const navigation = useNavigation();
  const fetchers = useFetchers();
  const timerRef = useRef(null);
  const startedRef = useRef(false);
  useEffect(() => {
    NProgress.configure({
      showSpinner: false
      // You can customize other options here
    });
  }, []);
  useEffect(() => {
    const fetchersIdle = fetchers.every((f) => f.state === "idle");
    if (navigation.state !== "idle" || !fetchersIdle) {
      if (!timerRef.current) {
        timerRef.current = setTimeout(() => {
          NProgress.start();
          startedRef.current = true;
        }, delay);
      }
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (startedRef.current) {
        NProgress.done();
        startedRef.current = false;
      }
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [navigation.state, fetchers, delay]);
  useEffect(() => {
    return () => {
      NProgress.done();
    };
  }, []);
}
const MainLogo = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("div", { className: `flex place-items-center w-fit text-[24px] font-extrabold font-sans place-content-between`, children: /* @__PURE__ */ jsxs("div", { className: `text-black first-letter:`, children: [
    /* @__PURE__ */ jsx("i", { className: " ", children: "b" }),
    /* @__PURE__ */ jsx("span", { className: "font-bold relative -left-1px ", children: "ycet" }),
    "."
  ] }) }) }) });
};
const SigninButton = () => {
  return /* @__PURE__ */ jsx("div", { className: `hidden sm:block `, children: /* @__PURE__ */ jsx(Link, { className: ``, to: `https://index.veycet.com/web/signin`, children: /* @__PURE__ */ jsx("button", { className: ` w-[70px] h-[35px] border rounded-full text-sm border-gray-300 cursor-pointer hover:border-gray-800 hover:shadow-4xl`, children: "Sign in" }) }) });
};
const moremenu = [
  {
    title: "Home",
    url: "/",
    icon: /* @__PURE__ */ jsx(FaHome, {})
  },
  {
    title: "Services",
    url: "/services",
    icon: /* @__PURE__ */ jsx(IoSettings, {})
  },
  {
    title: "Industries",
    url: "/industries",
    icon: /* @__PURE__ */ jsx(FaIndustry, {})
  },
  {
    title: "About",
    url: "/about",
    icon: /* @__PURE__ */ jsx(BsFillBriefcaseFill, {})
  },
  {
    title: "Contact",
    url: "/contact",
    icon: /* @__PURE__ */ jsx(CgPhone, {})
  },
  {
    title: "Terms of Use",
    url: "/terms",
    icon: /* @__PURE__ */ jsx(FaShoppingBag, {})
  },
  {
    "title": "Privacy",
    "url": "/privacy",
    icon: /* @__PURE__ */ jsx(BsLock, {})
  },
  {
    "title": "Responsible Disclosure",
    "url": "/responsible_disclosure",
    icon: /* @__PURE__ */ jsx(FaBlenderPhone, {})
  },
  {
    "title": "Copyright",
    "url": "/copyright",
    icon: /* @__PURE__ */ jsx(BsBook, {})
  }
];
const MobileMenu = ({ openMenu, closeNav }) => {
  useLocation();
  const navOpen = openMenu ? "translate-x-0" : "translate-x-[-100%]";
  const bgOverlay = openMenu ? "block" : "hidden";
  return /* @__PURE__ */ jsxs("div", { className: ``, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: closeNav,
        className: `transform fixed transition-all duration-500 inset-0 z-4000 bg-black opacity-20 w-full ${bgOverlay}`
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `transform transition-all duration-500 delay-0 fixed justify-start h-full w-full md:w-[300px] bg-white z-4001 overflow-y-auto top-0 left-0 text-black ${navOpen} ${openMenu ? "shadow-lg shadow-black/50" : ""} bg-[url(https://unbound.radiantthemes.com/wp-content/uploads/2022/03/Banner-Image.png?id=8229)]`, children: /* @__PURE__ */ jsxs("div", { className: `mobile-nav-links-body `, children: [
      /* @__PURE__ */ jsxs("div", { className: `px-4 md:pl-12 flex place-content-between h-[60px] place-items-center `, children: [
        /* @__PURE__ */ jsx("div", { className: "h-full flex justify-center items-center", children: /* @__PURE__ */ jsx(MainLogo, {}) }),
        /* @__PURE__ */ jsx("div", { className: "h-full flex justify-center items-center cursor-pointer", children: /* @__PURE__ */ jsx(
          "div",
          {
            onClick: closeNav,
            className: "w-[30px] h-[30px] bg-gray-200 rounded-full flex justify-center items-center hover:bg-blue-600 hover:text-white border group",
            children: /* @__PURE__ */ jsx(IoClose, { size: 28, className: ` transition-all duration-500 ease-in-out group-hover:rotate-90` })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: `mobile-nav-hrule` }),
      /* @__PURE__ */ jsx("div", { className: `flex flex-col mt-5`, children: /* @__PURE__ */ jsx(
        VerticalMenu,
        {
          menuData: moremenu,
          closeNav
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: `h-10` })
    ] }) })
  ] });
};
const VerticalMenu = ({ menuData, closeNav }) => {
  const location = useLocation();
  return /* @__PURE__ */ jsx("div", { children: menuData.map((menu, index) => {
    menu.icon;
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { to: menu.url, onClick: () => closeNav(), children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `group text-[15px] py-2 px-4 rounded-none hover:bg-gray-200 hover:cursor-pointer flex place-items-center place-content-between w-full hover:text-gray-500 ${location.pathname === menu.url && " bg-gray-200 text-black"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: ` flex place-items-center gap-10 py-1`, children: [
            /* @__PURE__ */ jsx("div", { className: `w-[22px] h-5 flex place-items-center place-content-center  text-[20px]`, children: menu.icon }),
            /* @__PURE__ */ jsx("div", { className: `text-[13px]`, children: menu.title })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CgChevronRight, { size: 20, className: "transition-all delay-0 duration-500 ease-in-out group-hover:rotate-90" }) })
        ]
      }
    ) }) }, index);
  }) });
};
const MainNavContext = createContext(null);
const MainNavProvider = ({ children }) => {
  const [clickSearch, setClickSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const data2 = {
    isOpen,
    showMenu,
    closeMenu
  };
  return /* @__PURE__ */ jsx(MainNavContext.Provider, { value: data2, children });
};
const HamburgerMenu = () => {
  const mainMenuContext = useContext(MainNavContext);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `text-xl w-8 h-8 flex place-items-center place-content-center rounded-full hover:cursor-pointer bg-gray-100 hover:bg-gray-200`,
        onClick: () => mainMenuContext.showMenu(),
        children: /* @__PURE__ */ jsx(CgMenu, {})
      }
    ),
    /* @__PURE__ */ jsx(MobileMenu, { openMenu: mainMenuContext.isOpen, closeNav: mainMenuContext.closeMenu })
  ] });
};
const MainSearch = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("form", { action: "https://index.veycet.com/web/browse", className: `bg-gray-100 rounded-full h-[34px] flex place-items-center pl-5 gap-2 max-w-[50%] grow group hover:shadow hover:bg-white`, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        className: `w-full bg-transparent outline-none text-sm`,
        placeholder: "Search for Businesses..."
      }
    ),
    /* @__PURE__ */ jsx("button", { className: `h-full bg-gray-500 min-w-[70px] w-[70px] rounded-full text-white flex place-items-center place-content-center text-xl group-hover:bg-gray-700 group-hover:cursor-pointer`, children: /* @__PURE__ */ jsx(LuSearch, {}) })
  ] }) });
};
const menudata = [
  {
    title: "Services",
    url: "/services"
  },
  {
    title: "Industry",
    url: "/industry"
  },
  {
    title: "Contact",
    url: "/contact"
  },
  {
    title: "Business Index",
    url: "https://index.veycet.com/web/browse"
  }
];
const SmallMenu = () => {
  const location = useLocation();
  return /* @__PURE__ */ jsx("div", { className: `hidden lg:block`, children: /* @__PURE__ */ jsxs("div", { className: `flex gap-7 place-items-center text-[13px]`, children: [
    menudata.map((item, index) => {
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: `font-semibold ${location.pathname === item.url ? "text-black" : "text-gray-500"} `,
          children: /* @__PURE__ */ jsx(Link, { to: item.url, children: /* @__PURE__ */ jsx("div", { className: `capitalize`, children: item.title }) })
        },
        index
      );
    }),
    /* @__PURE__ */ jsx(MoreItem, {})
  ] }) });
};
const MoreItem = () => {
  const mainNavCtx = useContext(MainNavContext);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `h-[35px] w-[35px] rounded-full flex place-items-center place-content-center bg-gray-100 cursor-pointer font-bold`,
      onClick: () => mainNavCtx.showMenu(),
      children: /* @__PURE__ */ jsx(BsThreeDotsVertical, {})
    }
  );
};
function useScrollThreshold(options = {}) {
  const { threshold = 0, delay = 150 } = options;
  const [isOverThreshold, setIsOverThreshold] = useState(false);
  const scrollTimeout = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const crossedThreshold = currentScrollY > threshold;
      setIsOverThreshold(crossedThreshold);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
      }, delay);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [threshold, delay]);
  return isOverThreshold;
}
const MainNav = () => {
  const isOverThreshold = useScrollThreshold({ delay: 100 });
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(MainNavProvider, { children: [
    /* @__PURE__ */ jsx("div", { className: `w-full h-[60px] border-b border-b-gray-100 fixed left-0 top-0 right-0 z-50 bg-white ${isOverThreshold && " shadow-lg"}`, children: /* @__PURE__ */ jsxs("div", { className: `max-w-[98%] h-full mx-auto w-full flex place-items-center place-content-between gap-5 relative`, children: [
      /* @__PURE__ */ jsx(HamburgerMenu, {}),
      /* @__PURE__ */ jsx(MainLogo, {}),
      /* @__PURE__ */ jsx(MainSearch, {}),
      /* @__PURE__ */ jsx(SmallMenu, {}),
      /* @__PURE__ */ jsx(SigninButton, {})
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: `h-[60px]` })
  ] }) });
};
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  useNProgress();
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(MainNav, {}), children, /* @__PURE__ */ jsx(MainFooter, {}), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const ActionButton = ({ children }) => {
  return /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx("button", { className: `w-[200px] cursor-pointer bg-blue-800 py-3 rounded-full text-lg text-white`, children }) });
};
const config = {
  VITE_SITE: "Bycet"
};
const ShowcaseSection = () => {
  const bgUrl = `/images/world-banner.jpg`;
  preload(bgUrl, { as: "image" });
  const videoUrl = `/images/vids/51b5097e-34d3736d.mp4`;
  preload(videoUrl, { as: `video` });
  const [bg, setBg] = useState(bgUrl);
  const [bgCss, setBgCss] = useState(`bg-[url(${bg})]`);
  return /* @__PURE__ */ jsxs("div", { className: `w-full h-[600px] relative`, children: [
    /* @__PURE__ */ jsx("div", { className: `w-full h-full relative`, children: /* @__PURE__ */ jsxs(
      "video",
      {
        className: "w-full h-full object-cover shadow-lg",
        poster: bgUrl,
        controls: false,
        autoPlay: true,
        muted: true,
        playsInline: true,
        children: [
          /* @__PURE__ */ jsx("source", { src: videoUrl, type: "video/mp4" }),
          "Your browser does not support the video tag."
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: `w-full h-full bg-black/40 absolute top-0 left-0 right-0 px-[15px]`, children: /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] w-full h-full mx-auto`, children: /* @__PURE__ */ jsxs("div", { className: `max-w-full md:max-w-[80%] w-full mx-auto h-full flex flex-col place-content-center text-white gap-y-6`, children: [
      /* @__PURE__ */ jsx("div", { className: `text-3xl font-extralight`, children: "We Build your Future, Powered by AI & Data." }),
      /* @__PURE__ */ jsxs("div", { className: `md:w-[80%]`, children: [
        config.VITE_SITE,
        " delivers end-to-end technology outsourcing—from custom software and AI to cloud infrastructure—helping innovative businesses scale, integrate, and dominate."
      ] }),
      /* @__PURE__ */ jsx(ActionButton, { children: "Start Your Project" })
    ] }) }) })
  ] });
};
const PageBarSection = () => {
  const [popUp, setPopUp] = useState(false);
  const popUpConsultation = () => {
    setPopUp(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-purple-900", children: [
    popUp && /* @__PURE__ */ jsx(ShowPopUp, { showPopUp: setPopUp }),
    /* @__PURE__ */ jsxs("div", { className: ` h-auto py-8 gap-y-5 md:gap-y-0 text-center md:text-start text-white flex flex-col md:flex-row place-content-between place-items-center px-[15px] max-w-[1200px] mx-auto w-full`, children: [
      /* @__PURE__ */ jsx("div", { className: `text-[28px] text-blue-50 leading-tight font-semibold md:text-3xl`, children: "Get a Free Consultation for Your Business" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: popUpConsultation,
          className: "bg-blue-800 text-white py-4 px-8 rounded-full text-lg font-normal cursor-pointer w-60 min-w-[220px]",
          children: "Request Consultation"
        }
      ) })
    ] })
  ] });
};
const ShowPopUp = ({ showPopUp }) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-black/50 fixed top-0 left-0 right-0 w-full h-full flex place-items-center place-content-center z-50 text-black", children: /* @__PURE__ */ jsx("div", { className: `w-[320px] mx-auto md:w-lg h-fit rounded-lg bg-white overflow-hidden pb-6`, children: /* @__PURE__ */ jsxs("div", { className: `w-full h-full flex flex-col place-items-start place-content-start`, children: [
    /* @__PURE__ */ jsx("div", { className: `w-full px-4.5 py-3 text-lg font-semibold bg-blue-100`, children: "Send us an email" }),
    /* @__PURE__ */ jsx("div", { className: `mt-8 w-full px-4.5 text-sm`, children: "Click the email below to open a mail client. Alternatively, you can click the copy button to copy the email." }),
    /* @__PURE__ */ jsx("div", { className: `mt-3 w-full px-4.5`, children: /* @__PURE__ */ jsx(Link, { to: `mailto:contact@voysce.com`, children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("b", { children: "Consultation:" }),
      " info@bycet.com"
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: `mt-8 px-4.5 flex w-full place-content-end gap-x-1.5`, children: [
      /* @__PURE__ */ jsx(CopyEmailButton, {}),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `bg-blue-700 text-lg pt-1.5 pb-2 rounded-full text-white hover:cursor-pointer w-[100px]`,
          onClick: () => showPopUp(false),
          children: "Done"
        }
      )
    ] })
  ] }) }) });
};
const CopyEmailButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "contact@voysce.com";
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2e3);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2e3);
    }
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleCopyEmail,
      className: `
                w-[100px] py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer
                ${isCopied ? "bg-green-500 text-white" : "bg-blue-200 text-gray-800 hover:bg-gray-300"}
            `,
      children: isCopied ? "Copied!" : "Copy Email"
    }
  );
};
const SummaryJson = [
  {
    title: "Vision Definition",
    description: "We conduct a comprehensive audit of your current systems and processes to identify optimization opportunities and define a clear transformation strategy.",
    icon: /* @__PURE__ */ jsx(BsEye, {})
  },
  {
    title: "Build & Iterate",
    description: "Using agile methodologies, we develop your solution in iterative cycles, allowing for continuous refinement and ensuring we deliver maximum business value.",
    icon: /* @__PURE__ */ jsx(IoBuildOutline, {})
  },
  {
    title: "Deploy & Scale",
    description: "We ensure successful implementation with ongoing monitoring, support, and optimization services to help you adapt and grow in a dynamic market.",
    icon: /* @__PURE__ */ jsx(IoSettings, {})
  }
];
const SummarySection = () => {
  return /* @__PURE__ */ jsxs("div", { className: `w-full px-[15px] py-0`, children: [
    /* @__PURE__ */ jsxs("div", { className: `max-w-[1200px] w-full mx-auto flex flex-col gap-y-5`, children: [
      /* @__PURE__ */ jsx("div", { className: `text-center text-3xl font-black tracking-normal text-purple-900`, children: "Your Partner in Digital Transformation" }),
      /* @__PURE__ */ jsxs("div", { className: `text-center text-[19px] md:mx-40`, children: [
        "At ",
        config.VITE_SITE,
        ", we understand that technology is not a one-size-fits-all solution. We are a dedicated team of engineers, data scientists, and DevOps specialists who partner with you to build, integrate, and optimize the custom technology solutions your business needs to thrive in a competitive landscape. We don't just write code; we solve complex problems and deliver measurable results."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 mt-12 gap-16`, children: SummaryJson.map((summary, index) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex flex-col grid-cols-3 gap-y-5`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `flex place-content-center text-5xl text-red-700`, children: summary.icon }),
            /* @__PURE__ */ jsx("div", { className: `flex place-content-center text-xl font-semibold`, children: summary.title }),
            /* @__PURE__ */ jsx("div", { className: `text-center text-[15px] max-w-[70%] mx-auto w-full`, children: summary.description })
          ]
        },
        index
      );
    }) })
  ] });
};
const data = [
  {
    img: "/images/Clarifications.png",
    topPhrase: "Get your",
    noun: "Clarifications",
    description: "Get your enquiries answered and clarified in less than 30 minutes."
  },
  {
    img: "/images/Support.png",
    topPhrase: "Legendary",
    noun: "Support",
    description: "Give us a call at: +2347048048394"
  },
  {
    img: "/images/Package.png",
    topPhrase: "24x7",
    noun: "Email Support",
    description: "Contact support at: info@bycet.com"
  }
];
const ContactSection = () => {
  let cnt = 0;
  return /* @__PURE__ */ jsxs("div", { className: `px-[15px] w-full pt-20 pb-25 space-y-20 bg-white text-black`, children: [
    /* @__PURE__ */ jsxs("div", { className: `max-w-[1200px] mx-auto w-full flex flex-col place-items-center place-content-center relative`, children: [
      /* @__PURE__ */ jsx("div", { className: `font-black text-4xl bg-white px-5 absolute z-2`, children: "Our Contact" }),
      /* @__PURE__ */ jsx("div", { className: `border-b border-b-gray-200 w-full absolute top-[50%] z-0` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] mx-auto w-[90%] sm:w-[50%] lg:w-full grid grid-cols-1 lg:grid-cols-3 gap-x-0`, children: data.map((data2, index) => {
      cnt = cnt + 1;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex flex-col place-items-center ${cnt % 2 === 0 && "bg-blue-50"} pt-10 pb-15 `,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `opacity-50`,
                children: /* @__PURE__ */ jsx("img", { src: data2.img, alt: "" })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: `text-2xl font-light`, children: data2.topPhrase }),
            /* @__PURE__ */ jsx("div", { className: `text-4xl font-black`, children: data2.noun }),
            /* @__PURE__ */ jsx("div", { className: `text-center text-[15px] max-w-[70%] mx-auto w-full mt-2 pb-2.5`, children: data2.description })
          ]
        },
        index
      );
    }) })
  ] });
};
const VerticalSpace = () => {
  return /* @__PURE__ */ jsx("div", { className: " h-32" });
};
const CoreServicesJson = [
  {
    icon: /* @__PURE__ */ jsx(CgBulb, {}),
    title: "Customized Software",
    description: "From MVPs to complex enterprise applications, we build robust, scalable, and user-centric software tailored to your unique business processes and goals."
  },
  {
    icon: /* @__PURE__ */ jsx(IoDiamond, {}),
    title: "Machine Learning & AI",
    description: "Transform your data and processes with intelligent automation. We develop custom ML models to uncover patterns, predict outcomes, and automate complex decisions."
  },
  {
    icon: /* @__PURE__ */ jsx(BsCart, {}),
    title: "Data Analytics",
    description: "Go from raw data to actionable insights. We build dashboards and analytics pipelines that empower you to make smarter, data-driven decisions."
  },
  {
    icon: /* @__PURE__ */ jsx(CgLock, {}),
    title: "UI/UX Prototyping",
    description: "We craft intuitive and engaging user experiences that are not only beautiful but also drive user adoption and satisfaction. Our process involves research, wireframing, and interactive prototypes. "
  },
  {
    icon: /* @__PURE__ */ jsx(BsCloudArrowUpFill, {}),
    title: "DevOps & Cloud",
    description: "Accelerate your development and ensure rock-solid reliability. We architect secure, scalable cloud infrastructures and implement automated CI/CD pipelines."
  },
  {
    icon: /* @__PURE__ */ jsx(IoSettings, {}),
    title: "System Integration",
    description: "Break down data silos and create a unified tech ecosystem. We seamlessly connect your existing software, APIs, and platforms for flawless data flow and operational efficiency."
  }
];
const CoreServicesSection = () => {
  return /* @__PURE__ */ jsx("div", { className: `w-full px-[15px] bg-blue-50 py-30`, children: /* @__PURE__ */ jsxs("div", { className: `max-w-[1200px] mx-auto w-full flex flex-col gap-y-9`, children: [
    /* @__PURE__ */ jsx("div", { className: `text-sm text-center uppercase`, children: "Get ready to start your exciting journey" }),
    /* @__PURE__ */ jsx("div", { className: `text-4xl text-center font-black`, children: "Our Technology Expertise" }),
    /* @__PURE__ */ jsx("div", { className: `text-sm text-center text-[19px] text-gray-500`, children: "We offer a comprehensive suite of outsourcing services designed to work together seamlessly. In today's fast-paced digital landscape, you need a strategic technology partner. Bycet offers an integrated suite of services designed to cover every stage of your digital journey. From the initial spark of an idea to leveraging advanced intelligence, we provide the end-to-end expertise to build, scale, and transform your business." }),
    /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] mx-auto w-full`, children: /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 lg:grid-cols-3 gap-9`, children: CoreServicesJson.map((digital, index) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex flex-col place-items-center gap-y-3 max-w-[70%] mx-auto`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `text-5xl text-cyan-500`, children: digital.icon }),
            /* @__PURE__ */ jsx("div", { className: `font-semibold text-lg`, children: digital.title }),
            /* @__PURE__ */ jsx("div", { className: `text-center max-w-[90%] mx-auto text-sm`, children: digital.description })
          ]
        },
        index
      );
    }) }) })
  ] }) });
};
const HowWeWorkJson = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "We deep-dive into your challenges and goals to define a clear roadmap and solution blueprint.",
    icon: /* @__PURE__ */ jsx(RiCompassDiscoverFill, {})
  },
  {
    step: 2,
    title: "Design & Develop",
    description: "Using agile methodologies, we build in transparent sprints, with regular updates and demos to ensure we're on track.",
    icon: /* @__PURE__ */ jsx(IoSettings, {})
  },
  {
    step: 3,
    title: "Deploy & Scale",
    description: "We handle the seamless launch and scaling of your solution on the optimal cloud infrastructure.",
    icon: /* @__PURE__ */ jsx(RiPassExpiredLine, {})
  },
  {
    step: 4,
    title: "Optimize & Support",
    description: "Our partnership continues with ongoing support, maintenance, and iterative improvements to drive long-term value.",
    icon: /* @__PURE__ */ jsx(CgSupport, {})
  }
];
const HowWeWork = () => {
  return /* @__PURE__ */ jsxs("div", { className: `w-full px-[15px] py-22 bg-white text-black`, children: [
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col mb-10`, children: [
      /* @__PURE__ */ jsx("div", { className: `text-center text-4xl font-black  md:max-w-[60%] mx-auto w-full flex place-content-center mb-5`, children: "Our Work Process" }),
      /* @__PURE__ */ jsx("div", { className: `text-center text-lg font-black md:max-w-[70%] mx-auto w-full mb-4`, children: "A Partnership Built on Transparency, Agility and Trust" }),
      /* @__PURE__ */ jsx("div", { className: `text-center text-sm md:max-w-[70%] mx-auto w-full text-[15px]`, children: "We believe a successful project is rooted in more than just tasks and deadlines—it's a collaborative partnership. Our process is designed to be transparent and adaptive, ensuring we not only meet your expectations but exceed them." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] mx-auto w-full`, children: /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5`, children: HowWeWorkJson.map((process, index) => {
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `border border-gray-200 py-16 px-4 flex flex-col place-items-center space-y-2`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `text-cyan-500 text-5xl`, children: process.icon }),
            /* @__PURE__ */ jsx("div", { className: `text-lg font-bold`, children: process.title }),
            /* @__PURE__ */ jsx("div", { className: `text-center`, children: process.description })
          ]
        },
        index
      );
    }) }) })
  ] });
};
const WhyChooseUsJson = [
  {
    title: "Full-Cycle Expertise",
    description: "From initial idea and data strategy to development, deployment, and ongoing optimization—we handle it all."
  },
  {
    title: "Agile & Transparent",
    description: "We work in sprints with transparent communication, using tools like Jira and Slack to keep you in the loop."
  },
  {
    title: "Scalable & Secure",
    description: "We build with best practices in security and scalability, ensuring your solution grows with your business."
  },
  {
    title: " Dedicated Teams",
    description: "You work directly with a dedicated project team that becomes an extension of your own."
  }
];
const PreWhyJson = [
  {
    title: "Accelerate Your Time-to-Market"
  },
  {
    title: "Streamline Operations & Reduce Costs"
  },
  {
    title: "Enhance Customer Engagement & Satisfaction"
  },
  {
    title: "Unlock New Revenue Streams"
  },
  {
    title: "Make Data-Driven Decisions"
  }
];
const WhyChooseUs = () => {
  const bgimg = `https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Investment-image01.jpg?id=3052`;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: `mx-auto w-full bg-blue-50`, children: /* @__PURE__ */ jsxs("div", { className: `grid grid-cols-1 md:grid-cols-2`, children: [
    /* @__PURE__ */ jsx("div", { className: `h-full w-full relative`, children: /* @__PURE__ */ jsxs("div", { className: `relative h-full w-full`, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: `object-cover w-full h-full z-2`,
          src: bgimg,
          alt: ""
        }
      ),
      /* @__PURE__ */ jsx("div", { className: `absolute bottom-0 right-0 z-3 bg-red-500/50 text-white w-full md:w-[60%] h-[50%] md:h-[30%] `, children: /* @__PURE__ */ jsx("div", { className: `w-full h-full flex flex-col place-content-center`, children: /* @__PURE__ */ jsxs("div", { className: `space-y-2 w-[80%] mx-auto`, children: [
        /* @__PURE__ */ jsx("div", { children: "Streamline Operations, Amplify Results" }),
        /* @__PURE__ */ jsx("div", { className: `text-2xl md:text-3xl font-black`, children: "Automate complex workflows to reduce costs & eliminate errors" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: ` py-16 max-w-[80%] md:max-w-[70%] mx-auto w-full flex text-black flex-col place-content-center gap-y-8`, children: [
      /* @__PURE__ */ jsxs("div", { className: `text-4xl font-black tracking-tighter flex gap-x-3`, children: [
        "Why Choose ",
        /* @__PURE__ */ jsxs("span", { className: "font-extralight tracking-normal", children: [
          /* @__PURE__ */ jsx("i", { className: "font-black", children: "B" }),
          "ycet",
          /* @__PURE__ */ jsx("b", { className: "font-black", children: "?" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `text-lg font-bold`, children: "We Help You Transform Your Vision into Market-Ready Reality" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: `mb-2`, children: "We go beyond just codes. We partner with you to solve complex challenges, drive growth, and create a sustainable competitive advantage through technology." }),
        /* @__PURE__ */ jsx("ul", { className: `space-y-2 text-[15px]`, children: PreWhyJson.map((choice, index2) => {
          return /* @__PURE__ */ jsx(
            "li",
            {
              className: `list-disc ml-7`,
              children: choice.title
            },
            index2
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `text-[17px] font-black`, children: [
        "The ",
        /* @__PURE__ */ jsx("span", { className: "font-normal underline", children: config.VITE_SITE }),
        " Difference: How We Deliver Success"
      ] }),
      /* @__PURE__ */ jsx("ul", { className: `space-y-3`, children: WhyChooseUsJson.map((choice, index2) => {
        return /* @__PURE__ */ jsxs(
          "li",
          {
            className: `list-disc ml-6 space-y-1`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `font-semibold text-red-500`, children: choice.title }),
              /* @__PURE__ */ jsx("div", { className: `text-sm`, children: choice.description })
            ]
          },
          index2
        );
      }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx("button", { className: `text-red-600 uppercase font-bold text-sm border-2 border-red-600 py-3 px-7 rounded-full hover:bg-red-700 hover:text-white cursor-pointer transition-all duration-500 ease-in-out`, children: "Hire us now" }) }) })
    ] })
  ] }) }) });
};
const IndustriesJson = [
  {
    title: "Automotive",
    description: "We engineer the software that powers the future of mobility—from connected vehicle platforms and fleet management systems to immersive digital showrooms and EV charging networks, helping you navigate the shift towards intelligent, sustainable transportation.",
    icon: /* @__PURE__ */ jsx(FaCar, {})
  },
  {
    title: "Consumer, Retail & Leisure",
    description: "We create seamless digital experiences that captivate customers and drive growth. Our solutions include e-commerce platforms, personalized loyalty apps, smart inventory systems, and booking engines that enhance the customer journey from discovery to purchase and beyond.",
    icon: /* @__PURE__ */ jsx(FaCartPlus, {})
  },
  {
    title: "Energy & Natural Resources",
    description: "We build robust software for a smarter, more sustainable resource management. Our applications support critical operations like grid optimization, predictive maintenance for assets, remote monitoring, and ESG (Environmental, Social, and Governance) reporting, enabling efficiency and safer, greener operations.",
    icon: /* @__PURE__ */ jsx(FaCloudSunRain, {})
  },
  {
    title: "Financial Services",
    description: "We develop secure, compliant, and innovative solutions for the digital finance era. From fintech apps and payment gateways to regulatory technology (RegTech) and blockchain-based systems, we help you enhance security, improve customer experience, and launch new financial products with confidence.",
    icon: /* @__PURE__ */ jsx(CgDollar, {})
  },
  {
    title: "Manufacturing",
    description: "We drive the evolution towards Industry 4.0 with software that optimizes the entire production lifecycle. Our systems integrate IoT data, power smart factories, streamline supply chains, and enable predictive maintenance, unlocking new levels of operational efficiency and productivity.",
    icon: /* @__PURE__ */ jsx(FaIndustry, {})
  },
  {
    title: "Technology, Media & Telco",
    description: "We are the architects behind the platforms that connect and entertain the world. We help TMT companies scale their infrastructure, develop cutting-edge SaaS products, manage content ecosystems, and deploy next-generation networks to stay ahead in a hyper-competitive, fast-paced market.",
    icon: /* @__PURE__ */ jsx(CgMediaLive, {})
  }
];
const IndustriesSection = () => {
  return /* @__PURE__ */ jsx("div", { className: `w-full px-[15px] bg-cyan-50 py-30 border-b border-gray-200 text-black`, children: /* @__PURE__ */ jsxs("div", { className: `max-w-[1200px] mx-auto w-full flex flex-col gap-y-6`, children: [
    /* @__PURE__ */ jsx("div", { className: `text-sm text-center uppercase`, children: "Shape the Future of Your Industry" }),
    /* @__PURE__ */ jsx("div", { className: `text-4xl text-center font-black`, children: "Industries we serve" }),
    /* @__PURE__ */ jsx("div", { className: `text-sm text-center text-[19px] text-gray-500 md:w-[80%] mx-auto`, children: "We leverage our deep technical and design expertise to deliver tailored solutions that address the unique challenges and drive innovation within your sector." }),
    /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] mx-auto w-full`, children: /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`, children: IndustriesJson.map((industry, index) => {
      return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: `border border-gray-300 px-6 pt-7 pb-9 flex flex-col gap-y-3 h-full shadow-lg shadow-gray-200 bg-white text-base rounded-lg`, children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: `border border-gray-500 rounded-full w-10 h-10 flex place-items-center place-content-center text-2xl text-blue-600/50`, children: industry.icon }) }),
        /* @__PURE__ */ jsxs("div", { className: ` h-full flex flex-col gap-y-4`, children: [
          /* @__PURE__ */ jsx("div", { className: `font-semibold`, children: industry.title }),
          /* @__PURE__ */ jsx("div", { className: `border-b border-gray-500` }),
          /* @__PURE__ */ jsx("div", { className: `text-base text-[13px] leading-[1.5em] `, children: industry.description })
        ] })
      ] }) }, index);
    }) }) })
  ] }) });
};
function meta$8({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
function loader$8({
  context
}) {
  return {
    message: context.VALUE_FROM_EXPRESS
  };
}
const home = UNSAFE_withComponentProps(function Home({
  loaderData
}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(ShowcaseSection, {}), /* @__PURE__ */ jsx(PageBarSection, {}), /* @__PURE__ */ jsx(VerticalSpace, {}), /* @__PURE__ */ jsx(SummarySection, {}), /* @__PURE__ */ jsx(VerticalSpace, {}), /* @__PURE__ */ jsx(CoreServicesSection, {}), /* @__PURE__ */ jsx(HowWeWork, {}), /* @__PURE__ */ jsx(WhyChooseUs, {}), /* @__PURE__ */ jsx(IndustriesSection, {}), /* @__PURE__ */ jsx(ContactSection, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  loader: loader$8,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
const HeroAlt = ({ pageTitle = "", bgImg, title, description, showContact = false }) => {
  const bgUrl = `/images/world-banner.jpg`;
  const [bg, setBg] = useState(bgImg ?? bgUrl);
  const [bgCss, setBgCss] = useState(`bg-[url(${bg})]`);
  return /* @__PURE__ */ jsxs("div", { className: `w-full h-[500px] relative`, children: [
    /* @__PURE__ */ jsx("div", { className: `w-full h-full relative bg-blue-800`, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: bg,
        alt: "",
        className: ` object-cover w-full h-full`
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: `w-full h-full bg-black/20 absolute top-0 left-0 right-0 px-[15px]`, children: /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] w-full h-full mx-auto`, children: /* @__PURE__ */ jsxs("div", { className: `max-w-full md:max-w-[80%]  w-full mx-auto h-full flex flex-col place-content-center text-white`, children: [
      pageTitle && /* @__PURE__ */ jsx("div", { className: `text-2xl font-bold mb-2 italic`, children: pageTitle }),
      /* @__PURE__ */ jsx("div", { className: `text-3xl font-extralight mb-3`, children: title ?? "Industry-Specific Solutions, Powered by AI & Data." }),
      /* @__PURE__ */ jsx("div", { className: ` mb-6`, children: description ?? `We don't just build technology; we build your competitive advantage. Our end-to-end expertise delivers custom software and intelligent systems that solve your unique industry challenges and drive growth.` }),
      showContact && /* @__PURE__ */ jsx(ActionButton, { children: "Contact us today" })
    ] }) }) })
  ] });
};
function meta$7({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
function loader$7({
  context
}) {
  return {
    message: context.VALUE_FROM_EXPRESS
  };
}
const services = UNSAFE_withComponentProps(function Services({
  loaderData
}) {
  const bgImg = `/images/services-banner.jpg`;
  preload(bgImg, {
    as: "image"
  });
  const title = `Scalable Software Solutions for a Competitive Edge`;
  const description = `We deliver the digital tools, strategic insights, and expert partnership to transform your operations and drive measurable growth.`;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(HeroAlt, {
      pageTitle: "Services",
      bgImg,
      title,
      description,
      showContact: true
    }), /* @__PURE__ */ jsx(PageBarSection, {}), /* @__PURE__ */ jsx(CoreServicesSection, {}), /* @__PURE__ */ jsx(ContactSection, {})]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: services,
  loader: loader$7,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const OrderServiceJson = [
  {
    title: "Share your vision",
    description: "The journey begins with you. Tell us about your project, and we'll listen intently.",
    img: "https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Create-Your-Wallet-Icon.png",
    step: 1,
    icon: /* @__PURE__ */ jsx(BsShare, {})
  },
  {
    title: "Discovery & Strategy Call",
    description: "Within 24 hours, you will get a call from our tech specialists  to schedule a free, no-obligation discovery call.",
    img: "https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Make-Payments-Icon.png",
    step: 2,
    icon: /* @__PURE__ */ jsx(BsCheck2All, {})
  },
  {
    title: "Receive Your Tailored Proposal",
    description: "Based on our discovery session, we will craft a detailed proposal designed specifically for you.",
    img: "https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Buy-Or-Sell-Orders-Icon.png",
    step: 3,
    icon: /* @__PURE__ */ jsx(BsBriefcase, {})
  },
  {
    title: "Kick-off & Development",
    description: "Once you approve the proposal, we sign a clear contract and start crystallizing your vision.",
    img: "https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Create-Your-Wallet-Icon.png",
    step: 4,
    icon: /* @__PURE__ */ jsx(IoCreate, {})
  }
];
const OrderServiceSection = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: `px-[15px] w-full bg-black bg-[url(https://unbound.radiantthemes.com/wp-content/uploads/2018/04/Home-Eight-Converter-Background-Image.png?id=3376)] bg-no-repeat bg-cover`, children: /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] mx-auto w-full`, children: /* @__PURE__ */ jsxs("div", { className: ` h-auto text-white flex flex-col place-content-center gap-y-6 py-30`, children: [
      /* @__PURE__ */ jsx("div", { className: `text-center uppercase text-[13px] tracking-[5px] font-semibold`, children: "Let's Build Something Great Together" }),
      /* @__PURE__ */ jsx("div", { className: `text-center text-5xl font-black`, children: "Your Blueprint for Success Starts Here" }),
      /* @__PURE__ */ jsx("div", { className: `text-center font-extralight max-w-[60%] mx-auto w-full`, children: "At Veycet, we believe that starting a new software project should be exciting, not overwhelming. Our ordering process is designed to be a collaborative conversation, not a complex sales funnel. We seek to understand your vision, your challenges, and your goals to ensure we are the right partner for your success." })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: `px-[15px] max-w-[1300px] mx-auto w-full relative -top-10`, children: /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 lg:grid-cols-4 gap-x-3 gap-y-12`, children: OrderServiceJson.map((order, index) => {
      return /* @__PURE__ */ jsx("div", { className: ``, children: /* @__PURE__ */ jsxs("div", { className: `flex flex-col place-items-center gap-y-3`, children: [
        /* @__PURE__ */ jsx("div", { className: `relative h-22 w-22 rounded-full text-white flex place-items-center place-content-center border-2 border-white bg-blue-900 text-4xl`, children: order.icon }),
        /* @__PURE__ */ jsxs("div", { className: `text-center font-bold text-2xl`, children: [
          "Step ",
          order.step
        ] }),
        /* @__PURE__ */ jsx("div", { className: `text-center font-semibold text-lg`, children: order.title }),
        /* @__PURE__ */ jsx("div", { className: `text-center max-w-[70%] md:max-w-[50%] lg:max-w-[80%] mx-auto text-sm`, children: order.description })
      ] }) }, index);
    }) }) })
  ] });
};
const OrderSummarySection = () => {
  return /* @__PURE__ */ jsx("div", { className: `w-full px-[15px] py-0`, children: /* @__PURE__ */ jsxs("div", { className: `max-w-[1200px] w-full mx-auto flex flex-col gap-y-5`, children: [
    /* @__PURE__ */ jsx("div", { className: `text-center text-[13px] font-semibold tracking-widest uppercase`, children: "Begin your project with a trusted partner." }),
    /* @__PURE__ */ jsx("div", { className: `text-center text-3xl font-black tracking-normal text-purple-900`, children: "Your Vision, Our Expertise: A Partnership for Growth" }),
    /* @__PURE__ */ jsx("div", { className: `text-center text-[15px] md:mx-40`, children: "Ready to transform your business with a custom software solution? We partner with you through a clear, transparent process to ensure your project is not just built, but built for success." })
  ] }) });
};
function meta$6({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
function loader$6({
  context
}) {
  return {
    message: context.VALUE_FROM_EXPRESS
  };
}
const consultation = UNSAFE_withComponentProps(function Consultation({
  loaderData
}) {
  const bgImg = `/images/consultation-banner.jpg`;
  preload(bgImg, {
    as: "image"
  });
  const title = `Global Software & Business solutions that works.`;
  const description = `No matter the size or complexity of your business, we offer digital tools, insights and expertise that keep you ahead.`;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(HeroAlt, {
      pageTitle: "Consultation",
      bgImg,
      title,
      description,
      showContact: true
    }), /* @__PURE__ */ jsx(PageBarSection, {}), /* @__PURE__ */ jsx(VerticalSpace, {}), /* @__PURE__ */ jsx(OrderSummarySection, {}), /* @__PURE__ */ jsx(VerticalSpace, {}), /* @__PURE__ */ jsx(OrderServiceSection, {}), /* @__PURE__ */ jsx(ContactSection, {}), /* @__PURE__ */ jsx(VerticalSpace, {})]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: consultation,
  loader: loader$6,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function meta$5({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
function loader$5({
  context
}) {
  return {
    message: context.VALUE_FROM_EXPRESS
  };
}
const contact = UNSAFE_withComponentProps(function Contact({
  loaderData
}) {
  const bgImg = `/images/world-banner.jpg`;
  preload(bgImg, {
    as: "image"
  });
  const title = `Have a Challenge? Let's Solve It Together.`;
  const description = `No matter the size or complexity of your project, our team is ready to provide the digital tools and expertise you need. Start the conversation today.`;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(HeroAlt, {
      pageTitle: "Contact us",
      bgImg,
      title,
      description,
      showContact: true
    }), /* @__PURE__ */ jsx(PageBarSection, {}), /* @__PURE__ */ jsx(ContactSection, {}), /* @__PURE__ */ jsx(VerticalSpace, {})]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact,
  loader: loader$5,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function meta$4({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
function loader$4({
  context
}) {
  return {
    message: context.VALUE_FROM_EXPRESS
  };
}
const industries = UNSAFE_withComponentProps(function Industries({
  loaderData
}) {
  const bgImg = `/images/industries-banner.jpg`;
  preload(bgImg, {
    as: "image"
  });
  const title = `Industry-Specific Solutions, Powered by AI & Data.`;
  const description = `We don't just build technology; we build your competitive advantage. Our end-to-end expertise delivers custom software and intelligent systems that solve your unique industry challenges and drive growth.`;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(HeroAlt, {
      pageTitle: "Industries",
      bgImg,
      title,
      description,
      showContact: true
    }), /* @__PURE__ */ jsx(PageBarSection, {}), /* @__PURE__ */ jsx(IndustriesSection, {}), /* @__PURE__ */ jsx(ContactSection, {})]
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: industries,
  loader: loader$4,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const AboutFactsSection = () => {
  const bg = `https://unbound.radiantthemes.com/wp-content/uploads/2018/05/about-Simple-image03.png?id=5348`;
  const [bgimg, setBgImg] = useState(`bg-[url(${bg})]`);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: `w-full px-[15px] bg-center bg-[url(https://unbound.radiantthemes.com/wp-content/uploads/2018/05/about-Simple-image03.png?id=5348)]  bg-no-repeat bg-cover bg-black`, children: /* @__PURE__ */ jsx("div", { className: `py-32`, children: /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] mx-auto w-full`, children: /* @__PURE__ */ jsxs("div", { className: `grid grid-cols-1 md:grid-cols-2`, children: [
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col gap-y-8 text-white`, children: [
      /* @__PURE__ */ jsx("div", { className: `text-[13px] uppercase tracking-[3px] font-extralight`, children: "Your Vision, Our Execution: A Partnership from the Start." }),
      /* @__PURE__ */ jsxs("div", { className: `text-[35px] leading-10 font-black`, children: [
        "Why Partner with ",
        /* @__PURE__ */ jsx("span", { className: `font-extralight text-white`, children: "Veycet" }),
        "?"
      ] }),
      /* @__PURE__ */ jsx("div", { children: "We are built on a fresh principle: your success is our only metric. We immerse ourselves in your world, transforming your unique challenges into powerful, custom software solutions. Our process is collaborative, transparent, and designed entirely around your goals." }),
      /* @__PURE__ */ jsxs("div", { className: `grid md:grid-cols-2 gap-0`, children: [
        /* @__PURE__ */ jsx(GridContent, { count: "12+", title: "Years of Founder Expertise", borderLocation: "bottom" }),
        /* @__PURE__ */ jsx(GridContent, { count: "100%", title: "Focus on Your Success", borderLocation: "left" }),
        /* @__PURE__ */ jsx(GridContent, { count: "End-to-End", title: "Technical Partnership", borderLocation: "right" }),
        /* @__PURE__ */ jsx(GridContent, { count: "Cutting-Edge", title: "Technology Stack", borderLocation: "top" })
      ] })
    ] })
  ] }) }) }) }) });
};
const GridContent = ({ count, title, borderLocation }) => {
  const [border, setBorder] = useState("");
  useEffect(() => {
    if (borderLocation === "bottom") {
      setBorder("border-b border-white/20");
    } else if (borderLocation === "left") {
      setBorder(`md:border-l md:border-white/20 md:pl-10 border-b border-b-white/20 `);
    } else if (borderLocation === "top") {
      setBorder("border-t border-white/20 md:pl-10");
    } else {
      setBorder("md:border-r md:border-white/20");
    }
  }, [borderLocation]);
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col  gap-y-3 py-10 ${border}`, children: [
    /* @__PURE__ */ jsx("div", { className: `text-4xl font-black`, children: count }),
    /* @__PURE__ */ jsx("div", { children: title })
  ] });
};
const AboutUsSection = () => {
  const imgLnk = `https://unbound.radiantthemes.com/wp-content/uploads/2018/05/about-Simple-image01.png`;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: `w-full px-[15px] py-20`, children: /* @__PURE__ */ jsx("div", { className: `max-w-[1200px] mx-auto w-full`, children: /* @__PURE__ */ jsxs("div", { className: `grid grid-cols-1 lg:grid-cols-2 gap-8`, children: [
    /* @__PURE__ */ jsx("div", { className: `w-full sm:w-[80%] lg:w-full mx-auto h-full relative`, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: imgLnk,
        alt: "",
        className: `object-cover w-full h-full`
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: `flex flex-col space-y-6 h-fit`, children: [
      /* @__PURE__ */ jsx("div", { className: `text-[13px] font-bold tracking-[2px] uppercase`, children: "Your Vision, Engineered." }),
      /* @__PURE__ */ jsx("div", { className: `text-[40px] leading-[1.2em] font-black max-w-[80%]`, children: "We build the custom software that powers ambitious businesses." }),
      /* @__PURE__ */ jsx("div", { className: `text-xl md:max-w-[95%]`, children: "We are committed to customers success from start to finish. Our input helps make their solutions stand out from the crowd." }),
      /* @__PURE__ */ jsx("div", { className: `text-[14px] md:max-w-[95%]`, children: "We are committed to one outcome: your success. By focusing on your unique challenges and opportunities, we deliver tailored solutions that are not only powerful and scalable but are designed to set you apart in the marketplace." }),
      /* @__PURE__ */ jsx(ActionButton, { children: "Contact us" })
    ] })
  ] }) }) }) });
};
const About = () => {
  const bgImg = `/images/about-banner.jpg`;
  preload(bgImg, {
    as: "image"
  });
  const title = `Your Challenge, Our Shared Mission.`;
  const description = `Bring us your most complex business problems. We partner with you to design and build the intelligent software solutions that turn your challenges into your greatest competitive advantages. Let's start building what's next, together.`;
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(HeroAlt, {
      pageTitle: "About us",
      bgImg,
      title,
      description,
      showContact: true
    }), /* @__PURE__ */ jsx(PageBarSection, {}), /* @__PURE__ */ jsx(AboutFactsSection, {}), /* @__PURE__ */ jsx(AboutUsSection, {})]
  });
};
const about = UNSAFE_withComponentProps(About);
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about
}, Symbol.toStringTag, { value: "Module" }));
const InfoPrivacy = () => {
  return /* @__PURE__ */ jsxs("div", { className: `markdown prose dark:prose-invert w-full wrap-break-word light space-y-4`, children: [
    /* @__PURE__ */ jsx("h2", { "data-start": "193", "data-end": "214", className: `text-xl`, children: /* @__PURE__ */ jsx(
      "div",
      {
        "data-start": "196",
        "data-end": "214",
        className: `text-3xl tracking-tighter font-black text-gray-900 mb-6 first-letter:italic`,
        children: "Privacy Policy"
      }
    ) }),
    /* @__PURE__ */ jsxs("p", { "data-start": "216", "data-end": "249", children: [
      /* @__PURE__ */ jsx("strong", { "data-start": "216", "data-end": "235", children: "Effective Date:" }),
      " 23 Jul 2025"
    ] }),
    /* @__PURE__ */ jsxs("p", { "data-start": "251", "data-end": "429", children: [
      "Thank you for trusting ",
      /* @__PURE__ */ jsx("strong", { "data-start": "274", "data-end": "293", children: "Bycet" }),
      " with your information. Your privacy is important to us, and we’re committed to handling your data with care, respect, and transparency."
    ] }),
    /* @__PURE__ */ jsx("hr", { "data-start": "431", "data-end": "434" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "436", "data-end": "469", children: /* @__PURE__ */ jsx("strong", { "data-start": "440", "data-end": "469", children: "1. Information We Collect" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "471", "data-end": "538", children: "We may collect the following information when you use our platform:" }),
    /* @__PURE__ */ jsxs("ul", { "data-start": "540", "data-end": "884", children: [
      /* @__PURE__ */ jsx("li", { "data-start": "540", "data-end": "615", children: /* @__PURE__ */ jsxs("p", { "data-start": "542", "data-end": "615", children: [
        /* @__PURE__ */ jsx("strong", { "data-start": "542", "data-end": "562", children: "Personal Details" }),
        ": such as your name, email address, and contact info."
      ] }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "616", "data-end": "700", children: /* @__PURE__ */ jsxs("p", { "data-start": "618", "data-end": "700", children: [
        /* @__PURE__ */ jsx("strong", { "data-start": "618", "data-end": "642", children: "Business Information" }),
        ": details you provide when listing or managing a business."
      ] }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "701", "data-end": "802", children: /* @__PURE__ */ jsxs("p", { "data-start": "703", "data-end": "802", children: [
        /* @__PURE__ */ jsx("strong", { "data-start": "703", "data-end": "717", children: "Usage Data" }),
        ": information about how you interact with our platform (e.g., pages visited, clicks)."
      ] }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "803", "data-end": "884", children: /* @__PURE__ */ jsxs("p", { "data-start": "805", "data-end": "884", children: [
        /* @__PURE__ */ jsx("strong", { "data-start": "805", "data-end": "823", children: "Technical Data" }),
        ": like your IP address, browser type, and device information."
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("hr", { "data-start": "886", "data-end": "889" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "891", "data-end": "929", children: /* @__PURE__ */ jsx("strong", { "data-start": "895", "data-end": "929", children: "2. How We Use Your Information" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "931", "data-end": "958", children: "We use your information to:" }),
    /* @__PURE__ */ jsxs("ul", { "data-start": "960", "data-end": "1182", className: `pl-2`, children: [
      /* @__PURE__ */ jsx("li", { "data-start": "960", "data-end": "997", children: /* @__PURE__ */ jsx("p", { "data-start": "962", "data-end": "997", children: "- Provide and maintain our services" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "998", "data-end": "1045", children: /* @__PURE__ */ jsx("p", { "data-start": "1000", "data-end": "1045", children: "- Process business listings and user accounts" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "1046", "data-end": "1102", children: /* @__PURE__ */ jsx("p", { "data-start": "1048", "data-end": "1102", children: "- Communicate with you (updates, support, newsletters)" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "1103", "data-end": "1147", children: /* @__PURE__ */ jsx("p", { "data-start": "1105", "data-end": "1147", children: "- Improve our platform and user experience" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "1148", "data-end": "1182", children: /* @__PURE__ */ jsx("p", { "data-start": "1150", "data-end": "1182", children: "- Comply with legal requirements" }) })
    ] }),
    /* @__PURE__ */ jsx("p", { "data-start": "1184", "data-end": "1213", children: "We will never sell your data." }),
    /* @__PURE__ */ jsx("hr", { "data-start": "1215", "data-end": "1218" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "1220", "data-end": "1264", children: /* @__PURE__ */ jsx("strong", { "data-start": "1224", "data-end": "1264", id: "cookies", className: "scroll-mt-24", children: "3. Cookies and Tracking Technologies" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "1266", "data-end": "1313", children: "We may use cookies and similar technologies to:" }),
    /* @__PURE__ */ jsxs("ul", { "data-start": "1315", "data-end": "1409", children: [
      /* @__PURE__ */ jsx("li", { "data-start": "1315", "data-end": "1337", children: /* @__PURE__ */ jsx("p", { "data-start": "1317", "data-end": "1337", children: "- Keep you logged in" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "1338", "data-end": "1367", children: /* @__PURE__ */ jsx("p", { "data-start": "1340", "data-end": "1367", children: "- Understand usage patterns" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "1368", "data-end": "1409", children: /* @__PURE__ */ jsx("p", { "data-start": "1370", "data-end": "1409", children: "- Improve functionality and performance" }) })
    ] }),
    /* @__PURE__ */ jsx("p", { "data-start": "1411", "data-end": "1476", children: "You can control cookie settings through your browser preferences." }),
    /* @__PURE__ */ jsx("hr", { "data-start": "1478", "data-end": "1481" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "1483", "data-end": "1518", children: /* @__PURE__ */ jsx("strong", { "data-start": "1487", "data-end": "1518", children: "4. Sharing Your Information" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "1520", "data-end": "1570", children: "We may share your information only when necessary:" }),
    /* @__PURE__ */ jsxs("ul", { "data-start": "1572", "data-end": "1733", children: [
      /* @__PURE__ */ jsx("li", { "data-start": "1572", "data-end": "1639", children: /* @__PURE__ */ jsx("p", { "data-start": "1574", "data-end": "1639", children: "- With trusted service providers who help us operate our platform" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "1640", "data-end": "1676", children: /* @__PURE__ */ jsx("p", { "data-start": "1642", "data-end": "1676", children: "- To comply with legal obligations" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "1677", "data-end": "1733", children: /* @__PURE__ */ jsx("p", { "data-start": "1679", "data-end": "1733", children: "- If required to prevent fraud or protect our platform" }) })
    ] }),
    /* @__PURE__ */ jsx("p", { "data-start": "1735", "data-end": "1806", children: "We never share your data for advertising or marketing by third parties." }),
    /* @__PURE__ */ jsx("hr", { "data-start": "1808", "data-end": "1811" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "1813", "data-end": "1838", children: /* @__PURE__ */ jsx("strong", { "data-start": "1817", "data-end": "1838", children: "5. Data Retention" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "1840", "data-end": "1897", children: "We retain your information only for as long as necessary:" }),
    /* @__PURE__ */ jsxs("ul", { "data-start": "1899", "data-end": "2033", children: [
      /* @__PURE__ */ jsx("li", { "data-start": "1899", "data-end": "1935", children: /* @__PURE__ */ jsx("p", { "data-start": "1901", "data-end": "1935", children: "- To provide you with our services" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "1936", "data-end": "1982", children: /* @__PURE__ */ jsx("p", { "data-start": "1938", "data-end": "1982", children: "- To fulfill legal or regulatory obligations" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "1983", "data-end": "2033", children: /* @__PURE__ */ jsx("p", { "data-start": "1985", "data-end": "2033", children: "- To resolve disputes and enforce our agreements" }) })
    ] }),
    /* @__PURE__ */ jsx("p", { "data-start": "2035", "data-end": "2080", children: "You may request account deletion at any time." }),
    /* @__PURE__ */ jsx("hr", { "data-start": "2082", "data-end": "2085" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "2087", "data-end": "2109", children: /* @__PURE__ */ jsx("strong", { "data-start": "2091", "data-end": "2109", children: "6. Your Rights" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "2111", "data-end": "2133", children: "You have the right to:" }),
    /* @__PURE__ */ jsxs("ul", { "data-start": "2135", "data-end": "2326", children: [
      /* @__PURE__ */ jsx("li", { "data-start": "2135", "data-end": "2191", children: /* @__PURE__ */ jsx("p", { "data-start": "2137", "data-end": "2191", children: "- Access, correct, or delete your personal information" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "2192", "data-end": "2246", children: /* @__PURE__ */ jsx("p", { "data-start": "2194", "data-end": "2246", children: "- Withdraw consent for non-essential data processing" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "2247", "data-end": "2278", children: /* @__PURE__ */ jsx("p", { "data-start": "2249", "data-end": "2278", children: "- Request a copy of your data" }) }),
      /* @__PURE__ */ jsx("li", { "data-start": "2279", "data-end": "2326", children: /* @__PURE__ */ jsx("p", { "data-start": "2281", "data-end": "2326", children: "Contact us with any privacy-related questions" }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { "data-start": "2328", "data-end": "2401", children: [
      "To make a request, please reach out to us at ",
      /* @__PURE__ */ jsx("strong", { "data-start": "2373", "data-end": "2400", children: "info@bycet.com" }),
      "."
    ] }),
    /* @__PURE__ */ jsx("hr", { "data-start": "2403", "data-end": "2406" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "2408", "data-end": "2427", children: /* @__PURE__ */ jsx("strong", { "data-start": "2412", "data-end": "2427", children: "7. Security" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "2429", "data-end": "2648", children: "We take your privacy seriously and have implemented appropriate security measures to protect your data. However, no system is 100% secure, and we encourage you to use strong passwords and protect your login credentials." }),
    /* @__PURE__ */ jsx("hr", { "data-start": "2650", "data-end": "2653" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "2655", "data-end": "2684", children: /* @__PURE__ */ jsx("strong", { "data-start": "2659", "data-end": "2684", children: "8. Children's Privacy" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "2686", "data-end": "2917", children: "Our platform is intended for users aged 18 and above. We do not knowingly collect personal data from children under 13. If you believe a child has provided us with personal data, please contact us so we can take appropriate action." }),
    /* @__PURE__ */ jsx("hr", { "data-start": "2919", "data-end": "2922" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "2924", "data-end": "2957", children: /* @__PURE__ */ jsx("strong", { "data-start": "2928", "data-end": "2957", children: "9. Changes to This Policy" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "2959", "data-end": "3174", children: "We may update this Privacy Policy from time to time to reflect changes to our practices or legal requirements. We'll notify users of significant changes, and the updated version will always be available on our site." }),
    /* @__PURE__ */ jsx("hr", { "data-start": "3176", "data-end": "3179" }),
    /* @__PURE__ */ jsx("h3", { "data-start": "3181", "data-end": "3203", children: /* @__PURE__ */ jsx("strong", { "data-start": "3185", "data-end": "3203", children: "10. Contact Us" }) }),
    /* @__PURE__ */ jsx("p", { "data-start": "3205", "data-end": "3294", children: "If you have any questions or concerns about this Privacy Policy, feel free to contact us:" }),
    /* @__PURE__ */ jsxs("p", { "data-start": "3296", "data-end": "3371", children: [
      /* @__PURE__ */ jsx("strong", { "data-start": "3299", "data-end": "3309", children: "Email:" }),
      " ",
      /* @__PURE__ */ jsx("a", { href: "mailto:help@veycet.com", children: "info@bycet.com" }),
      /* @__PURE__ */ jsx("br", { "data-start": "3331", "data-end": "3334" }),
      "🌐 ",
      /* @__PURE__ */ jsx("strong", { "data-start": "3337", "data-end": "3349", children: "Website:" }),
      " ",
      /* @__PURE__ */ jsx("a", { href: "/contact", children: "bycet.com/contact" })
    ] }),
    /* @__PURE__ */ jsx("p", { "data-start": "3378", "data-end": "3557" })
  ] });
};
const PrivacySection = () => {
  return /* @__PURE__ */ jsx("div", { className: `px-[15px] w-full py-10`, children: /* @__PURE__ */ jsx("div", { className: `w-full  lg:max-w-[70%] xl:max-w-[700px] mx-auto`, children: /* @__PURE__ */ jsx(InfoPrivacy, {}) }) });
};
const PolicyInfoHeader = ({ title, subTitle, description }) => {
  return /* @__PURE__ */ jsx("div", { className: `w-full px-[15px] bg-blue-50/30 py-30 border-b border-gray-200 `, children: /* @__PURE__ */ jsxs("div", { className: `max-w-[1200px] mx-auto w-full flex flex-col gap-y-6`, children: [
    /* @__PURE__ */ jsx("div", { className: `text-[13px] text-center uppercase`, children: subTitle }),
    /* @__PURE__ */ jsx("div", { className: `text-[32px] text-center font-black leading-9 max-w-[80%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[45%] mx-auto tracking-tighter`, children: title }),
    /* @__PURE__ */ jsx("div", { className: `text-center text-[16px] text-gray-500 md:w-[80%] mx-auto`, children: description })
  ] }) });
};
function meta$3({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
function loader$3({
  context
}) {
  return {
    message: context.VALUE_FROM_EXPRESS
  };
}
const privacy = UNSAFE_withComponentProps(function Privacy({
  loaderData
}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(PolicyInfoHeader, {
      title: "Your Privacy, Our Principle.",
      subTitle: "Your Privacy is Our Commitment.",
      description: `At Veycet, we build intelligent software with a foundational commitment to data security and privacy. This policy outlines how we protect your information and uphold your trust.`
    }), /* @__PURE__ */ jsx(PrivacySection, {}), /* @__PURE__ */ jsx(ContactSection, {})]
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: privacy,
  loader: loader$3,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const InfoTermsOfUse = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full  lg:max-w-[70%] xl:max-w-[700px] mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl tracking-tighter font-black text-gray-900 mb-6 first-letter:italic", children: "Terms of Use" }),
    /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-8", children: [
      "Last Updated: ",
      (/* @__PURE__ */ new Date()).toLocaleDateString()
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "1. Acceptance of Terms" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: 'Welcome to Bycet ("we," "our," or "us"). By accessing or using our website at Bycet.com (the "Site"), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our Site.' })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "2. Intellectual Property" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: 'All content on this Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Bycet Ltd. or its content suppliers and is protected by international copyright and intellectual property laws. The trademarks "Bycet" and the Bycet logo are our exclusive property.' })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "3. Use of the Site" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "You are granted a limited, non-exclusive, non-transferable license to access and use the Site for informational and non-commercial purposes. You agree not to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, or sell any information or software obtained from the Site." }),
          /* @__PURE__ */ jsx("li", { children: "Use the Site for any unlawful purpose or in any way that could damage, disable, or impair the Site or interfere with any other party's use of the Site." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "4. Services and Consultations" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "The content on this Site, including descriptions of our software development, AI integration, and other technology services, is for general informational purposes only. It does not constitute a binding offer or agreement. Specific project terms, scope, pricing, and deliverables will be outlined in a separate, formal Statement of Work or Master Services Agreement." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "5. User Submissions" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: 'Any non-personal information, feedback, comments, or ideas you submit to us through the Site ("Submissions") will be considered non-confidential and non-proprietary. By providing a Submission, you grant us an unrestricted, perpetual, irrevocable license to use, reproduce, modify, and distribute it for any purpose without compensation to you.' })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "6. Disclaimer of Warranties" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: 'This Site and all content are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.' })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "7. Limitation of Liability" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "To the fullest extent permitted by law, Bycet Ltd. shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in any way connected with your use of the Site or the inability to use the Site." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "8. Links to Third-Party Sites" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "The Site may contain links to external websites. These links are provided for your convenience only. We do not control these sites and are not responsible for their content, privacy policies, or practices. The inclusion of any link does not imply endorsement by Bycet." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "9. Indemnification" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "You agree to indemnify and hold harmless Bycet Ltd., its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of the Site or your violation of these Terms." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "10. Governing Law" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "These Terms shall be governed by and construed in accordance with the laws of [Your Country/Jurisdiction], without regard to its conflict of law principles." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "11. Changes to Terms" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: 'We reserve the right to modify these Terms of Use at any time. We will do so by posting an updated version on this page with a new "Last Updated" date. Your continued use of the Site after any change constitutes your acceptance of the new Terms.' })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "12. Contact Us" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "If you have any questions about these Terms of Use, please contact us at:" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-800 font-medium mt-2", children: "Email: info@bycet.com" })
      ] })
    ] })
  ] });
};
function meta$2({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
function loader$2({
  context
}) {
  return {
    message: context.VALUE_FROM_EXPRESS
  };
}
const tos = UNSAFE_withComponentProps(function ToS({
  loaderData
}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(PolicyInfoHeader, {
      title: "Clear Guidelines for a Secure Partnership.",
      subTitle: "Our Terms of Use.",
      description: `Welcome to Veycet. These terms outline the rules and guidelines for using our website and services, ensuring a secure and productive experience for all our partners and user`
    }), /* @__PURE__ */ jsx(InfoTermsOfUse, {}), /* @__PURE__ */ jsx(ContactSection, {})]
  });
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tos,
  loader: loader$2,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const CopyrightPolicy = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full  lg:max-w-[70%] xl:max-w-[700px] mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl tracking-tighter font-black text-gray-900 mb-6 first-letter:italic", children: "Copyright Policy" }),
    /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-8", children: [
      "Last Updated: ",
      (/* @__PURE__ */ new Date()).toLocaleDateString()
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "1. Intellectual Property Rights" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "All content, materials, and software available on Voysce.com, including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Voysce Ltd. or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "2. Copyright Ownership" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "Unless otherwise stated, Voysce Ltd. owns the intellectual property rights for all material on Voysce.com. All intellectual property rights are reserved. You may access this from Voysce.com for your personal use subject to the restrictions set forth in these terms and conditions." }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "The Voysce name, logo, and all related product and service names, design marks, and slogans are the trademarks or service marks of Voysce Ltd. All other product and service marks contained on the website are the trademarks of their respective owners." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "3. Permitted Use" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "You are granted a limited license only, subject to the restrictions provided in these terms, for purposes of viewing the material contained on this website. You may:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsx("li", { children: "View and display content from our website on your computer or other device" }),
          /* @__PURE__ */ jsx("li", { children: "Print copies of the content for your personal, non-commercial use" }),
          /* @__PURE__ */ jsx("li", { children: "Store files from our website for your personal, non-commercial use" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "4. Restrictions" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "You must not:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Republish material from this website without our express written consent" }),
          /* @__PURE__ */ jsx("li", { children: "Sell, rent, or sub-license material from the website" }),
          /* @__PURE__ */ jsx("li", { children: "Reproduce, duplicate, or copy material from this website for commercial purposes" }),
          /* @__PURE__ */ jsx("li", { children: "Redistribute content from Voysce.com without our express written permission" }),
          /* @__PURE__ */ jsx("li", { children: "Modify or create derivative works from our content" }),
          /* @__PURE__ */ jsx("li", { children: "Use our intellectual property in any way that suggests endorsement or association" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "5. Copyright Infringement Reports" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "Voysce Ltd. respects the intellectual property rights of others. If you believe that any content on our website infringes your copyright, please notify us by providing the following information in writing:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsx("li", { children: "A physical or electronic signature of the copyright owner or authorized representative" }),
          /* @__PURE__ */ jsx("li", { children: "Identification of the copyrighted work claimed to have been infringed" }),
          /* @__PURE__ */ jsx("li", { children: "Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material" }),
          /* @__PURE__ */ jsx("li", { children: "Your contact information, including address, telephone number, and email" }),
          /* @__PURE__ */ jsx("li", { children: "A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law" }),
          /* @__PURE__ */ jsx("li", { children: "A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "6. Counter-Notification" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "If you believe that your content was removed in error, you may submit a counter-notification containing your contact information, identification of the removed content, a statement under penalty of perjury that the removal was erroneous, and your consent to the jurisdiction of federal court in your jurisdiction." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "7. Repeat Infringer Policy" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "In accordance with applicable law, Voysce Ltd. has adopted a policy of terminating, in appropriate circumstances, users who are deemed to be repeat infringers. We may also at our sole discretion limit access to the website and/or terminate the accounts of any users who infringe any intellectual property rights of others." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "8. Third-Party Content" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Our website may include content provided by third parties. We are not responsible for and do not necessarily endorse such third-party content. All third-party content is the responsibility of the respective third parties." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "9. Changes to This Policy" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: 'We may update this Copyright Policy from time to time. We will notify you of any changes by posting the new Copyright Policy on this page and updating the "Last Updated" date.' })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { className: "bg-gray-50 p-6 rounded-lg text-[12]px", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-800 mb-3", children: "Contact Information" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "For copyright-related inquiries, infringement reports, or permission requests, please contact us at:" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-800 font-bold", children: "Bycet Worldwide Ltd." }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-800 font-medium", children: "Email: info@bycet.com" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mt-2", children: "Please allow 3-5 business days for a response to copyright infringement notices." })
        ] })
      ] })
    ] })
  ] });
};
function meta$1({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
function loader$1({
  context
}) {
  return {
    message: context.VALUE_FROM_EXPRESS
  };
}
const copyright = UNSAFE_withComponentProps(function Copyright({
  loaderData
}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(PolicyInfoHeader, {
      title: "Protecting Intellectual Property, Respecting Creativity.",
      subTitle: "Copyright Policy",
      description: `This policy outlines the intellectual property rights for all content associated with Voysce and establishes the procedures for reporting any potential copyright infringement.`
    }), /* @__PURE__ */ jsx(CopyrightPolicy, {}), /* @__PURE__ */ jsx(ContactSection, {})]
  });
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: copyright,
  loader: loader$1,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const ResponsibleDisclosure = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full  lg:max-w-[70%] xl:max-w-[700px] mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl tracking-tighter font-black text-gray-900 mb-6 first-letter:italic", children: "Responsible Disclosure Policy" }),
    /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-8", children: [
      "Last Updated: ",
      (/* @__PURE__ */ new Date()).toLocaleDateString()
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "Our Commitment to Security" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "At veycet, we consider the security of our systems and our clients' data a top priority. Despite our best efforts, vulnerabilities may still exist. We value the role that security researchers and the wider community play in helping to keep our systems secure." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "Reporting Vulnerabilities" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "If you discover a vulnerability, we would appreciate your help in disclosing it to us in a responsible manner. Please act in good faith and follow these guidelines:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "Submit your findings to ",
            /* @__PURE__ */ jsx("strong", { children: "info@bycet.com" })
          ] }),
          /* @__PURE__ */ jsx("li", { children: "Provide sufficient information to reproduce the vulnerability" }),
          /* @__PURE__ */ jsx("li", { children: "Do not exploit the vulnerability beyond what is necessary to demonstrate it" }),
          /* @__PURE__ */ jsx("li", { children: "Do not access, modify, or destroy data that does not belong to you" }),
          /* @__PURE__ */ jsx("li", { children: "Give us a reasonable time to address the vulnerability before public disclosure" }),
          /* @__PURE__ */ jsx("li", { children: "Do not use attacks on physical security, social engineering, or DDoS attacks" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "What We Promise" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "In return for your responsible disclosure, we commit to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Respond to your report within 3 business days with our assessment" }),
          /* @__PURE__ */ jsx("li", { children: "Work diligently to resolve confirmed vulnerabilities in a timely manner" }),
          /* @__PURE__ */ jsx("li", { children: "Keep you informed of our progress throughout the remediation process" }),
          /* @__PURE__ */ jsx("li", { children: "Credit you as the discoverer (unless you prefer to remain anonymous)" }),
          /* @__PURE__ */ jsx("li", { children: "Not take legal action against you provided you follow this policy" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "Out of Scope Vulnerabilities" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "The following issues are generally considered out of scope:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Clickjacking on pages with no sensitive actions" }),
          /* @__PURE__ */ jsx("li", { children: "Missing security headers that don't lead directly to a vulnerability" }),
          /* @__PURE__ */ jsx("li", { children: "Theoretical vulnerabilities without practical exploitability" }),
          /* @__PURE__ */ jsx("li", { children: "Denial of service attacks" }),
          /* @__PURE__ */ jsx("li", { children: "Social engineering or physical security attacks" }),
          /* @__PURE__ */ jsx("li", { children: "Vulnerabilities in third-party applications that we use" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "Safe Harbor" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "We will not initiate legal action against security researchers who discover and report vulnerabilities through this responsible disclosure process, provided they:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 space-y-2 ml-4 mt-3", children: [
          /* @__PURE__ */ jsx("li", { children: "Follow the guidelines outlined in this policy" }),
          /* @__PURE__ */ jsx("li", { children: "Do not violate any laws or compromise data privacy" }),
          /* @__PURE__ */ jsx("li", { children: "Act in good faith to avoid privacy violations and service disruption" }),
          /* @__PURE__ */ jsx("li", { children: "Do not use the vulnerability for personal gain beyond potential recognition" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "Recognition" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "With your permission, we would like to credit your responsible disclosure in our Security Hall of Fame. Please let us know if you prefer to remain anonymous." })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-3", children: "Contact Information" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "Please send all vulnerability reports to:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-800 font-medium", children: "Email: info@bycet.com" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mt-1", children: "We prefer encrypted communications. Please use our PGP key if possible." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", {}),
      /* @__PURE__ */ jsxs("section", { className: "bg-blue-50 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-red-800 mb-3", children: "Thank You" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "We appreciate your efforts to make Veycet and the internet a safer place. Your expertise and ethical approach help us maintain the highest security standards for our clients and their users." })
      ] })
    ] })
  ] });
};
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
function loader({
  context
}) {
  return {
    message: context.VALUE_FROM_EXPRESS
  };
}
const responsible_disclosure_page = UNSAFE_withComponentProps(function ResponsbileDisclosurePage({
  loaderData
}) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(PolicyInfoHeader, {
      title: "Partnering to Strengthen Our Defenses.",
      subTitle: "Responsible Disclosure Policy",
      description: `We consider the security of our systems and our clients' data a top priority. We value the role that security researchers play in keeping us secure and welcome the responsible reporting of any potential vulnerabilities.`
    }), /* @__PURE__ */ jsx(ResponsibleDisclosure, {}), /* @__PURE__ */ jsx(ContactSection, {})]
  });
});
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: responsible_disclosure_page,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-o7Kp_fiI.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/index-B07EB0Nn.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-CI6dg4BV.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/index-B07EB0Nn.js", "/assets/index-D_jbpGnZ.js", "/assets/index-CEeVimhu.js", "/assets/index-BoKe5eNw.js", "/assets/iconBase-BaKIe5Hp.js"], "css": ["/assets/root-CBuRbQPl.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-CopGFK7L.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/ContactSection-ubYLzoer.js", "/assets/PageBarSection-CvEx8TGB.js", "/assets/index-B07EB0Nn.js", "/assets/index-CEeVimhu.js", "/assets/VerticalSpace-DZuxi1SX.js", "/assets/CoreServicesSection-T1sk0kFJ.js", "/assets/index-D_jbpGnZ.js", "/assets/iconBase-BaKIe5Hp.js", "/assets/routes-BFbE4epO.js", "/assets/IndustriesSection-gqlhBnQ9.js", "/assets/index-BoKe5eNw.js"], "css": ["/assets/ContactSection-m_GmyXfo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/services": { "id": "routes/services", "parentId": "root", "path": "services", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/services-Cvu7_gQz.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/ContactSection-ubYLzoer.js", "/assets/index-B07EB0Nn.js", "/assets/PageBarSection-CvEx8TGB.js", "/assets/CoreServicesSection-T1sk0kFJ.js", "/assets/routes-BFbE4epO.js", "/assets/HeroAlt-BF4LlNBI.js", "/assets/index-CEeVimhu.js", "/assets/iconBase-BaKIe5Hp.js", "/assets/index-D_jbpGnZ.js"], "css": ["/assets/ContactSection-m_GmyXfo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/consultation": { "id": "routes/consultation", "parentId": "root", "path": "consultation", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/consultation-C125F_5a.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/ContactSection-ubYLzoer.js", "/assets/index-B07EB0Nn.js", "/assets/PageBarSection-CvEx8TGB.js", "/assets/VerticalSpace-DZuxi1SX.js", "/assets/index-CEeVimhu.js", "/assets/HeroAlt-BF4LlNBI.js", "/assets/iconBase-BaKIe5Hp.js"], "css": ["/assets/ContactSection-m_GmyXfo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/contact-CXuSQGwT.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/ContactSection-ubYLzoer.js", "/assets/index-B07EB0Nn.js", "/assets/PageBarSection-CvEx8TGB.js", "/assets/VerticalSpace-DZuxi1SX.js", "/assets/HeroAlt-BF4LlNBI.js"], "css": ["/assets/ContactSection-m_GmyXfo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/industries": { "id": "routes/industries", "parentId": "root", "path": "industry", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/industries-M5OIsMuX.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/ContactSection-ubYLzoer.js", "/assets/index-B07EB0Nn.js", "/assets/PageBarSection-CvEx8TGB.js", "/assets/routes-BFbE4epO.js", "/assets/IndustriesSection-gqlhBnQ9.js", "/assets/HeroAlt-BF4LlNBI.js", "/assets/index-D_jbpGnZ.js", "/assets/iconBase-BaKIe5Hp.js", "/assets/index-BoKe5eNw.js"], "css": ["/assets/ContactSection-m_GmyXfo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-DZjYKdHL.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/HeroAlt-BF4LlNBI.js", "/assets/PageBarSection-CvEx8TGB.js", "/assets/index-B07EB0Nn.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/privacy": { "id": "routes/privacy", "parentId": "root", "path": "privacy", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/privacy-B-5v4Qkv.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/ContactSection-ubYLzoer.js", "/assets/index-B07EB0Nn.js", "/assets/routes-BFbE4epO.js", "/assets/PolicyInfoHeader-DSXWSpq3.js"], "css": ["/assets/ContactSection-m_GmyXfo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/tos": { "id": "routes/tos", "parentId": "root", "path": "terms", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/tos-C9S0Z_5L.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/ContactSection-ubYLzoer.js", "/assets/index-B07EB0Nn.js", "/assets/routes-BFbE4epO.js", "/assets/PolicyInfoHeader-DSXWSpq3.js"], "css": ["/assets/ContactSection-m_GmyXfo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/copyright": { "id": "routes/copyright", "parentId": "root", "path": "copyright", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/copyright-BIbh9T1d.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/ContactSection-ubYLzoer.js", "/assets/index-B07EB0Nn.js", "/assets/routes-BFbE4epO.js", "/assets/PolicyInfoHeader-DSXWSpq3.js"], "css": ["/assets/ContactSection-m_GmyXfo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/responsible_disclosure_page": { "id": "routes/responsible_disclosure_page", "parentId": "root", "path": "responsible_disclosure", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/responsible_disclosure_page-DQ5bnAbd.js", "imports": ["/assets/chunk-OIYGIGL5-CoK2nRYL.js", "/assets/ContactSection-ubYLzoer.js", "/assets/index-B07EB0Nn.js", "/assets/routes-BFbE4epO.js", "/assets/PolicyInfoHeader-DSXWSpq3.js"], "css": ["/assets/ContactSection-m_GmyXfo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-e04b74c4.js", "version": "e04b74c4", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/consultation": {
    id: "routes/consultation",
    parentId: "root",
    path: "consultation",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/industries": {
    id: "routes/industries",
    parentId: "root",
    path: "industry",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/privacy": {
    id: "routes/privacy",
    parentId: "root",
    path: "privacy",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/tos": {
    id: "routes/tos",
    parentId: "root",
    path: "terms",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/copyright": {
    id: "routes/copyright",
    parentId: "root",
    path: "copyright",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/responsible_disclosure_page": {
    id: "routes/responsible_disclosure_page",
    parentId: "root",
    path: "responsible_disclosure",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
