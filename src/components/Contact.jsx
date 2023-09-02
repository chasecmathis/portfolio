"use client"
import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-xl mx-auto py-10 xl:py-32 flex flex-col gap-6 items-center justify-center"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <SectionTitle title="Contact" number={4} divider={false} />
      <p className="text-center text-textDark font-sm mt-2">
        My inbox is always open! Contact me for opportunities, questions, or if
        you just want to hi. I will get back as fast as I can.
      </p>
      <a href="mailto:chase.mathis313@gmail.com" target="_blank">
        <button className="max-w-[125px] px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
          Contact Me!
        </button>
      </a>
    </motion.section>
  );
}

export default Contact;
