import React from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { industriesData, onDemandAppsData, servicesData } from "./menuData";
import { FaAward } from "react-icons/fa6";

const MegaMenu = ({ isOpen, activeMenu, industries, services }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, display: "none" }}
            animate={isOpen ? { opacity: 1, y: 0, display: "block" } : { opacity: 0, y: 10, transitionEnd: { display: "none" } }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#0A142F] text-white shadow-xl border-t border-white/10 overflow-hidden"
        >
            <div className="container mx-auto px-6 py-10 flex gap-8">
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col gap-10">
                    {/* Debugging Logs */}
                    {isOpen && activeMenu === "industries" && console.log("MegaMenu Industries Prop:", industries)}
                    {isOpen && activeMenu === "industries" && console.log("MegaMenu Static Data:", industriesData)}

                    {/* Services Section */}
                    {activeMenu === "services" && (
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Services</h3>
                            <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                                {/* Use dynamic services if available, otherwise static */}
                                {(services?.length > 0 ? services : servicesData).map((item, index) => {
                                    const title = item.fields?.title || item.title;
                                    const slug = item.fields?.slug;
                                    const href = slug ? `/services/${slug}` : item.href;

                                    // Find icon from static data
                                    const staticMatch = servicesData.find(s => s.title.toLowerCase() === title.toLowerCase());
                                    const icon = staticMatch?.icon || <FaAward />; // Default icon

                                    return (
                                        <NavItem
                                            key={index}
                                            title={title}
                                            icon={icon}
                                            href={href}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Industries & On Demand Section */}
                    {activeMenu === "industries" && (
                        <>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Industries</h3>
                                <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                                    {(industries?.length > 0 ? industries : industriesData).map((item, index) => {
                                        const title = item.fields?.title || item.title;
                                        const slug = item.fields?.slug;
                                        const href = slug ? `/industry/${slug}` : item.href;

                                        // Find icon from static data
                                        const staticMatch = industriesData.find(s => s.title.toLowerCase() === title.toLowerCase());
                                        const icon = staticMatch?.icon || <FaAward />; // Default icon

                                        return (
                                            <NavItem
                                                key={index}
                                                title={title}
                                                icon={icon}
                                                href={href}
                                            />
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">On Demand Apps</h3>
                                <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                                    {onDemandAppsData.map((item, index) => (
                                        <NavItem key={index} {...item} />
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                </div>

            </div>
        </motion.div>
    );
};

export default MegaMenu;
