
import htmlImg from './assets/skills/html.svg';
import cssImg from './assets/skills/css.svg';
import jsImg from './assets/skills/javascript.svg';
import reactImg from './assets/skills/react.svg';
import bootstrapImg from './assets/skills/bootstrap.svg';
import tailwindImg from './assets/skills/tailwind.svg'
import typescriptImg from './assets/skills/typescript.svg';
import materialuiImg from './assets/skills/materialui.svg';
import devicesImg from './assets/skills/devices.png';
import gitImg from './assets/skills/git.svg';
import githubImg from './assets/skills/github.svg';
import vscodeImg from './assets/skills/vscode.svg';

import quizImage from './assets/projects/quiz.png';
import gymImg from './assets/projects/gym.png';
import surfacesImg from './assets/projects/surfaces.png';
import hotelImg from './assets/projects/hotel.png';

export const skills = [
  { skill: "HTML", image: htmlImg },
  { skill: "CSS", image: cssImg},
  { skill: "JavaScript", image: jsImg },
  { skill: "React", image: reactImg },
  { skill: "Bootstrap", image: bootstrapImg },
  { skill: "Tailwind CSS", image: tailwindImg },
  { skill: "TypeScript", image: typescriptImg },
  { skill: "Material UI", image: materialuiImg },
  { skill: "Responsive Design", image: devicesImg },
  { skill: "Git", image: gitImg },
  { skill: "GitHub", image: githubImg },
  { skill: "VS Code", image: vscodeImg },
];

export const projects = [
  {
    title: "Surfaces - Modular Kitchen (Live)",
    // subtitle: "React and Firebase",
    description:
      "Project based on manufacturing designer and furniture for residential & commercial segments. Responsible for creating & overall design of the website that users see and interact with, including layout, graphics, and text.",
      tech: "Tech Stack Used: HTML, CSS, Bootstrap, PHP.",
      image: surfacesImg,
    link: "http://surfacesworld.com/",
    github: "https://github.com/veenaurkude/surfaces",
  },
  {
    title: "Gym Website",
    // subtitle: "MERN Stack",
    description:
      "Designed and developed a comprehensive Gym Website to enhance the online presence of a fitness center, providing users with detailed information about services, trainers, and membership options.",
    tech: "Tech Stack: JavaScript, React, Bootstrap, CSS.",  
    image: gymImg,
    link: "https://wavesgymproject.onrender.com/",
    github: "https://github.com/veenaurkude/Gym-Website",
  },
  {
    title: "Quiz Application",
    // subtitle: "React and Python",
    description:
      "Developed a responsive Quiz Application using modern front-end technologies, designed to provide users with an engaging and interactive quiz-taking experience.",
    tech: "Tech Stack: HTML, CSS, JavaScript, React, Bootstrap.",
    image: quizImage,
    link: "https://newquizapplication.netlify.app/",
    github: "https://github.com/veenaurkude/Quiz-App",
  },
  {
    title: "Hotel Booking",
    // subtitle: "MERN Stack",
    description:
      "Developed a comprehensive Hotel Booking System designed to provide users with a seamless experience for searching, booking, and managing hotel reservations.",

      tech: "Tech Stack Used: HTML, CSS, JavaScript, React, Material UI.",  
    image: hotelImg,
    link: "",
    github: "https://github.com/veenaurkude/Hotel-Booking-Project",
  },
  
  
];

