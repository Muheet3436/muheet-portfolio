import fitLogImg from '../assets/projects/FitLog_ Your Fitness, Organized.png';
import bazarDorImg from '../assets/projects/BazarDor Market Price Tracker.png';

export const personalInfo = {
  name: "Abdul Al Muheet",
  title: "Frontend-Focused Full Stack Developer",
  status: "8th Semester CSE Student",
  institution: "International Islamic University Chittagong (IIUC)",
  location: "Chittagong, Bangladesh",
  bio: "Undergraduate Computer Science and Engineering student with a strong passion for frontend development and user interface engineering. I focus on crafting clean, responsive, and intuitive web applications with React and modern web tools, supported by practical knowledge in backend development, databases, and core computer science fundamentals.",
  personalInterests: [
    "Building practical web applications",
    "Problem solving & exploring new tech",
    "Playing football & cricket",
    "Organizing departmental sports tournaments"
  ],
  contacts: {
    email: "muheet3436@gmail.com",
    whatsapp: "+8801629994843",
    whatsappLink: "https://wa.me/8801629994843",
    github: "https://github.com/Muheet3436",
    linkedin: "https://www.linkedin.com/in/abdul-al-muheet-360687393/"
  }
};

export const skillCategories = [
  {
    category: "Frontend Development",
    description: "Core expertise in crafting modern, responsive user interfaces and interactive experiences.",
    icon: "Layout",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    category: "Backend Development",
    description: "Server-side logic and backend fundamentals to connect and support full-stack applications.",
    icon: "Server",
    skills: ["Node.js"]
  },
  {
    category: "Database",
    description: "Data modeling, schema design, and document persistence for web apps.",
    icon: "Database",
    skills: ["MongoDB"]
  },
  {
    category: "Programming Languages",
    description: "Strong foundation in core programming, algorithms, and object-oriented concepts.",
    icon: "Code",
    skills: ["C", "C++", "Java"]
  },
  {
    category: "Tools & Methodologies",
    description: "Version control, developer workflows, and client-server data synchronization.",
    icon: "Wrench",
    skills: ["Git", "GitHub", "REST API Integration"]
  }
];

export const projects = [
  {
    id: "fitlog",
    title: "FitLog",
    subtitle: "Workout Library & Planner",
    description: "A workout planning platform for fitness enthusiasts to explore exercises, organize workout routines and save favourite workouts.",
    image: fitLogImg,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Local Storage"
    ],
    features: [
      "Exercise library to explore workouts categorized by muscle groups",
      "Routine organizer to customize and plan structured workout routines",
      "Save favourite workouts with persistent client-side Local Storage",
      "Dynamic REST API integration delivering responsive exercise data"
    ],
    liveUrl: "https://fit-log-iota-nine.vercel.app/",
    githubUrl: "https://github.com/Muheet3436/Fit_log"
  },
  {
    id: "bazardor",
    title: "BazarDor",
    subtitle: "Smart Market Price Tracker",
    description: "A platform designed for people in Bangladesh to explore and compare everyday essential product prices.",
    image: bazarDorImg,
    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth"
    ],
    features: [
      "Category-based browsing for everyday grocery and market essentials",
      "Market-wise price comparison across different local markets and vendors",
      "Data-driven price insights including minimum, maximum, and average rates",
      "Secure user authentication powered by Better Auth"
    ],
    liveUrl: "https://bazar-dor-sigma-flame.vercel.app/",
    githubUrl: "https://github.com/Muheet3436/Bazar_Dor"
  }
];

export const educationData = {
  institution: "International Islamic University Chittagong (IIUC)",
  degree: "Bachelor of Science in Computer Science and Engineering",
  status: "Currently studying in 8th Semester",
  location: "Chittagong, Bangladesh",
  focusAreas: [
    "Software Engineering & Web Technologies",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming"
  ]
};

export const publicationData = {
  title: "An Optimized Multilayer Perceptron Model for Heart Disease Prediction Using Clinical Data",
  conference: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN 2026)",
  paperId: "6736",
  status: "Successfully Presented",
  presentationDate: "16–18 April 2026",
  type: "IEEE Conference Presentation",
  description: "Presented research focusing on optimizing a Multilayer Perceptron (MLP) neural network architecture to enhance heart disease diagnostic accuracy using clinical patient indicators.",
  certificateUrl: "/PID-6736.pdf"
};
