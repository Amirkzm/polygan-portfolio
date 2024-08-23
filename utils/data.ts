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
    websiteLink: "niazyab.com",
  },
  {
    id: 5,
    title: "Realestate app",
    description:
      "A full MERN stack realestate app that allows users to posts their properties, search for properties, and contact the owner with full functional real-time chat application.",
    techList: [
      "React",
      "Typescript",
      "Express",
      "MongoDB",
      "Socket.io",
      "Redis",
      "Docker",
    ],
    npmLink: "",
    githubLink: "https://github.com/Amirkzm/real_state_full",
    websiteLink: "https://amirkzm-showcase.online",
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
];

export const WORK_EXPERIENCE: WorkExperienceType[] = [
  {
    id: 0,
    title: "Freelance Front-End Next.Js Developer ",
    date: "2023-2024",
    description: [
      "Collaborated with backend developers using Django Rest Framework and UI/UX designers to implement a Next.js project. Contributed to RESTful API creation, data modeling, and implemented JWT-based authentication and authorization.",
      "Utilized Figma designs provided by UX designers to create UI elements, ensuring consistency and adherence to design specifications.",
      "Optimized performance and user experience through responsive design and efficient use of Next.js features and server-side rendering.",
      "Integrated Ant Design as the UI framework, leveraging its components and styles for a polished user experience.",
      "Implemented user authentication using JWT tokens and React Context API, ensuring secure access to the application's features.",
      "Developed middleware and server actions to handle user requests and interactions, utilizing the latest features of Next.js for optimized performance.",
      "Utilized Tailwind CSS for styling, providing a customizable and maintainable approach to design and layout.",
    ],
  },
  {
    id: 1,
    title: "Front-End React.Js Developer at Pishgaman Sadra",
    date: "2020-2022",
    description: [
      "Developed a comprehensive test maker application catering to schools and private tutoring organizations, allowing users to create and manage quizzes and exams.",
      "Collaborated with the design and backend teams to implement user-friendly interfaces and integrate with backend APIs",
      "Implemented user authentication and access control, allowing different user roles with varying levels of access to the application's features",
      "Utilized Redux for efficient state management, ensuring data consistency and seamless interaction between components.",
      "Integrated Material-UI (MUI) components alongside data visualization libraries (chartjs) to design polished user interface with insightful progress charts, facilitating user comprehension of strengths and areas for improvement.",
    ],
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
  {
    id: 12,
    skillName: "Node.js",
    imgSrc: "/assets/skills/nodejs.png",
  },
  {
    id: 13,
    skillName: "Express",
    imgSrc: "/assets/skills/express.png",
  },
  {
    id: 14,
    skillName: "MongoDB",
    imgSrc: "/assets/skills/mongo.png",
  },
  {
    id: 15,
    skillName: "SQL",
    imgSrc: "/assets/skills/sql.png",
  },
  {
    id: 16,
    skillName: "Docker",
    imgSrc: "/assets/skills/docker.png",
  },
];

export const briefSkills: string[] = [
  "Javascript/Tyepscript",
  "ReactJS/React Native",
  "Next.js",
  "Node.js and Express",
  "HTML/CSS/TailwindCSS",
  "MongoDB/PostgreSQL",
];

export const SOCIAL_ADDRESS: socialLinkType = {
  instagram: "https://www.instagram.com/amir.25370",
  twitter: "https://twitter.com/amirkzm91",
  linkedin: "https://www.linkedin.com/in/amir-kazemi-33667045/",
  github: "https://github.com/amirkzm",
};
