import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavItem = ({ icon, title, href }) => {
    return (
        <Link href={href || "#"} className="group flex items-center gap-3 py-2 cursor-pointer">
            <div className="relative h-[24px] w-[24px] overflow-hidden flex-shrink-0">
                <motion.div
                    className="absolute top-0 left-0 w-full flex flex-col items-center text-secondary text-xl"
                    initial={{ y: 0 }}
                    whileHover={{ y: -24 }}
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                >
                    <span className="h-[24px] w-[24px] flex items-center justify-center">{icon}</span>
                    <span className="h-[24px] w-[24px] flex items-center justify-center text-blue-400">{icon}</span>
                </motion.div>
            </div>
            <span className="text-white group-hover:text-blue-400 font-medium transition-colors text-sm">
                {title}
            </span>
        </Link>
    );
};

export default NavItem;
