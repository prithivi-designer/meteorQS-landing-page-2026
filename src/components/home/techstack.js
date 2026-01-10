"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

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

// Config: Define tabs + images with names for tooltips
const techTabs = [
  {
    key: "frontend",
    title: "Frontend",
    items: [
      { src: frontimage1, name: "React" },
      { src: frontimage2, name: "Angular" },
      { src: frontimage3, name: "Vue.js" },
      { src: frontimage4, name: "Next.js" },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    items: [
      { src: backimage1, name: "Node.js" },
      { src: backimage2, name: "Python" },
      { src: backimage3, name: "Java" },
      { src: backimage4, name: "PHP" },
      { src: backimage5, name: "Go" },
      { src: backimage6, name: ".NET" },
    ],
  },
  {
    key: "mobile",
    title: "Mobile",
    items: [
      { src: mobileimage1, name: "iOS" },
      { src: mobileimage2, name: "Android" },
      { src: mobileimage3, name: "Flutter" },
      { src: mobileimage4, name: "React Native" },
    ],
  },
  {
    key: "microsoft",
    title: "Microsoft",
    items: [
      { src: devopsimage1, name: "Azure" },
      { src: devopsimage2, name: "SharePoint" },
      { src: devopsimage3, name: "Power BI" },
      { src: devopsimage4, name: "Dynamics 365" },
      { src: devopsimage5, name: "Teams" },
      { src: devopsimage6, name: "Office 365" },
      { src: devopsimage7, name: "Yammer" },
      { src: devopsimage8, name: "OneDrive" },
      { src: devopsimage9, name: "Outlook" },
      { src: devopsimage10, name: "Exchange" },
      { src: devopsimage11, name: "OneNote" },
    ],
  },
  {
    key: "aiml",
    title: "AI & ML",
    items: [
      { src: almlimage1, name: "TensorFlow" },
      { src: almlimage2, name: "PyTorch" },
      { src: almlimage3, name: "OpenAI" },
      { src: almlimage4, name: "Keras" },
    ],
  },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="bg-[#0A142F] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Tech Stack
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our tech stack addresses complex challenges across sectors, utilizing the latest frameworks and tools to deliver robust solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 bg-[#0c1b3a]/50 p-6 rounded-3xl border border-white/5">
          {/* Tabs Navigation */}
          <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
            {techTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "px-6 py-4 rounded-xl text-left transition-all duration-300 whitespace-nowrap flex items-center justify-between group",
                  activeTab === tab.key
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                    : "bg-transparent text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <span className="text-lg font-medium">{tab.title}</span>
                {activeTab === tab.key && (
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse hidden md:block" />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-[#112242] rounded-2xl p-6">
            {techTabs.map((tab) => (
              <div
                key={tab.key}
                className={cn(
                  "grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500",
                  activeTab === tab.key ? "grid" : "hidden"
                )}
              >
                {tab.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative flex items-center justify-center p-4 rounded-xl bg-[#0A142F] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 aspect-square"
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                      {item.name}
                      <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
