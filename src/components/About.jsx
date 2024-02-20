"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineBulb } from "react-icons/ai";

const skills = ["Java", "JavaScript", "React", "SQL", "C", "Python"];

function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto py-32 flex flex-col gap-8 max-w-4xl"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <SectionTitle title="About Me" number={1} divider />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full text-base text-textDark font-sans flex flex-col gap-4">
          <p>
            Hello! My name is Chase and I enjoy building applications that do
            cool stuff on the internet. My interest in computers and code
            started when I built my first PC in 2016, but I didn&apos;t start
            programming until my first Java course in 2021.
          </p>
          <p>
            Today, I have had the pleasure of working at{" "}
            <span>
              <Link
                href="https://expediagroup.com/"
                target="_blank"
                className="text-textGreen"
              >
                Expedia Group
              </Link>
            </span>{" "}
            where I figured out how to apply the software engineering skills I
            learned in class to real world problems. My interest lies in
            building up full stack applications that enhance user experience. I
            am currently in my senior year of college and am looking for
            opportunities!
          </p>
          <p>Here are some of the technologies that I am familiar with:</p>
          <ul className="max-w-sm grid grid-cols-2 mt-3">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center font-mono text-sm my-2">
                <span className="text-textGreen mr-2">
                  <AiOutlineBulb />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 h-80 relative group">
          <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300">
            <Image
              src="/assets/images/profile.png"
              width={0}
              height={0}
              sizes="400px"
              alt="profile image"
              className="rounded-lg h-auto w-auto object-cover lgl:grayscale lgl:group-hover:grayscale-0"
            />
            <div className="hidden lgl:inline-block absolute w-full h-80 top-0 left-0 bg-textGreen/25 rounded-lg group-hover:bg-transparent duration-300" />
          </div>
          <div className="hidden lgl:inline-block absolute w-full h-80 top-4 left-4 border-2 border-textGreen rounded-lg group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </motion.section>
  );
}

export default About;
