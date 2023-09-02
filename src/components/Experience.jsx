"use client";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { AiOutlineBulb } from "react-icons/ai";
import { motion } from "framer-motion";

const jobs = [
  {
    company: "Expedia Group",
    title: "Software Development Intern",
    time: "May 2023 - Aug 2023",
    bullets: [
      "Designed and implemented automatic incident management alerts in Atlassian Statuspage through a Java Spring microservice",
      "Created a Datadog dashboard that more accurately displayed data set availability, enhancing data pipeline observability",
      "Created a data quality check on incoming data sets using Python and Apache Airflow, reducing data quality quality issues in downstream pipelines",
      "Defined and documented the requirements, architectures, and business outcomes for my projects using Confluence",
    ],
  },
  {
    company: "UW-Madison DoIT",
    title: "Help Desk Agent",
    time: "July 2022 - Present",
    bullets: [
      "Daily troubleshoot software/hardware issues, internet connectivity problems, and user account errors with customers",
      "Collaborate with coworkers to ensure that incidents are resolved",
      "Use customer service, interpersonal, and communication skills to resolve customer issues via phone, chat, and email",
    ],
  },
  {
    company: "UW-Madison Housing",
    title: "Residential College Peer Mentor",
    time: "May 2021 - January 2022",
    bullets: [
      "Planned and facilitated a 1-hour long class session weekly, teaching students about diversity and inclusion on campus",
      "Led small group and individual meetings with residents for support, community building, and progress assessment in their transition to college",
      "Held office hours to answer questions and enable student success",
    ],
  },
];

function Experience() {
  const [select, setSelect] = useState(0);

  return (
    <motion.section
      id="experience"
      className="max-w-3xl mx-auto py-32 px-4"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <SectionTitle title="My Experience" number={2} divider />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-72 flex flex-col">
          {jobs.map((job, i) => (
            <li
              key={job.company}
              className={`border-l-2 ${
                i === select
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-textDark text-textDark"
              } font-mono hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
              onClick={(e) => setSelect(i)}
            >
              {job.company}
            </li>
          ))}
        </ul>
        <div className="w-full">
          <h3 className="flex gap-1 font-medium text-xl font-sans">
            {jobs[select].title}{" "}
            <span className="text-textGreen"> @ {jobs[select].company}</span>
          </h3>
          <p className="text-sm mt-1 font-medium text-textDark">
            {jobs[select].time}
          </p>
          <ul className="flex flex-col mt-6 gap-4">
            {jobs[select].bullets.map((bullet) => (
              <li key={bullet} className="text-textDark text-sm font-sans flex items-center gap-4">
                <span className="text-textGreen mr-2">
                  <AiOutlineBulb />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
