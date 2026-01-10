// app/happy-customers/page.tsx
"use client";

import React, { forwardRef } from "react";
import mainImage from "@/assets/images/HappyEmployees/image1.png";
import { AwardFeature } from "@/components/ui/award-feature";

const HappyCustomers = forwardRef(
  ({ happyEmpSec }, ref) => {
    return (
      <div ref={happyEmpSec} className="bg-[#0c1b3a]">
        <AwardFeature
          title="Happy employees, Happy customers"
          description="Recognized as a 'Great Place to Work,' we believe a positive workplace culture not only boosts employee happiness but directly enhances customer delight."
          imageSrc={mainImage}
          imageAlt="Great Place to Work Award"
        />
      </div>
    );
  }
);

export default HappyCustomers;
