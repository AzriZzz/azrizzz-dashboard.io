import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IService, ISkill } from "./type";

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
    about: "Visit <b>HackerRank</b>  and <b>Leet Code</b> on some days for problem-solving",
  }
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Angular",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Nestjs",
    level: "80",
  },
]

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },{
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
]