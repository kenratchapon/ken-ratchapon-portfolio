import React from 'react';

import { FcReading,FcConferenceCall,FcGraduationCap,FcSearch } from "react-icons/fc";

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import Giticon from '../assets/gitIcon.png';
import Tailwind from '../assets/tailwind.png';
import Nodejs from '../assets/node.png'
import Nextjs from '../assets/nextjs.png'
import MySQL from '../assets/mysql.png'
import Github from '../assets/github1.png'
import Jira from '../assets/jira.png'
import AgileAndScrum from '../assets/agilescrum.png'

import app1 from '../assets/projects/app1.png'
import app2 from '../assets/projects/app2.png'
import app3 from '../assets/projects/app3.png'
import Ecommerce from '../assets/projects/Ecommerce.png'
import adminDashboard from '../assets/projects/adminDashboard.png'
import coming from '../assets/projects/c.png'

export const experiencesData = [
  {
    title: "Self-Learning",
    location: "",
    description:
      "Currently, I am engaged in self-learning to stay updated with the latest developments in the field of computer science and technology. I am exploring new programming languages, frameworks, and tools to enhance my skills and knowledge.",
    icon: React.createElement(FcSearch),
    date: "June 2023 - Present",
  },
  {
    title: "Graduated",
    location: "Chiang Mai University",
    description:
      "I graduated from Chiang Mai University with a degree in Computer Science. During my time at the university, I gained a strong foundation in computer science principles and practical skills in software development.",
    icon: React.createElement(FcGraduationCap),
    date: "May 2023",
  },
  {
    title: "Cooperative Education",
    location: "Manao Software Co., Ltd.",
    description:
      "As part of my cooperative education program, I had the opportunity to work at Manao Software Co., Ltd. for six months. During this time, I collaborated with a team of developers on various software projects, gaining hands-on experience in software development and teamwork.",
    icon: React.createElement(FcConferenceCall),
    date: "April 2022 - September 2022 (6 months)",
  },
  {
    title: "Undergraduate",
    location: "Chiang Mai University",
    description:
      "I began my undergraduate studies at Chiang Mai University in 2019, majoring in Computer Science. This program provided me with a strong academic foundation and introduced me to various aspects of computer science, including programming, algorithms, and data structures.",
    icon: React.createElement(FcReading),
    date: "Start 2019",
  },
];
export const skills = [
  {
    title: "HTML",
    color: '#e08f8f',
    imageUrl: HTML,
  },
  {
    title: "CSS",
    color: '#77b7f3',
    imageUrl: CSS,
  },
  {
    title: "Javascript",
    color: '#f5ff88',
    imageUrl: JavaScript,
  },
  {
    title: "TailwindCSS",
    color: '#2ba583',
    imageUrl: Tailwind,
  },
  {
    title: "Node.js",
    color: '#7cffb5',
    imageUrl: Nodejs,
  },
  {
    title: "React.js",
    color: '#5ffff7',
    imageUrl: ReactImg,
  },
  {
    title: "Next.js",
    color: '#000000',
    imageUrl: Nextjs,
  },
  {
    title: "Firebase",
    color: '#ff9838',
    imageUrl: FireBase,
  },
  {
    title: "MySQL",
    color: '#3888ff',
    imageUrl: MySQL,
  },
  {
    title: "Git",
    color: '#ff823e',
    imageUrl: Giticon,
  },
  {
    title: "Github",
    color: '#7d7d7d',
    imageUrl: Github,
  },
  {
    title: "Jira",
    color: '#356bff',
    imageUrl: Jira,
  },
  {
    title: "Agile & Scrum",
    color: '#e25757',
    imageUrl: AgileAndScrum,
  },
];

export const projectsData = [
    {
      title: "Manao Meals Wep Application",
      description:
        "Coopertive eduction project. It is purposed to simplify and facilitate the management of lunch order information within the company",
      tags: ["Front-end","React","Typscript", "MUI", "Firebase", "Tailwind"],
      imageUrl: app1,
      code: '',
      visit: 'https://github.com/kenratchapon/my-cooperative-education-project/blob/main/Poster.pdf'
    },
    {
      title: "Pocket Flow",
      description:
        "Pocket Flow is a comprehensive financial management application designed to empower users with effective tools for managing their finances.",
      tags: ["Full-stack","Next.js","typescript", "Tailwind", "Shadcn/UI", "PostgreSQL"],
      imageUrl: app2,
      code: 'https://github.com/kenratchapon/pocket-flow',
      visit: 'https://pocket-flow.vercel.app/'
    },
    {
      title: "Ecommerce Store",
      description:
        "This project is the culmination of my learning journey from a tutorial to create a Ecommerce Store.",
      tags: ["front-end", "Next.js", "MySQL", "Tailwind", "Prisma", "shadcn/ui"],
      imageUrl: Ecommerce,
      code: 'https://github.com/kenratchapon/store-ecommerce',
      visit: 'https://ken-store-ecommerce.vercel.app/'
    },
    {
      title: "Store Admin Dashboard",
      description:
        "This project is the culmination of my learning journey from a tutorial to create a Admin Dashboard manage the ecommerce store.",
      tags: ["FULL stack", "Next.js", "MySQL", "Tailwind", "Prisma", "shadcn/ui"],
      imageUrl: adminDashboard,
      code: 'https://github.com/kenratchapon/store-dashboard',
      visit: 'https://ecommerce-store-admin-nu.vercel.app/'
    },
    {
      title: "CRUD app",
      description:
        "This project is a demonstration of CRUD operations using a RESTful API. It serves as a learning exercise to understand how data manipulation can be achieved through RESTful web services.",
      tags: ["front-end","React", "MUI", "Tailwind", "RESTFUL APIs"],
      imageUrl: app3,
      code: 'https://github.com/kenratchapon/crud-app-with-restfull-api',
      visit: 'https://crud-app-with-restfull-api.vercel.app/'
    },
    {
      title: "Social Media App",
      description:
        "currently developing a social media application using the MERN stack.",
      tags: ["full-stack","Mongodb", "Express", "React", "Node.js"],
      imageUrl: coming,
      code: '',
      visit: ''
    },
];