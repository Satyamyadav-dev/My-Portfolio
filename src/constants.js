// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import jwtLogo from './assets/tech_logo/jsonwebtokens.png';
import githubActionsLogo  from './assets/tech_logo/githubactions.png';
import renderLogo from './assets/tech_logo/render.png';
import dockerLogo from './assets/tech_logo/docker.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

// Experience Section Logo's
import prodigyInfotechLogo from './assets/company_logo/prodigy_logo.png'

// Education Section Logo's
import vcetlogo from './assets/education_logo/VCET_logo.png';
import tcscLogo from './assets/education_logo/TCSC_logo.png';
import svhsLogo from './assets/education_logo/SVHS_logo.png';

// Project Section Logo's
import satyamEnterprisesLogo from './assets/work-logo/satyamEnterprises.png';
import tripNestLogo from './assets/work-logo/tripnest.png';
import scmLogo from './assets/work-logo/scm.png';




export const SkillsInfo = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'JWT ', logo: jwtLogo },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python (Basics)', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'GitHub Actions', logo: githubActionsLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
      {name: 'Docker' , logo: dockerLogo},
      {name: 'CICD' , logo: 'CI/CD'},
    ],
  },
];


  export const experiences = [
    {
      id: 0,
      img: prodigyInfotechLogo,
      role: "Web Developer",
      company: "Prodigy Infotech",
      date: "Dec 2023 - Jan 2024",
      desc: "Developed responsive, interactive web pages using HTML, CSS, and JavaScript.Implemented dynamic UI features using DOM manipulation and event handling.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        
       
      ],
    },
    
  ];
  
  export const education = [
   
{
  id: 0,
  img: vcetlogo,
  school: "Vidyavardhini's College of Engineering & Technology, Vasai",
  date: "November 2022 - June 2026",
  grade: "8.39/10",
  desc: "Graduated with a Bachelor's degree in Computer Engineering from Vidyavardhini's College of Engineering and Technology (VCET). Built a strong foundation in programming, data structures and algorithms, object-oriented programming, database management systems, web technologies, and computer networks. Applied this knowledge through software development projects, coding events, and practical problem-solving, with a focus on full-stack web development.",
  degree: "B.E. in Computer Engineering",
},
  
{
  id: 1,
  img: tcscLogo,
  school: "Thakur College of Science & Commerce, Mumbai",
  date: "August 2020 - June 2022",
  grade: "62%",
  degree: "Higher Secondary Certificate (HSC)",
  desc: "Completed Class 12th in the Science stream with Physics, Chemistry, Mathematics, Biology (PCMB), and Information Technology (IT)."
},

 
{
  id: 2,
  img: svhsLogo,
  school: "Shree Vishwakarma High School, Mumbai",
  date: "June 2013 - March 2020",
  grade: "86%",
  degree: "Secondary School Certificate (SSC)",
  desc: "Completed Class 10th with an 86% score, building a strong foundation in Mathematics, Science, and English."
},

   
  ];
  
  export const projects = [
    
   
{
  id: 1,
  title: "Satyam Enterprises",
  description: [
    "Built and deployed a full-stack website for a real business, providing customers with direct WhatsApp and phone enquiry options.",
    "Developed a product catalogue with availability management, allowing the owner to update product listings and stock availability without code changes.",
    "Implemented JWT-based admin authentication and full product CRUD (Create, Read, Update, Delete) operations through REST APIs.",
    "Deployed the React frontend on Vercel and connected it to a Node.js/Express backend with MongoDB."
  ],
  image: satyamEnterprisesLogo,
tags: [
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "bcrypt",
  "REST API",
  "Cloudinary",
  "Vercel",
  "Render",
  "MVC Architecture"
],
  github: "https://github.com/Satyamyadav-dev/Satyam-Enterprises",
  webapp: "https://satyam-enterprises-tau.vercel.app/",
},

   
{
  id: 2,
  title: "TripNest – Travel Listing Platform",
  description: [
    "Built a full-stack travel listing platform where users can create, browse, and review stays, with image uploads and map-based locations.",
    "Implemented session-based authentication with Passport and owner-only authorization for editing and deleting listings.",
    "Developed RESTful CRUD operations for listings and reviews using Node.js, Express.js, and MongoDB (Mongoose).",
    "Integrated Cloudinary for image storage, added server-side validation, and structured the app with MVC architecture and EJS templates."
  ],
  image: tripNestLogo,
  tags: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "EJS",
    "Passport.js",
    "Cloudinary",
    "REST API",
    "MVC Architecture"
  ],
  github: "https://github.com/Satyamyadav-dev/TripNest_Fullstack_Website",
  webapp: "https://tripnest-u0jx.onrender.com",
},
{
  id: 3,
  title: "AI-Driven Supply Chain Planning System (Academic Major Project)",
  description: [
    "Built and managed the MySQL database for an AI-powered planning platform that helps manufacturers avoid stockouts and overstocking by combining demand forecasts with supplier risk.",
    "Contributed to supplier risk assessment logic using delivery performance, defect rates, compliance, and pricing stability to identify potential supplier disruptions early.",
    "Contributed to inventory planning logic using demand forecasts, supplier risk, and lead times to determine safety stock and reorder points.",
    "Collaborated in a 4-member team to deliver decision-support modules for demand forecasting, supplier risk, and inventory planning, replacing manual, fragmented planning."
  ],
  image: scmLogo, // replace with your imported image variable
  tags: ["Python", "XGBoost", "FastAPI", "MySQL", "typescript"],
  github: "https://github.com/Satyamyadav-dev/AI-Driven-SCM-Planning-System",
  webapp: "https://drive.google.com/file/d/1J3efoYBJoWeimhEJhR_NovF-WxjRlqGo/view", // add your demo link, or remove this line if there isn't one
},
  
  ];  