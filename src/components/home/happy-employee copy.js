// app/happy-customers/page.tsx
"use client";

import React, { forwardRef } from "react";
import { Card } from "@heroui/react";
import Image from "next/image";
import mainImage from "@/assets/images/HappyEmployees/image1.png";
import image1 from "@/assets/images/HappyEmployees/image2.png";
import image2 from "@/assets/images/HappyEmployees/image3.png";
import image3 from "@/assets/images/HappyEmployees/image4.png";
import image4 from "@/assets/images/HappyEmployees/image5.png";
import image5 from "@/assets/images/HappyEmployees/image6.png";
import image6 from "@/assets/images/HappyEmployees/image7.png";
import clientMapping from "@/assets/images/ClientMapping/image1.png";

const imageList = [image1, image2, image3, image4, image5, image6];

// export default function HappyCustomers({
//   happyEmpSec,
//   happyEmpHeading,
//   happyEmpParas,
// }) {
const HappyCustomers = forwardRef(
  ({ happyEmpSec, happyEmpHeading, happyEmpParas }, ref) => {
    return (
      <div
        className="min-h-screen bg-[#0c1b3a] text-white px-6 py-16"
        ref={happyEmpSec}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
            {/* Left: Heading */}
            <div>
              <h2 className="text-4xl font-bold mb-4" ref={happyEmpHeading}>
                Happy employees, <br /> Happy customers
              </h2>
              <p className="text-gray-300 text-lg" ref={happyEmpParas}>
                Recognized as a 'Great Place to Work,' we believe a positive
                workplace culture not only boosts employee happiness but
                directly enhances customer delight.
              </p>
            </div>

            {/* Right: Great Place to Work Badge */}
            <div className="flex justify-center md:justify-end">
              <Image
                src={mainImage} // replace with your badge image
                alt="Great Place to Work"
                width={180}
                height={200}
                className="object-contain happyEmpImage"
              />
            </div>
          </div>

          {/* Awards Section */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {imageList?.map((img, idx) => (
              <Image
                key={idx}
                src={img} // replace with your badge image
                alt="Users Love Us"
                width={100}
                height={120}
                className="object-contain happyEmpImage"
              />
            ))}
          </div>

          {/* Client Mapping Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Client Mapping</h3>
            <Card className="bg-white rounded-2xl p-4 mx-auto max-w-3xl ClientMapImage">
              <Image
                src={clientMapping} // replace with your map image
                alt="Client Map"
                width={800}
                height={400}
                className="rounded-lg object-contain w-full "
              />
            </Card>
          </div>
        </div>
      </div>
    );
  }
);

export default HappyCustomers;
