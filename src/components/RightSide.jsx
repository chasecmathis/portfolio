"use client"
import React from "react";
import { motion } from "framer-motion";

function RightSide() {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight"
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="mailto:chase.mathis313@gmail.com" className="h-32">
        <p className="text-sm rotate-90 tracking-wide text-textDark hover:text-textGreen hover:-translate-y-2 transition-all duration-300">
          chase.mathis313@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-48 bg-textDark inline-flex" />
    </motion.div>
  );
}

export default RightSide;
