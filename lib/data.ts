import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import truetrekImg from "@/public/truetrek.png";
import profileeImg from "@/public/mess.jpeg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Le Wagon AI Software Development Bootcamp",
    location: "Barcelona, Spain",
    description:
      "I completed an intensive 9-week bootcamp that trained me as a full-stack developer through hands-on, real-world projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
  {
    title: "Junior Software Engineer Internship",
    location: "Cairo, Egypt",
    description:
      "During my internship, I develop mobile applications by designing the user interface and connecting the app to the backend.",
    icon: React.createElement(LuGraduationCap),
    date: "2026",
  },
] as const;

export const projectsData = [
  {
    title: "TrueTrek",
    description:
      "I worked as a full-stack developer on this social travel app built to showcase unfiltered destinations through community-driven content.",
    tags: ["LLMs", "Bootstrap", "Ruby on Rails", "Javascript"],
    imageUrl: truetrekImg,
  }
] as const;

export const skillsData = [
  "React Native",
  "React",
  "Typescript",
  "HTML",
  "CSS",
  "JavaScript",
  "Ruby on Rails",
  "Git",
  "Github",
  "Graphite",
  "SQL",
  "Tailwind",
  "Bootstrap",
  "Ruby",
  "LLMs",
  "PostgreSQL",
] as const;
