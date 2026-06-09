export const profile = {
  name: "Rokesh V",
  tagline: "Aspiring Software Engineer · Full-Stack Developer · AI Enthusiast · Android Developer",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 8015897369",
  email: "rokeevenkat@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/rokesh-venkat-12ot2007",
    github: "https://github.com/rokesh-venkat",
    leetcode: "https://leetcode.com/u/rokesh_lc",
    hackerrank: "https://hackerrank.com/profile/RokeshVenkat",
    skillrack: "https://skillrack.com/faces/resume.xhtml?id=547835",
  },
};

export const summary =
  "Highly motivated Computer Science and Engineering undergraduate (CGPA 9.2/10.0) at R.M.D. Engineering College. Skilled across Full-Stack Development, Software Engineering, AI, Computer Vision, and Android. I build real-world systems — healthcare AI, emergency response, real-time collaboration — with a focus on scalable backends, modern frontends, and rigorous problem solving.";

export const education = {
  degree: "B.E. — Computer Science and Engineering",
  school: "R.M.D. Engineering College, Chennai",
  graduation: "Expected 2029",
  cgpa: "9.2 / 10.0",
};

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "Java", "C++", "C", "JavaScript"] },
  { label: "Frontend", items: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { label: "Mobile", items: ["Android Development"] },
  { label: "AI & Computer Vision", items: ["OpenCV", "YOLOv8", "OCR", "AI Apps"] },
  { label: "Tools", items: ["Git", "GitHub", "Docker", "Socket.IO", "WebRTC", "JWT", "VS Code"] },
  { label: "CS Core", items: ["DSA", "OOP", "DBMS", "Operating Systems", "Software Engineering"] },
];

export const projects = [
  {
    name: "MediScan AI",
    subtitle: "AI-Powered Medicine Interaction Checker",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "OpenCV", "YOLOv8", "OCR"],
    bullets: [
      "AI healthcare platform that detects medicine interactions and surfaces risk analysis.",
      "OCR-based prescription scanning to extract medicine information automatically.",
      "YOLOv8 + OpenCV for medicine recognition via computer vision.",
      "JWT auth, patient history management, containerized deployment with Docker.",
    ],
  },
  {
    name: "SABLE",
    subtitle: "Emergency Alert Android Application",
    stack: ["Android", "GPS", "SMS Services", "Location APIs"],
    bullets: [
      "Mobile safety app that sends instant emergency alerts.",
      "Live location sharing and rapid emergency communication.",
      "GPS tracking hardened for time-sensitive, critical scenarios.",
    ],
  },
  {
    name: "SyncSpace",
    subtitle: "Real-Time Collaboration Platform",
    stack: ["React.js", "Node.js", "Socket.IO", "WebRTC"],
    bullets: [
      "Real-time collaboration platform with live communication.",
      "WebRTC-based peer-to-peer audio / video.",
      "Socket.IO for real-time sync and messaging; scalable backend.",
    ],
  },
];

export const achievements = [
  "Maintaining a CGPA of 9.2/10.0.",
  "Shipped Full-Stack, AI, and Android applications end-to-end.",
  "Built across AI, Computer Vision, Real-Time Communication, and Mobile.",
  "Active problem solver on LeetCode, HackerRank, and SkillRack.",
];

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Telugu", level: "Spoken" },
  { name: "German", level: "Learning" },
];
