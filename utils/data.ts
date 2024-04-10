import {
  ProjectType,
  SkillType,
  WorkExperienceType,
  socialLinkType,
} from "./types";

export const PROJECT_DATA: ProjectType[] = [
  {
    id: 0,
    title: "Niazyab",
    description:
      "Niazyab is an online market for iranian people living abroad to buy and sell their stuff whether they are new or used.",
    techList: ["NextJs", "Typescript", "Ant design"],
    npmLink: "",
    githubLink: "",
    websiteLink: "http://dev.niazyab.com/home",
  },
  {
    id: 1,
    title: "Spotify Clone",
    description:
      "A music app built upon the Spotify API that allows users to search, find new featured songs, play and listen to any music that can be found on Spotify.",
    techList: ["React JS", "Typescript", "MUI", "Redux Toolkit", "Vite"],
    npmLink: "",
    githubLink: "https://github.com/amirkzm/Spotify-clone",
    websiteLink: "http://spotify-ocean.vercel.app",
  },
  {
    id: 2,
    title: "Admin Panel",
    description:
      "A fully functional admin panel that allows users to manage teams, charts, book appointments, and more.",
    techList: ["React JS", "MUI", "Vite"],
    npmLink: "",
    githubLink: "https://github.com/amirkzm/admin-panel",
    websiteLink: "",
  },
  {
    id: 3,
    title: "Infinite Scroll",
    description:
      "react-infinite-scroll is a package that provides smooth scrolling on a long list of items when items need to be loaded from a server on the fly.",
    techList: ["React JS", "Typescript", "Rollup"],
    npmLink: "https://www.npmjs.com/package/@amirkzm/react-infinite-scroll",
    githubLink: "https://github.com/amirkzm/react-infinite-scroll",
    websiteLink: "",
  },
  {
    id: 4,
    title: "Auto Complete",
    description: "A search auto-completer with dynamic backend support.",
    techList: ["React JS", "Typescript", "Rollup"],
    npmLink: "https://www.npmjs.com/package/@amirkzm/react-auto-complete",
    githubLink: "https://github.com/amirkzm/react-auto-complete-input",
    websiteLink: "",
  },
  {
    id: 5,
    title: "Youtube Clone",
    description:
      "A YouTube clone that provides users with an interface that closely resembles the YouTube app, with the ability to search for and watch YouTube videos, view related videos, and see and post comments.",
    techList: ["React", "Typescript", "Context API"],
    npmLink: "",
    githubLink: "https://github.com/amirkzm/youtube-clone",
    websiteLink: "http://youtube-ocean.vercel.app",
  },
];

export const WORK_EXPERIENCE: WorkExperienceType[] = [
  {
    id: 0,
    title: "Front-End Developer @Mehre Pars Co",
    date: "2021-2022",
    partOneDesc:
      "Wrote modern, performant, maintainable code and updated previously written code from vanilla JavaScript to React components.",
    partTwoDesc:
      "Converted existing CBC (class-based components) to functional hooks and tried to renew the code structure.",
    partThreeDesc:
      "Communicated with multi-disciplinary teams of engineers and designers on a daily basis.",
  },
  {
    id: 1,
    title: "Freelance Python Developer",
    date: "2019-2020",
    partOneDesc:
      "Collaborated with two machine learning engineers to design a system to predict the stock market.",
    partTwoDesc:
      "My main goal was to extract the required features of candles based on previous year's data and organize them to use in machine learning and AI algorithms.",
    partThreeDesc:
      "Worked with NumPy and Pandas as the main tools to achieve the above-mentioned tasks.",
  },
  {
    id: 2,
    title: "Back-End Developer @ Shiraz University Game Festival Dev Team",
    date: "2018-2019",
    partOneDesc:
      "Designed and developed a database with PostgreSQL and determined the relation between models for a website for the Shiraz game festival competition.",
    partTwoDesc:
      "Developed and implemented the ability of user registration, selling tickets, timetable of matches, news, events, and so on.",
    partThreeDesc:
      "Developed a Rest API in collaboration with a team of back-end and front-end developers.",
  },
];

export const SKILLS_LIST: SkillType[] = [
  {
    id: 0,
    skillName: "JavaScript",
    imgSrc: "/assets/skills/javascript.png",
  },
  {
    id: 1,
    skillName: "TypeScript",
    imgSrc: "/assets/skills/typescript.png",
  },
  {
    id: 2,
    skillName: "ReactJS",
    imgSrc: "/assets/skills/react.png",
  },
  {
    id: 3,
    skillName: "React Native",
    imgSrc: "/assets/skills/react.png",
  },
  {
    id: 4,
    skillName: "Next.js",
    imgSrc: "/assets/skills/nextjs.png",
  },
  {
    id: 5,
    skillName: "HTML",
    imgSrc: "/assets/skills/html.png",
  },
  {
    id: 6,
    skillName: "CSS",
    imgSrc: "/assets/skills/css.png",
  },
  {
    id: 7,
    skillName: "MUI",
    imgSrc: "/assets/skills/mui.png",
  },
  {
    id: 8,
    skillName: "Ant design",
    imgSrc: "/assets/skills/ant-design.svg",
  },

  {
    id: 9,
    skillName: "GitHub",
    imgSrc: "/assets/skills/github1.png",
  },

  {
    id: 10,
    skillName: "Redux",
    imgSrc: "/assets/skills/redux.png",
  },
  {
    id: 11,
    skillName: "Tailwind",
    imgSrc: "/assets/skills/tailwind.png",
  },
];

export const briefSkills: string[] = [
  "Javascript/Tyepscript",
  "ReactJS/React Native",
  "NextJs",
  "MUI/Ant Design",
  "HTML/CSS/TailwindCSS",
  "Redux Toolkit",
];

export const SOCIAL_ADDRESS: socialLinkType = {
  instagram: "https://www.instagram.com/amir.25370",
  twitter: "https://twitter.com/amirkzm91",
  linkedin: "https://www.linkedin.com/in/amir-kazemi-33667045/",
  github: "https://github.com/amirkzm",
};
