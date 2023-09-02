"use client";
import React from "react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <motion.section
      id="home"
      className="max-w-5xl ml-auto py-32 flex flex-col gap-4 lgl:gap-8"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h3 className="text-lg tracking-wide text-textGreen">Hi, my name is</h3>
      <h1 className="text-4xl lgl:text-6xl font-sans font font-semibold flex flex-col">
        Chase Mathis.{" "}
        <span className="text-textDark py-2">A student developer</span>
      </h1>
      <p className="text-textDark font-sans max-w-lg">
        I am a Senior Computer Science and Computer Engineering student at the
        University of Wisconsin - Madison. I provide both strong technical
        knowledge and strong problem solving skills to projects that I work on
      </p>
      <a href="/assets/chase_mathis_resume.pdf" target="_blank">
        <button className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
          Resume
        </button>
      </a>
    </motion.section>
  );
}

export default Banner;
