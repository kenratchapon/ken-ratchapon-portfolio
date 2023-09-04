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
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: Ecommerce,
      code: 'https://github.com/kenratchapon/store-ecommerce',
      visit: 'https://ken-store-ecommerce.vercel.app/'
    },
    {
      title: "Store Admin Dashboard",
      description:
        "This project is the culmination of my learning journey from a tutorial to create a Admin Dashboard manage the ecommerce store.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: adminDashboard,
      code: 'https://github.com/kenratchapon/store-dashboard',
      visit: 'https://ecommerce-store-admin-nu.vercel.app/'
    },
    {
      title: "CRUD app",
      description:
        "This project is the culmination of my learning journey from a tutorial to use RESTful APIs",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: app3,
      code: 'https://github.com/kenratchapon/crud-app-with-restfull-api',
      visit: 'https://crud-app-with-restfull-api.vercel.app/'
    },
];