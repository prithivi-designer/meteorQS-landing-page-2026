// app/faq/page.tsx (Next.js 13+ App Router example)
"use client";

import { useState, forwardRef } from "react";
import { Card } from "@heroui/react";

const faqs = [
  {
    question: "Do you work with startups as well as enterprises?",
    answer:
      "Yes, we partner with both startups and enterprises. For startups, we provide end-to-end support — from MVP development to scaling. For enterprises, we deliver robust, enterprise-grade solutions tailored to complex requirements and existing systems.",
  },
  {
    question: "How do you ensure project confidentiality and data security?",
    answer:
      "We follow strict security protocols including NDA agreements, role-based access controls, data encryption, secure cloud hosting, and compliance with global standards (ISO, GDPR, HIPAA where applicable). Your intellectual property and data are always protected.",
  },
  {
    question: "How do you handle project communication and progress tracking?",
    answer:
      "We use agile methodologies with weekly sprints, demo sessions, and transparent reporting. Communication is managed through tools like Jira, Trello, Slack, or Microsoft Teams, ensuring you have full visibility of progress, timelines, and deliverables at every stage.",
  },
];

const FAQPage = forwardRef(({ sectionRef }, ref) => {
  const [activeIndex, setActiveIndex] = useState(1); // default second FAQ open

  return (
    <>
      <div ref={sectionRef}></div>
      <div className="bg-[#0c1b3a] text-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-col w-full md:flex-row items-center gap-6">
            {/* Left: Questions List */}
            <div className="flex flex-col gap-2 bg-[#0A142F] rounded-lg relative md:left-[4rem] z-10 max-w-[60rem] w-[100%]">
              {faqs.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-left transition ${
                    activeIndex === idx
                      ? "bg-blue-600 text-white"
                      : "bg-transparent hover:bg-blue-900/50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="min-w-3 min-h-3 rounded-full bg-blue-500"></span>
                    {faq.question}
                  </span>
                  <span className="text-xl">›</span>
                </button>
              ))}
            </div>

            {/* Right: Answer */}
            <Card className="bg-white text-black p-6 rounded-2xl shadow-md md:h-[26rem] overflow-auto md:pl-[4rem] w-full">
              <h2 className="font-semibold text-lg mb-4">
                {faqs[activeIndex].question}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {faqs[activeIndex].answer}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
});
export default FAQPage;
