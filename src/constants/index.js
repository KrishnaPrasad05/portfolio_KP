import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate MERN stack developer with a strong foundation in React, Node.js, Express.js, MongoDB, Mongoose, and Redux. Along with backend and frontend expertise, I have a keen eye for UI/UX design, leveraging Figma to create intuitive user interfaces. My programming knowledge extends to Java, and I am proficient in working with both DBMS and RDBMS systems. I thrive on creating efficient, scalable web applications and am always eager to learn and apply new technologies to solve complex problems.`;

export const ABOUT_TEXT = `I am a dedicated and enthusiastic MERN stack developer with a comprehensive skill set in modern web development technologies. My expertise lies in building dynamic and responsive web applications using React, Node.js, Express.js, MongoDB, Mongoose, and Redux. I have a strong understanding of both frontend and backend development, allowing me to create seamless and efficient full-stack solutions. In addition to my technical skills, I have a passion for UI/UX design, with hands-on experience using Figma to craft user-friendly and visually appealing interfaces. I believe that a great user experience is at the heart of any successful application, and I strive to balance functionality with aesthetics in every project I undertake. My programming knowledge extends to Java and able to work with both DBMS and RDBMS systems.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Aug 2024",
    role: "Full Stack Developer Intern",
    company: "Bharat Intern",
    description: `As a Full Stack Developer intern at Bharat Intern, I completed three projects over four weeks, honing my expertise in Node.js, MongoDB, and Express. These projects strengthened my skills in developing dynamic web applications, managing databases, and building robust back-end systems.`,
    technologies: ["Javascript","Node.js","Express.js", "MongoDB"],
    link:"https://bharatintern.live/",
  },
  {
    year: "Sep 2023 - Apr 2024",
    role: "Frontend Developer Trainee",
    company: "Smartcliff Learning Solutions",
    description: `As a Front End Developer trainee at Smartcliff Learning Solution, I gained hands-on experience with Bootstrap, Sass, React, and Redux. I successfully completed various assignments and assessments, enhancing my skills in front-end development and building responsive, modern web interfaces.`,
    technologies: ["HTML", "CSS", "Javascript","Boostrap", "Sass","React.js","Redux"],
    link:"https://smartcliff.in",
  },
  {
    year: "Oct 2023 - Nov 2023",
    role: "UI/UX Designer Intern",
    company: "CodSoft",
    description: `As a UI/UX Designer intern at Codsoft, I gained expertise in designing web and mobile applications using Figma and Canva. This experience enhanced my ability to create intuitive and visually appealing user interfaces, focusing on user-centered design principles.`,
    technologies: ["Figma", "Canva"],
    link:"https://codsoft.in/",
  },
  {
    year: "Aug 2023 - Sep 2023",
    role: "Web Development Intern",
    company: "CodeCasa",
    description: `As a Web Development intern at CodeCasa, I strengthened my understanding of web fundamentals and applied them to design and develop web applications. This experience allowed me to build a strong foundation in web technologies and best practices.`,
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link:"https://codecasa.in/",
  },
];

export const PROJECTS = [
  {
    title: "WorkQuake - Job Portal",
    image: project1,
    description:
      "WorkQuake is a job portal with three user levels: job seekers can search jobs, apply, and build resumes; employers can post jobs and contact candidates; and admins can approve postings, send notifications, and handle queries. Developed using React for the frontend and Redux for the backend.",
    technologies: ["HTML", "CSS", "Bootstrap","React", "Redux"],
    link:"https://workquake.vercel.app/",
  },
  {
    title: "Recipe Writings",
    image: project2,
    description:
      "RecipeWritings is a dynamic recipe book for Indian cuisines, featuring full CRUD operations, secure route authentication and authorization, a comment section, password reset, and a responsive UI. Built with the MVC architecture, it utilizes React for the view, JWT and bcrypt for security, and efficient controllers and routes.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js","MongoDB","Mongoose"],
    link:"https://recipe-writings.onrender.com/",
  },
  {
    title: "IJRMA - Journal App",
    image: project3,
    description:
      "IJRMA is a journal website for research submissions and reviews across disciplines. Built with React and Redux, it features user roles for researchers, reviewers, and admins, a seamless submission and review process, and a user-friendly interface designed with Figma for an intuitive experience.",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Redux"],
    link:"https://ijrma.vercel.app/",
  },
  {
    title: "CarsDekho",
    image: project4,
    description:
      "CarsDekho is a web app that fetches and displays real-time car details, including specs, features, and pricing. Built with React.js, it offers a responsive, user-friendly interface. API integration via Fetch ensures accurate data, while CSS/Bootstrap styling provides a clean, professional design across all devices.",
    technologies: ["HTML", "CSS", "Bootstrap", "React"],
    link:"https://carsdekho.vercel.app/",
  },
];

export const CONTACT = {
  address: "4/193-B, Ettikuttai Street, Jagir Ammaplayam, Salem, Tamilnadu",
  phoneNo: "+91 88837 39985 ",
  email: "krishnasrinivasan41@gmail.com",
};

export const ACHEIEVEMENTS = [
  {
    year:"Mar 2024",
    title:"Best Outgoing Student Award",
    description:`Awarded the Best Outgoing Student for excelling in academics, co-curricular, extra-curricular activities, and sports. This recognition reflects my all-around performance, leadership skills, and commitment to achieving excellence across various domains throughout my academic journey.`,
    location:"KIOT, Salem",
  },
  {
    year:"May 2023",
    title:"Highest number of Paper Presentation in an single Academic Year",
    description:`Recognized for delivering the highest number of paper presentations in a single academic year, showcasing my proficiency in PPT preparation, communication skills, and passion for research and development. This achievement underscores my dedication to academic excellence and my ability to effectively convey complex ideas.`,
    location:"KIOT, Salem",
  },
  {
    year:"Feb 2023",
    title:"National Level Tech Symposium Winner- Paper Presentation",
    description:`Won the Best Paper Presentation Award for my research on "Fusion of AI in Mobile Application Development for the Reduction of Suicidal Rates." This achievement highlights my innovative approach to leveraging AI for mental health solutions and my ability to effectively communicate complex concepts.`,
    location:"VCET, Erode",
  },
  {
    year:"May 2022",
    title:"National Level Tech Symposium Winner- Code Debugging & Technical Quiz",
    description:`Winner of Technical Quiz and Code Debugging competitions, demonstrating my strong problem-solving skills, technical knowledge, and quick thinking. These achievements reflect my proficiency in understanding complex technical concepts and my ability to efficiently debug and optimize code under pressure.`,
    location:"JCT, Coimbatore",
  },
]
