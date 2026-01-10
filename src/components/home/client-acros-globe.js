"use client";
import Image from "next/image";
import React, { forwardRef } from "react";
import clientMapping from "@/assets/images/clientGlobe-BG.jpg";
import WorldMap from "./world-map";

// const ClientAcrossGlobe = ({ globeSec, globeHeading, globeParas }) => {
const ClientAcrossGlobe = forwardRef(
  ({ sectionRef, globeSec }, ref) => {
    return (
      <>
        <div ref={sectionRef}></div>
        <section
          ref={globeSec}
          className="py-[4rem] px-[1.5rem] relative w-full flex flex-col justify-center items-center bg-[#0A142F] min-h-[600px]"
        >
          <div className="w-full max-w-[1400px] h-[500px] lg:h-[700px] relative p-4 border border-blue-500/20 rounded-[2rem] bg-[#0E1E45] shadow-2xl flex flex-col items-center justify-start overflow-hidden">
            <h3 className="text-white text-3xl font-bold mt-8 mb-4 z-10">Client Mapping</h3>
            <div className="w-full h-full absolute inset-0">
              <WorldMap />
            </div>
          </div>
        </section>
      </>
    );
  }
);

export default ClientAcrossGlobe;
