// app/happy-customers/page.tsx
"use client";

import React, { forwardRef } from "react";
import { Card } from "@heroui/react";
import Image from "next/image";
import clientMapping from "@/assets/images/ClientMapping/image1.png";

const ClientMapping = forwardRef(({ happyEmpSec }, ref) => {
  return (
    <div className="bg-[#0c1b3a] text-white px-0 py-16" ref={happyEmpSec}>
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-6">Client Mapping</h3>

        <Image
          src={clientMapping} // replace with your map image
          alt="Client Map"
          width={800}
          height={400}
          className="rounded-lg object-contain w-full"
        />
      </div>
    </div>
  );
});

export default ClientMapping;
