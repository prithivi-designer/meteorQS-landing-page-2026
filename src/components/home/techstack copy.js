"use client";
import Image from "next/image";
import React from "react";
import image1 from "@/assets/images/techStack/image1.png";
import image2 from "@/assets/images/techStack/image2.png";
import image3 from "@/assets/images/techStack/image3.png";
import image4 from "@/assets/images/techStack/image4.png";
import image5 from "@/assets/images/techStack/image5.png";
import image6 from "@/assets/images/techStack/image6.png";
import image7 from "@/assets/images/techStack/image7.png";
import image8 from "@/assets/images/techStack/image8.png";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
const TechStack = () => {
  const [selected, setSelected] = React.useState("frontend");
  return (
    <section className="px-[1.5rem] py-[2.5rem] relative w-full flex flex-col gap-[1rem] justify-center items-center bg-[#0A142F]">
      <div className="sec-header flex flex-col justify-center items-center">
        <h1 className="text-[1.1rem] md:text-[1.8rem] font-[600] text-[#ffffff] leading-[1.3] mb-[1.5rem]">
          Our tech stack addresses <br />
          complex challenges across sectors.
        </h1>
      </div>

      <div className="flex flex-wrap gap-[0.5rem] max-w-[80rem]">
        <div className="flex justify-start w-full max-w-[50rem] flex-col">
          <Tabs
            // aria-label="Options"
            // selectedKey={selected}
            // onSelectionChange={setSelected}
            // placement={"start"}
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            placement="start"
            variant="solid"
            color="primary"
            radius="lg"
            classNames={{
              tabWrapper: "w-full",
              tabList: "bg-transparent p-2 rounded-xl shadow-md",
              cursor: "bg-[#ffffff]",
              // cursor: "bg-gradient-to-r from-indigo-500 to-purple-500",
              tab: "text-gray-600 data-[selected=true]:text-[#052460] font-medium rounded-lg transition-all duration-300 hover:bg-transparent",
              tabContent: "group-data-[selected=true]:text-[#052460]",
              base: "gap-4",
              panel:
                "bg-[linear-gradient(90deg,rgba(16,147,255,0.07)_0%,rgba(16,147,255,0)_48.08%,rgba(16,147,255,0.07)_97.6%)] w-full",
            }}
          >
            <Tab key="frontend" title="Frontend">
              <Card className="bg-transparent w-full h-full shadow-none">
                <CardBody className="flex justify-center items-center w-full h-full">
                  <div className="flex flex-wrap gap-4 w-full h-full items-center justify-evenly px-[1rem] py-[2rem]">
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image1}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image2}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image3}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image4}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image5}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image6}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image7}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image8}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="backend" title="Backend">
              <Card className="bg-transparent w-full h-full shadow-none">
                <CardBody className="flex justify-center items-center w-full h-full">
                  <div className="flex flex-wrap gap-4 w-full h-full items-center justify-evenly px-[1rem] py-[2rem]">
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image1}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image2}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image3}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image4}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image5}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image6}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image7}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image8}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="microsoft" title="Microsoft">
              <Card className="bg-transparent w-full h-full shadow-none">
                <CardBody className="flex justify-center items-center w-full h-full">
                  <div className="flex flex-wrap gap-4 w-full h-full items-center justify-evenly px-[1rem] py-[2rem]">
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image1}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image2}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image3}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image4}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image5}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image6}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image7}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image8}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="mobile" title="Mobile">
              <Card className="bg-transparent w-full h-full shadow-none">
                <CardBody className="flex justify-center items-center w-full h-full">
                  <div className="flex flex-wrap gap-4 w-full h-full items-center justify-evenly px-[1rem] py-[2rem]">
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image1}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image2}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image3}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image4}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image5}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image6}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image7}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image8}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="AIML" title="AI & ML">
              <Card className="bg-transparent w-full h-full shadow-none">
                <CardBody className="flex justify-center items-center w-full h-full">
                  <div className="flex flex-wrap gap-4 w-full h-full items-center justify-evenly px-[1rem] py-[2rem]">
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image1}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image2}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image3}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image4}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image5}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image6}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image7}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                    <div className="w-[calc(25%-1rem)]">
                      <Image
                        src={image8}
                        className="h-[5rem] w-fit object-contain"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* <Image
        src={clientGlobe}
        alt="clientGlobe"
        className="w-full  "
      /> */}
    </section>
  );
};

export default TechStack;
