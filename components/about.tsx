"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from film school, I worked in the film industry for several years,
        where I developed strong collaboration skills and a problem-solving mindset.
        Wanting to transition into a more technical field, I decided to pursue software development and enrolled in{" "}
        <span className="font-medium">Le Wagon’s AI Software Development bootcamp.</span>
      </p>

      <p>
        During the program, I built a solid foundation in full-stack web development. I also gained hands-on experience building and
        deploying full-stack applications with Ruby on Rails and integrating AI features using large
        language models and APIs, culminating in a team-based AI-powered final project.
      </p>
    </motion.section>
  );
}
