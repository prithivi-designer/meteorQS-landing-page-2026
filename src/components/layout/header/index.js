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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import { FaDiscord, FaSquareArrowUpRight, FaXTwitter } from "react-icons/fa6";
import logoWhite from "@/assets/images/landing/logo-blue.png";
import { useRouter } from "next/router";

export default function Header({ onNavigate, industries }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { scrollTo } = router.query;

  const handleClick = (e, sectionKey) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/?scrollTo=" + sectionKey);
    } else {
      setIsMenuOpen(false); // Close the menu after clicking
      if (onNavigate) onNavigate(sectionKey);
    }

    // Only handle scroll on home page
  };
  useEffect(() => {
    if (scrollTo && pathname === "/") {
      if (onNavigate) onNavigate(scrollTo);
    }
  }, [scrollTo, pathname, onNavigate]);
  // const menuItems = null;
  const menuItems = [
    { title: "About US", key: "about", url: "/", target: "_self" },
    { title: "Services", key: "services", url: "/", target: "_self" },
    { title: "Blog", key: "blog", url: "/", target: "_self" },
    { title: "Case studies", key: "caseStudies", url: "/", target: "_self" },
  ];

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-[#ffffff] backdrop-blur-sm relative fixed top-0 z-50 w-full border-0 shadow-none"
        classNames={{
          wrapper: "!max-w-[100%]",
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-[#0A142F]"
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
        {menuItems && (
          <NavbarContent
            className="hidden lg:flex lg:gap-[2rem]"
            justify="center"
          >
            {menuItems?.map((item, index) => {
              const isActive = pathname === item.url;
              return (
                <NavbarItem key={`${item.title}-${index}`}>
                  <Link
                    color="background"
                    href={item.url}
                    target={item.target}
                    onClick={(e) => handleClick(e, item.key)}
                    className={`font-[500] ${
                      isActive ? "text-[#000000]" : "text-[#000000]"
                    }`}
                  >
                    {item.title}
                  </Link>
                </NavbarItem>
              );
            })}

            <Dropdown>
              <DropdownTrigger>
                <Link className="cursor-pointer text-[#000000] font-[400]">
                  Industries
                </Link>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={industries}>
                {(item) => (
                  <DropdownItem key={item.fields.title}>
                    <Link
                      href={`/industry/${item.fields.slug}`}
                      target={"_self"}
                      className="font-[500] text-[#ffffff]"
                    >
                      {item.fields.title}
                    </Link>
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        )}

        <NavbarContent justify="end" className="hidden sm:inline-flex">
          <NavbarItem>
            <Button
              as={Link}
              color="default"
              href="/contactus"
              className="text-[#FFFFFF] bg-[#052460]"
            >
              Contact US <GoArrowRight className="text-[1.2rem]" />
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-[#0f0f0ed4] pt-[2rem]">
          {menuItems?.map((item, index) => {
            const isActive = pathname === item.url;
            return (
              <NavbarMenuItem key={`${item.title}-${index}`}>
                <Link
                  href={item.url}
                  target={item.target}
                  onClick={(e) => handleClick(e, item.key)}
                  size="lg"
                  className={`w-full text-[#ffffff] py-2 text-[1.75rem] leading-[1.2] font-[700] ${
                    isActive ? "text-secondary" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </NavbarMenuItem>
            );
          })}

          <NavbarMenuItem className="sm:hidden inline-flex">
            <Button
              as={Link}
              color="default"
              href="/contactus"
              className="text-[#052460] bg-[#FFFFFF] mt-[1.4rem] text-[1.15rem] leading-[1.2] !font-[700] py-[1rem] h-[auto]"
            >
              Contact US <GoArrowRight className="text-[1.2rem]" />
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
