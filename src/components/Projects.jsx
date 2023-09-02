"use client"
import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

import { FiGithub } from "react-icons/fi";

import { motion } from "framer-motion";

const projects = [
  {
    name: "MewDex",
    description:
      "A web app built for viewing all Pokémon and their traits. Also allows for Pokémon team building and analysis. Built using the PokéAPI and NextJS, deployed using Vercel",
    link: "https://mewdex.net",
    repo: "https://github.com/chasecmathis/mewdex",
    tech: ["JavaScript", "NextJS", "React", "HTML/CSS", "Git"],
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="mx-auto py-32 flex flex-col gap-8 max-w-5xl"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <SectionTitle title="My Projects" number={3} divider />
      {projects.map((project, i) => (
        <div key={project.name} className="flex flex-col justify-center mt-10 items-center gap-28 w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href={`${project.link}`}
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300"
            >
              <Image
                src={`/assets/images/${project.name}.png`}
                alt="project image"
                width="0"
                height="0"
                sizes="100vh"
                className="w-full h-auto object-cover lgl:grayscale lgl:group-hover:grayscale-0"
              />
              <div className="hidden lgl:inline-block absolute w-full h-full top-0 left-0 bg-textGreen/25 group-hover:bg-transparent duration-300" />
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="text-sm text-textGreen font-mono tracking-wide">
                Project No. {i + 1}
              </p>
              <h2 className="font-sans text-2xl font-semibold">
                {project.name}
              </h2>
              <p className="bg-bodyLight text-sm p-2 md:p-6 rounded-md shadow-md font-sans">
                {project.description}
              </p>
              <ul className="text-xs md:text-sm font-mono tracking-wide gap-2 md:gap-5 justify-between text-textDark flex">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="flex text-2xl gap-4 hover:text-textGreen hover:-translate-y-2 transition-all duration-300">
                <a href={`${project.repo}`} target="_blank">
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  );
}

export default Projects;
