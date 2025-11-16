"use client";
import Image from "next/image";
import React from "react";
import image1 from "@/assets/images/GlobalClients/Artificial_Intelligence.jpg";
import image2 from "@/assets/images/GlobalClients/MachineLearning.jpg";
import image3 from "@/assets/images/GlobalClients/QualityAssurance.jpg";
import image4 from "@/assets/images/GlobalClients/BlockchainDevelopment.jpg";
import image5 from "@/assets/images/GlobalClients/MobileDevelopment.jpg";
import image6 from "@/assets/images/GlobalClients/CloudSolutions.jpg";
import image7 from "@/assets/images/GlobalClients/ProcessAutomation.jpg";
import image8 from "@/assets/images/GlobalClients/InnovationConsulting.jpg";
const globalClientData = [
  {
    id: 1,
    title: "Artificial Intelligence",
    image: image1,
  },
  {
    id: 2,
    title: "Machine Learning",
    image: image2,
  },
  {
    id: 3,
    title: "Quality Assurance",
    image: image3,
  },
  {
    id: 4,
    title: "Blockchain Development",
    image: image4,
  },
  {
    id: 5,
    title: "Mobile Development",
    image: image5,
  },
  {
    id: 6,
    title: "Cloud Solutions",
    image: image6,
  },
  {
    id: 7,
    title: "Process Automation",
    image: image7,
  },
  {
    id: 8,
    title: "Innovation Consulting",
    image: image8,
  },
];
const GlobalClients = () => {
  return (
    <section className="px-[1.5rem] py-[2.5rem] relative w-full flex flex-col gap-[1rem] justify-center items-center bg-[#0A142F]">
      <div className="sec-header flex flex-col justify-center items-center">
        <h1 className="text-[1.5rem] md:text-[2.5rem] font-[600] text-[#ffffff] leading-[1.3] mb-[1.5rem]">
          Professional Web Design for Global Clients
        </h1>
      </div>

      <div className="flex flex-wrap gap-[0.5rem] max-w-[80rem]">
        {globalClientData?.map((item) => {
          return (
            <div
              key={item?.id}
              className="globalClient group w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.5rem)] rounded-[1rem] overflow-hidden relative before:bg-[linear-gradient(180deg,#1E1E1E_0%,rgba(30,30,30,0)_53.37%,#1E1E1E_100%)] before:absolute before:inset-0 overflow-hidden transition-all duration-300"
            >
              <Image
                src={item?.image}
                alt={item?.title}
                className="rounded-[1rem] h-[26rem] w-full object-[center] object-cover transition-all duration-300 group-hover:scale-110"
              />
              <h5 className="text-[#F8FAFC] text-[1.25rem] font-[600] mt-[1rem] mb-[0.5rem] absolute top-0 left-[1rem] text-[1.1rem]">
                {item?.title}
              </h5>
            </div>
          );
        })}
      </div>
      {/* <Image
        src={clientGlobe}
        alt="clientGlobe"
        className="w-full  "
      /> */}
    </section>
  );
};

export default GlobalClients;
