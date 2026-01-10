"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Accordion,
  AccordionItem
} from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import logoWhite from "@/assets/images/landing/logo-white.png";
import { useRouter } from "next/router";
import MegaMenu from "./MegaMenu";
import { FaChevronDown } from "react-icons/fa6";
import { industriesData, onDemandAppsData, servicesData } from "./menuData";

export default function Header({ onNavigate, industries }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const { scrollTo } = router.query;

  const handleClick = (e, sectionKey) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (pathname !== "/") {
      router.push("/?scrollTo=" + sectionKey);
    } else {
      if (onNavigate) onNavigate(sectionKey);
    }
  };

  useEffect(() => {
    if (scrollTo && pathname === "/") {
      if (onNavigate) onNavigate(scrollTo);
      setIsMenuOpen(false);
    }
  }, [scrollTo, pathname, onNavigate]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { title: "Portfolio", key: "portfolio", url: "/", target: "_self" },
    { title: "Services", key: "services", url: "/", target: "_self" },
    // "Industries" is handled separately in mobile now
    { title: "About US", key: "about", url: "/", target: "_self" },
    { title: "Insights", key: "insights", url: "/", target: "_self" },
  ];

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-[#0A142F] backdrop-blur-sm fixed top-0 z-50 w-full border-0 shadow-none"
        classNames={{
          wrapper: "!max-w-[100%]",
        }}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-white"
          />
          <NavbarBrand>
            <Link href={"/"} className="font-[500]">
              <Image
                src={logoWhite}
                alt="logoWhite"
                className="max-h-[2.6rem] w-[auto]"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className="hidden lg:flex lg:gap-[2rem]"
          justify="center"
        >
          {/* Services with Mega Menu */}
          <NavbarItem
            onMouseEnter={() => {
              setIsMegaMenuOpen(true);
              setActiveMenu("services");
            }}
            className="h-full flex items-center"
          >
            <Link
              className="text-white font-medium cursor-pointer flex items-center gap-1 h-full text-sm tracking-wide"
              href="#"
            >
              SERVICES <FaChevronDown className={`fill-white w-2.5 h-2.5 transition-transform ${isMegaMenuOpen && activeMenu === "services" ? 'rotate-180' : ''}`} />
            </Link>
          </NavbarItem>

          {/* Industries with Mega Menu */}
          <NavbarItem
            onMouseEnter={() => {
              setIsMegaMenuOpen(true);
              setActiveMenu("industries");
            }}
            className="h-full flex items-center"
          >
            <Link
              className="text-white font-medium cursor-pointer flex items-center gap-1 h-full text-sm tracking-wide"
              href="#"
            >
              INDUSTRIES <FaChevronDown className={`fill-white w-2.5 h-2.5 transition-transform ${isMegaMenuOpen && activeMenu === "industries" ? 'rotate-180' : ''}`} />
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link className="text-white font-medium cursor-pointer text-sm tracking-wide" href="/causestudies">CASE STUDIES</Link>
          </NavbarItem>

          <NavbarItem>
            <Link className="text-white font-medium cursor-pointer text-sm tracking-wide" href="/blogs">BLOG</Link>
          </NavbarItem>

          <NavbarItem>
            <Link className="text-white font-medium cursor-pointer text-sm tracking-wide" href="/?scrollTo=about">ABOUT US</Link>
          </NavbarItem>

          <NavbarItem>
            <Link className="text-white font-medium cursor-pointer text-sm tracking-wide" href="#">INSIGHTS</Link>
          </NavbarItem>

        </NavbarContent>


        <NavbarContent justify="end" className="hidden sm:inline-flex">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/?scrollTo=contact"
              className="text-white bg-blue-600 font-semibold rounded-full px-6 text-xs"
            >
              GET IN TOUCH <GoArrowRight className="text-[1rem]" />
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-[#0A142F] pt-[1rem] overflow-y-auto pb-20">

          {/* Mobile Accordion for Services */}
          <NavbarMenuItem>
            <Accordion
              isCompact
              selectionMode="multiple"
              className="px-0"
              itemClasses={{
                trigger: "py-3",
                title: "text-lg font-bold text-white",
                indicator: "text-white rotate-90 data-[open=true]:-rotate-90",
                content: "pb-4"
              }}
            >
              <AccordionItem key="1" aria-label="Services" title="SERVICES">
                <div className="flex flex-col gap-2 pl-4">
                  {servicesData.map((item, i) => (
                    <Link key={i} href={item.href} className="flex items-center gap-3 text-white/90 py-1.5 text-sm">
                      <span className="text-blue-400">{item.icon}</span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </AccordionItem>
            </Accordion>
          </NavbarMenuItem>

          {/* Mobile Accordion for Industries */}
          <NavbarMenuItem>
            <Accordion
              isCompact
              selectionMode="multiple"
              className="px-0"
              itemClasses={{
                trigger: "py-3",
                title: "text-lg font-bold text-white",
                indicator: "text-white rotate-90 data-[open=true]:-rotate-90",
                content: "pb-4"
              }}
            >
              <AccordionItem key="2" aria-label="Industries" title="INDUSTRIES">
                <div className="flex flex-col gap-2 pl-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Industries</p>
                  {industriesData.map((item, i) => (
                    <Link key={i} href={item.href} className="flex items-center gap-3 text-white/90 py-1.5 text-sm">
                      <span className="text-blue-400">{item.icon}</span>
                      {item.title}
                    </Link>
                  ))}
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-2">On Demand Apps</p>
                  {onDemandAppsData.map((item, i) => (
                    <Link key={i} href={item.href} className="flex items-center gap-3 text-white/90 py-1.5 text-sm">
                      <span className="text-blue-400">{item.icon}</span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </AccordionItem>
            </Accordion>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link className="w-full text-white py-3 text-lg font-bold border-b border-white/10" href="/causestudies">CASE STUDIES</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full text-white py-3 text-lg font-bold border-b border-white/10" href="/blogs">BLOG</Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link className="w-full text-white py-3 text-lg font-bold border-b border-white/10" href="/?scrollTo=about">ABOUT US</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full text-white py-3 text-lg font-bold border-b border-white/10" href="/">INSIGHTS</Link>
          </NavbarMenuItem>

          <NavbarMenuItem className="flex flex-col gap-4 mt-6">
            <Button
              as={Link}
              color="primary"
              href="/?scrollTo=contact"
              className="text-white bg-blue-600 w-full font-bold py-6 rounded-full"
            >
              GET IN TOUCH <GoArrowRight className="text-[1.2rem]" />
            </Button>
            <Button
              as={Link}
              bordered
              href="#"
              className="text-white bg-transparent border-1 border-white w-full font-bold py-6 rounded-full"
            >
              FOR ENTREPRENEURS <GoArrowRight className="text-[1.2rem]" />
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>

        <MegaMenu isOpen={isMegaMenuOpen} activeMenu={activeMenu} industries={industries} />
      </Navbar >
    </>
  );
}
