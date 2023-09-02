"use client";
import "@/app/globals.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  const tabs = ["about", "experience", "projects", "contact"];

  return (
    <div className="w-full shadow-lg h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-12">
      <motion.div
        className="h-full py-1 flex items-center justify-between"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <Link href="/" scroll>
            <Image
              src="/assets/images/CM.jpeg"
              width={0}
              height={0}
              sizes="40px"
              alt="logo"
              priority
              className="hover:bg-hoverColor w-auto h-auto"
            />
          </Link>
        </div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <li>Home</li>
            </Link>
            {tabs.map((tab, i) => (
              <Link
                key={tab}
                href={`#${tab}`}
                scroll={true}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <li className="capitalize">
                  <span className="font-normal text-textGreen">{`0${
                    i + 1
                  }. `}</span>
                  {tab}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
