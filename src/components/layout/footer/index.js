import Link from "next/link";
import React from "react";

import logoFooter from "@/assets/images/landing/footer-logo.png";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
const servicesMenu = [
  {
    title: "Web Development",
    url: "/",
    target: "_self",
  },
  { title: "Mobile App Development", url: "/", target: "_self" },
  { title: "Mobile App Development", url: "/", target: "_self" },
  { title: "Machine Learning", url: "/", target: "_self" },
  { title: "Devops Engineeering", url: "/", target: "_self" },
  { title: "Internet Of Things (IoT)", url: "/", target: "_self" },
  { title: "QA Automation", url: "/", target: "_self" },
];
const quickLinkMenu = [
  { title: "Home", key: "home", url: "/", target: "_self" },
  { title: "About Us", key: "about", url: "/", target: "_self" },
  { title: "Services", key: "services", url: "/", target: "_self" },
  // { title: "Industries ", key: "industries", url: "/", target: "_self" },
  { title: "Testimonials", key: "testimonials", url: "/", target: "_self" },
  { title: "Case Studies", key: "caseStudies", url: "/", target: "_self" },
  { title: "Blogs", key: "blog", url: "/", target: "_self" },
  // { title: "Careers", key: "careers", url: "/", target: "_self" },
  // { title: "Contact Us", key: "contactus", url: "/", target: "_self" },
  { title: "FAQ's", key: "faq", url: "/", target: "_self" },
];
const FooterMenuList = ({ menuList, heading, setIsModalOpen, handleClick }) => {
  return (
    <>
      <h6 className="text-[#979797] text-[0.95rem] font-[600] uppercase font-inter">
        {heading}
      </h6>
      <ul className="flex flex-col gap-[0.25rem]">
        {menuList?.map((item, index) => {
          return (
            <li key={`${item?.title}`}>
              <Link
                color="background"
                href={item?.url}
                target={item?.target}
                onClick={(e) => handleClick(e, item?.key)}
                className={`font-[300] text-[#ffffff] text-[0.9rem] font-inter `}
              >
                {item?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default function Footer({ onNavigate, metServices }) {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = (e, sectionKey) => {
    if (pathname !== "/") {
      router.push("/?scrollTo=" + sectionKey);
    } else {
      e.preventDefault();
      if (onNavigate) onNavigate(sectionKey);
    }
  };
  console.log("metServicesmetServices", metServices);
  return (
    <>
      <footer
        className="px-[1.5rem] py-[4rem] w-full flex flex-col items-center justify-end gap-[1rem] bg-[#040D26]"
        style={{ alignItems: "anchor-center" }}
      >
        <div className="flex flex-wrap w-full gap-[1.2rem] justify-between max-w-[80rem] mx-auto">
          <div
            className="flex flex-col gap-[1rem] w-full lg:w-[calc(40%-1.2rem)]"
            data-aos="fade-up"
          >
            <Image
              src={logoFooter}
              alt="logoFooter"
              className="max-w-[16rem]"
            />
            <h2 className="text-[#FFFFFF99] text-[1rem] xl:text-[1.15rem] max-w-[27rem] font-[500] leading-[1.2]">
              Our brand name and motto embody our unwavering commitment to
              delivering services with agility, quality, and efficiency,
              ensuring that our clients and international business partners
              receive unmatched excellence.
            </h2>
          </div>
          <div
            className="flex flex-col gap-[1rem] w-full xsm:w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.2rem)] lg:w-[calc(20%-1.2rem)]"
            data-aos="fade-up"
          >
            {/* <FooterMenuList
              menuList={servicesMenu}
              heading="Services"
              handleClick={handleClick}
            /> */}
            <h6 className="text-[#979797] text-[0.95rem] font-[600] uppercase font-inter">
              Services
            </h6>
            <ul className="flex flex-col gap-[0.25rem]">
              {/* {(item) => (
                <li key={item.fields.title}>
                  <Link
                    href={`/services/${item.fields.slug}`}
                    target={"_self"}
                    className="font-[500] text-[#ffffff]"
                  >
                    {item.fields.title}
                  </Link>
                </li>
              )} */}
              {metServices?.map((item, index) => {
                return (
                  <li key={`${item.fields.title}`}>
                    <Link
                      color="background"
                      href={`/services/${item.fields.slug}`}
                      // onClick={(e) => handleClick(e, item?.key)}
                      className={`font-[300] text-[#ffffff] text-[0.9rem] font-inter `}
                    >
                      {item.fields.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="flex flex-col gap-[1rem] w-full xsm:w-[calc(50%-1.2rem)] sm:w-[calc(33.33%-1.2rem)] lg:w-[calc(20%-1.2rem)]"
            data-aos="fade-up"
          >
            <FooterMenuList
              menuList={quickLinkMenu}
              heading="Quick Links"
              handleClick={handleClick}
            />
          </div>
        </div>
        <div
          className="flex flex-wrap w-full gap-[1.2rem] justify-between items-center max-w-[80rem] mx-auto"
          data-aos="fade-up"
        >
          <h5 className="text-[#FFFFFF] text-[0.9rem] xl:text-[0.9rem] font-[400] leading-[1.4]">
            MeteoriQs Towers, <br />
            1B, Ground Floor Business Center, <br />
            SheshadhriNagar, <br />
            Nedungundram, <br />
            New Perungalathur, <br />
            Chennai-127, India
          </h5>
          <ul className="flex gap-4 text-white text-[1.1rem] mt-[1rem]">
            <li>
              <Link
                href="https://www.facebook.com/meteoriQs?mibextid=kFxxJD"
                target="_blank"
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/MeteoriQs" target="_blank">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/meteoriqs/" target="_blank">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/meteoriqs/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
