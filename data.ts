import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about: 'Develop enterprise level application using <b>Angular</b>, <b>Node</b>, <b>Less</b> '
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle, develop and deploy database, server, API using <b>NestJs </b>,<b>ExpressJs</b>  ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "Develop robust  REST API using <b>NestJs</b>  & <b>Postman</b> for testing tools. ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "Visit <b>Edabit</b> 30 minutes everyday for to develop problem-solving skills",
  }
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Angular",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "75%",
  },
  {
    Icon: BsCircleFill,
    name: "Nestjs",
    level: "60%",
  },
]

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85%",
  },{
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45%",
  },
]

export const projects: IProject[] = [
  {
    id: 1,
    name: 'AirBnb Clone',
    description: 'Airbnb Clone build on top of Next.js, Tailwind, Date-picker, Calender functionality, Mapbox Integration.',
    image_path: '/images/airbnb_portfolio.png',
    deployed_url: 'https://airbnb-clone-kappa-red.vercel.app/',
    github_url: 'https://github.com/AzriZzz/airbnb-clone-nextjs',
    category: ['react'],
    technologies: ['React','NextJs', 'Mapnext', 'Tailwind']
  },
  {
    id: 2,
    name: 'Amazon Clone',
    description: 'Amazon Clone build on top of Next.js, Tailwind, Redux, Firebase, Stripe.',
    image_path: '/images/amazon_portfolio.png',
    deployed_url: 'https://amazon-clone-react-omega.vercel.app/',
    github_url: 'https://github.com/AzriZzz/amazon-clone-react',
    category: ['react'],
    technologies: ['React','NextJs', 'Tailwind', 'Stripe','Firebase']
  },
  {
    id: 3,
    name: 'D3.js Chart Library',
    description: 'Create a simple chart example library using D3.js',
    image_path: '/images/placeholder-image.png',
    deployed_url: 'https://amazon-clone-react-omega.vercel.app/',
    github_url: 'https://github.com/AzriZzz/amazon-clone-react',
    category: ['angular'],
    technologies: ['Angular','D3.js']
  },
  // {
  //   id: 4,
  //   name: 'AirBnb Clone',
  //   description: 'Airbnb Clone build on top of Next.js, Tailwind, Date-picker, Calender functionality, Mapbox Integration.',
  //   image_path: '/images/airbnb_portfolio.png',
  //   deployed_url: 'https://airbnb-clone-kappa-red.vercel.app/',
  //   github_url: 'https://github.com/AzriZzz/airbnb-clone-nextjs',
  //   category: ['react'],
  //   technologies: ['React','NextJs', 'Mapnext', 'Tailwind']
  // },
  // {
  //   id: 5,
  //   name: 'Amazon Clone',
  //   description: 'Amazon Clone build on top of Next.js, Tailwind, Redux, Firebase, Stripe.',
  //   image_path: '/images/amazon_portfolio.png',
  //   deployed_url: 'https://amazon-clone-react-omega.vercel.app/',
  //   github_url: 'https://github.com/AzriZzz/amazon-clone-react',
  //   category: ['react'],
  //   technologies: ['React','NextJs', 'Tailwind', 'Stripe','Firebase']
  // },
  // {
  //   id: 6,
  //   name: 'D3.js Chart Library',
  //   description: 'Create a simple chart example library using D3.js',
  //   image_path: '/images/placeholder-image.png',
  //   deployed_url: 'https://amazon-clone-react-omega.vercel.app/',
  //   github_url: 'https://github.com/AzriZzz/amazon-clone-react',
  //   category: ['angular'],
  //   technologies: ['Angular','D3.js']
  // },{
  //   id: 7,
  //   name: 'AirBnb Clone',
  //   description: 'Airbnb Clone build on top of Next.js, Tailwind, Date-picker, Calender functionality, Mapbox Integration.',
  //   image_path: '/images/airbnb_portfolio.png',
  //   deployed_url: 'https://airbnb-clone-kappa-red.vercel.app/',
  //   github_url: 'https://github.com/AzriZzz/airbnb-clone-nextjs',
  //   category: ['react'],
  //   technologies: ['React','NextJs', 'Mapnext', 'Tailwind']
  // },
  // {
  //   id: 8,
  //   name: 'Amazon Clone',
  //   description: 'Amazon Clone build on top of Next.js, Tailwind, Redux, Firebase, Stripe.',
  //   image_path: '/images/amazon_portfolio.png',
  //   deployed_url: 'https://amazon-clone-react-omega.vercel.app/',
  //   github_url: 'https://github.com/AzriZzz/amazon-clone-react',
  //   category: ['react'],
  //   technologies: ['React','NextJs', 'Tailwind', 'Stripe','Firebase']
  // },
  // {
  //   id: 9,
  //   name: 'D3.js Chart Library',
  //   description: 'Create a simple chart example library using D3.js',
  //   image_path: '/images/placeholder-image.png',
  //   deployed_url: 'https://amazon-clone-react-omega.vercel.app/',
  //   github_url: 'https://github.com/AzriZzz/amazon-clone-react',
  //   category: ['angular'],
  //   technologies: ['Angular','D3.js']
  // }
]