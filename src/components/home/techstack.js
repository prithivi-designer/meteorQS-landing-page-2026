"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

// Import images
import frontimage1 from "@/assets/images/techStack/front-image1.png";
import frontimage2 from "@/assets/images/techStack/front-image2.png";
import frontimage3 from "@/assets/images/techStack/front-image3.png";
import frontimage4 from "@/assets/images/techStack/front-image4.png";

import backimage1 from "@/assets/images/techStack/back-image1.png";
import backimage2 from "@/assets/images/techStack/back-image2.png";
import backimage3 from "@/assets/images/techStack/back-image3.png";
import backimage4 from "@/assets/images/techStack/back-image4.png";
import backimage5 from "@/assets/images/techStack/back-image5.png";
import backimage6 from "@/assets/images/techStack/back-image6.png";

import devopsimage1 from "@/assets/images/techStack/devops-image1.png";
import devopsimage2 from "@/assets/images/techStack/devops-image2.png";
import devopsimage3 from "@/assets/images/techStack/devops-image3.png";
import devopsimage4 from "@/assets/images/techStack/devops-image4.png";
import devopsimage5 from "@/assets/images/techStack/devops-image5.png";
import devopsimage6 from "@/assets/images/techStack/devops-image6.png";
import devopsimage7 from "@/assets/images/techStack/devops-image7.png";
import devopsimage8 from "@/assets/images/techStack/devops-image8.png";
import devopsimage9 from "@/assets/images/techStack/devops-image9.png";
import devopsimage10 from "@/assets/images/techStack/devops-image10.png";
import devopsimage11 from "@/assets/images/techStack/devops-image11.png";

import mobileimage1 from "@/assets/images/techStack/mobile-image1.png";
import mobileimage2 from "@/assets/images/techStack/mobile-image2.png";
import mobileimage3 from "@/assets/images/techStack/mobile-image3.png";
import mobileimage4 from "@/assets/images/techStack/mobile-image4.png";

import almlimage1 from "@/assets/images/techStack/alml-image1.png";
import almlimage2 from "@/assets/images/techStack/alml-image2.png";
import almlimage3 from "@/assets/images/techStack/alml-image3.png";
import almlimage4 from "@/assets/images/techStack/alml-image4.png";

// 🔹 Config: Define tabs + images
const techTabs = [
  {
    key: "frontend",
    title: "Frontend",
    techImages: [frontimage1, frontimage2, frontimage3, frontimage4],
  },
  {
    key: "backend",
    title: "Backend",
    techImages: [
      backimage1,
      backimage2,
      backimage3,
      backimage4,
      backimage5,
      backimage6,
    ],
  },
  {
    key: "microsoft",
    title: "Microsoft",
    techImages: [
      devopsimage1,
      devopsimage2,
      devopsimage3,
      devopsimage4,
      devopsimage5,
      devopsimage6,
      devopsimage7,
      devopsimage8,
      devopsimage9,
      devopsimage10,
      devopsimage11,
    ],
  },
  {
    key: "mobile",
    title: "Mobile",
    techImages: [mobileimage1, mobileimage2, mobileimage3, mobileimage4],
  },
  {
    key: "aiml",
    title: "AI & ML",
    techImages: [almlimage1, almlimage2, almlimage3, almlimage4],
  },
];

// 🔹 All images (you can customize per tab later if needed)
// const techImages = [frontimage1, frontimage2, frontimage3, frontimage4];

const TechStack = () => {
  const [selected, setSelected] = React.useState("frontend");
  const [placement, setPlacement] = React.useState("start"); // default desktop

  useEffect(() => {
    const handleResize = () => {
      setPlacement(window.innerWidth < 768 ? "top" : "start"); // mobile vs desktop
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="px-[1.5rem] py-[2.5rem] relative w-full flex flex-col gap-[1rem] justify-center items-center bg-[#0A142F]">
      {/* Header */}
      <div className="sec-header flex flex-col justify-center items-center">
        <h1 className="text-[1.1rem] md:text-[1.8rem] font-[600] text-[#ffffff] leading-[1.3] mb-[1.5rem] text-center">
          Our tech stack addresses <br />
          complex challenges across sectors.
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-[0.5rem] max-w-[80rem]">
        <div className="flex justify-start w-full max-w-[50rem] flex-col">
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            placement={placement}
            variant="solid"
            color="primary"
            radius="lg"
            classNames={{
              tabWrapper: "w-full",
              tabList:
                "bg-transparent p-2 rounded-xl shadow-md flex-wrap sm:flex-nowrap",
              cursor: "bg-[#ffffff]",
              tab: "text-gray-600 data-[selected=true]:text-[#052460] font-medium rounded-lg transition-all duration-300 hover:bg-transparent",
              tabContent: "group-data-[selected=true]:text-[#052460]",
              base: "gap-4",
              panel:
                "bg-[linear-gradient(90deg,rgba(16,147,255,0.07)_0%,rgba(16,147,255,0)_48.08%,rgba(16,147,255,0.07)_97.6%)] lg:w-[40rem] md:w-[30rem] sm:w-full rounded-xl",
            }}
          >
            {techTabs.map((tab) => (
              <Tab key={tab?.key} title={tab?.title}>
                <Card className="bg-transparent w-full h-full shadow-none">
                  <CardBody className="flex justify-center items-center w-full h-full">
                    <div className="flex flex-wrap gap-4 w-full h-full items-center justify-evenly px-[1rem] py-[2rem]">
                      {tab?.techImages?.map((img, idx) => (
                        <div key={idx} className="w-[calc(25%-1rem)]">
                          <Image
                            src={img}
                            alt={`tech-${idx}`}
                            className="h-[4rem] w-fit object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
