// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/Tech.png';
import agcLogo from './assets/company_logo/agc_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import GRLogo from './assets/work_logo/GR.png';
import Personal from './assets/work_logo/Personal.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer Intern",
      company: "TechStudy Cell",
      date: "March 2024 - Sept 2024",
      desc: "Worked as a Full Stack Developer Intern at TechStudy Cell, building React-based frontend components, developing backend services using Django REST Framework, integrating APIs, and collaborating with teams in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Django",
        "REST API",
        "Tailwind CSS",
        "Python",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Frontend Developer Intern",
      company: "The Website makers",
      date: "May 2023 - Nov 2023",
      desc: "Contributed as a Front-End Developer Intern by building responsive React components, optimizing UI performance, and integrating REST APIs for dynamic web applications.",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "ITM University , Gwalior",
      date: "Sept 2022 - July 2025",
      grade: "6.5 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (B.C.A) from BCA College, Gwalior. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Bca College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Coach Academy, Gwalior",
      date: "Jan 2024 - Aug 2024",
      grade: "Completed",
      desc: "I have successfully completed an intensive skill assessment in Python with Django and React.js at PS SOFTECH Institute",
      degree: "PS Softech Education Services",
    }
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
     {
      id: 3,
      title: "GRILLI Restaurant ",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: GRLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      webapp: "https://kartik-chauhan1.github.io/Grilli/",
    },
    {
      id: 4,
      title: "Personal Finance Tracker ",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: Personal,
      tags: [ "HTML", "CSS", "JavaScript"],
      webapp: "https://personal-finance-tracker-mu-seven.vercel.app/",
    },
  ];