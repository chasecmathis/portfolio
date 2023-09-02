"use client";
import React from "react";
import { motion } from "framer-motion";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const contacts = [
  { icon: FiGithub, link: "https://github.com/chasecmathis" },
  { icon: FiLinkedin, link: "https://www.linkedin.com/in/chasecmathis/" },
  { icon: FiInstagram, link: "https://www.instagram.com/chasecmathis/" },
];

function LeftSide() {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {contacts.map((contact) => (
        <a key={contact.icon} href={`${contact.link}`} target="_blank">
          <span className="w-10 h-10 text-xl inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <contact.icon />
          </span>
        </a>
      ))}
      <span className="w-[2px] h-48 bg-textDark inline-flex" />
    </motion.div>
  );
}

export default LeftSide;
