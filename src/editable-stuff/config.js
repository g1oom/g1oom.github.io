// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Albert",
  middleName: "",
  lastName: "Ong",
  message: " Computer Science @ UCLA ",
  icons: [
    {
      image: "fa-github",
      type: "fab",
      url: "https://github.com/g1oom",
    },
    {
      image: "fa-linkedin",
      type: "fab",
      url: "https://linkedin.com/in/albert-wei-jun-ong",
    },
    {
      image: "fa-envelope",
      type: "fas",
      url: "mailto:albertowj2001@gmail.com",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile-pic.jpeg"),
  imageSize: 375,
  message:
    "Hi, I'm Albert (Wei Jun) Ong and I’m a junior majoring in Computer Science at the University of California, Los Angeles (UCLA). My primary interests are in computer vision, machine learning, and software engineering. In my free time, I play Table Tennis in the Junior Varsity team and play the piano in UCLA's Game Music Ensemble.",
  resume: require("../editable-stuff/resume.pdf"),
};

const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "g1oom",
  reposLength: 0,
  specificRepos: ["Laundry-Room-Maintenance-Portal", "reminder_bot"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile-pic.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile-pic.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  languages: [
    { name: "Python", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "C", value: 80 },
    { name: "HTML/CSS", value: 85 },
    { name: "Java", value: 80 },
    { name: "C++", value: 85 },
    { name: "SQL", value: 85 },
    { name: "Go", value: 65 },
  ],
  frameworks: [
    { name: "PyTorch", value: 90 },
    { name: "React Native", value: 90 },
    { name: "Express", value: 85 },
    { name: "Gin", value: 65 },
    { name: "Spring Boot", value: 90 },
    { name: "JAX", value: 80 },
  ],
  libraries: [
    { name: "React", value: 90 },
    { name: "NumPy", value: 90 },
    { name: "scikit-learn", value: 80 },
    { name: "Redux", value: 90 },
    { name: "pandas", value: 85 },
    { name: "GORM", value: 65 },
  ],
  others: [
    { name: "MySQL", value: 90 },
    { name: "Docker", value: 85 },
    { name: "PostgreSQL", value: 85 },
    { name: "Git", value: 90 },
    { name: "Kubernetes", value: 85 },
    { name: "MongoDB", value: 80 },
    { name: "Node.js", value: 85 },
    { name: "AWS", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for internship opportunities related to computer vision, machine learning, and software engineering! If you have any questions (or just want to say hi), please feel free to email me at",
  email: "albertowj2001@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'ML Research Assistant @ CVIB, UCLA',
      startDate: 'Feb 2024',
      endDate: 'Present',
      description: 'Contributing to SimpleMind, an AI framework that adds machine reasoning to deep neural networks',
    },
    {
      role: 'Software Engineer @ Daily Bruin, UCLA',
      startDate: 'Oct 2022',
      endDate: 'Present',
      description: 'Working on management platform which monitors the statuses of 7+ websites used by 200+ editors',
    },
    {
      role: 'Mobile Developer Intern @ ISAFE Enterprises',
      startDate: 'Jun 2023',
      endDate: 'Sep 2023',
      description: 'Building education-based mobile application using React Native',
    },
    {
      role: 'ML Research Assistant @ PARISlab, UCLA',
      startDate: 'Oct 2022',
      endDate: 'Jun 2023',
      description: 'Creating a differentiable molecular dynamics framework for peridynamics simulation using JAX',
    },
    {
      role: 'Software Engineer Intern @ STACS',
      startDate: 'Jan 2022',
      endDate: 'Jul 2022',
      description: 'Developed critical post-trade reporting and asset servicing modules. Co-authored company’s internal React library.',
    },
    {
      role: 'ML Student Researcher @ Singapore University of Technology and Design',
      startDate: 'Mar 2018',
      endDate: 'Feb 2019',
      description: 'Implemented a supervised Machine Learning program to classify unstructured texts in cybersecurity reports PDF. Achieved 83.3% classification accuracy.',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
