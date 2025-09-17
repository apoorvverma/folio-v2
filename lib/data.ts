import React from "react";
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import finTrackerImg from "@/public/finance-tracker.png";
import bankingCloneImg from "@/public/banking-clone.png";
import portfolioImg from "@/public/portfolio.png";
import { FiMonitor } from "react-icons/fi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
/*   {
    name: "Skills",
    hash: "#skills",
  }, */
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Teaching Fellow - Machine Learning & AI",
    location: "Computing & Data Sciences at Boston University",
    description:
      "Led hands-on labs and projects in ML/AI (deep learning, NLP) using Python, NumPy/Pandas, scikit-learn, and PyTorch; mentored students, reviewed code, and graded while emphasizing evaluation & bias/fairness.",
    icon: React.createElement(PiStudent),
    date: "JAN 2025 - Present",
  },
  {
    title: "Information Systems Specialist - Part Time",
    location: "Grad Student - Boston University, USA",
    description:
      "Provided End-to-End technical support, addressing hardware/software issues & collaborated with IT Teams to ensure timely resolution of the same.",
    icon: React.createElement(FiMonitor  ),
    date: "FEB 2024 - JAN 2025",
  },
  {
    title: "DevOps Engineer",
    location: "GYTWorkz Technologies, India",
    description:
      "Built and operated cloud-native CI/CD and infrastructure: Terraform on AWS, Docker/Kubernetes, GitHub Actions→Argo CD, security scanning, and observability (Prometheus/Grafana/ELK).",
    icon: React.createElement(FaAws ),
    date: "APR 2023 - AUG 2024",
  },
  {
    title: "Software Development Engineer",
    location: "GYTWorkz Technologies, India",
    description:
      "Worked as the backend lead, architected & developed crucial microservices for pivotal features like engagements, appointment, geofences, etc.",
    icon: React.createElement(FaNodeJs  ),
    date: "JUL 2021 - MAR 2023",
  },
  {
    title: "Software Engineer",
    location: "Digital Projekt, India",
    description:
      "Worked on various full stack projects, from designs to development and lead a team 5 developers through different projects.",
    icon: React.createElement(FaReact),
    date: "JUL 2020 - JUN 2021",
  },
  /* {
    title: "Student Coordinator",
    location: "Microsoft Campus Club - SVVV, Indore",
    description:
      "Conducted various workshops and tech-events on different Technologies. Organized hackathons and coding competitions.",
    icon: React.createElement(CgMicrosoft),
    date: "2017 - 2020",
  }, */
] as const;

export const projectsData = [
  {
    title: "Finance Tracker",
    description:
      "This was my term project for METCS-601. It helps you manage your personal finances by tracking your income and expenses.",
    tags: ["React", "Next.js", "Tailwind", "Drizzle ORM", "Hono", "PostgreSQL", "shadcn/ui"],
    imageUrl: finTrackerImg,
    link: "https://github.com/apoorvverma/CS601-TermProj"
  },
  {
    title: "Banking App Clone",
    description:
      "A frontend clone of a banking app. It was a personal challenge to test my CSS skills.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind", "Vercel"],
    imageUrl: bankingCloneImg,
    link: "https://github.com/apoorvverma/dribble-design"
  },
  {
    title: "Portfolio v1.0",
    description:
      "This was my old Portfolio Website. It was built with React, Next.js, Bootstrap and used GitHub & Instagram APIs.",
    tags: ["React", "Next.js", "Bootstrap", "React Typist", "GitHub API", "Instagram API", "Netlify"],
    imageUrl: portfolioImg,
    link: "https://github.com/apoorvverma/Portfolio"
  },
] as const;

export const skillsData = [
  "NodeJS", 
  "ReactJS", 
  "NextJS", 
  "ExpressJS", 
  "Redux",
  "GIT", 
  "PostgreSQL", 
  "MySQL", 
  "MongoDB", 
  "Sequelize", 
  "Drizzle", 
  "Postman", 
  "Swagger",
  "Figma", 
  "Adobe XD",
  "Hono", 
  "Bootstrap",
  "TailwindCSS",
  "Twilio", 
  "Stripe",
  "Amazon Web Services:", 
  "DynamoDB", 
    "API Gateway", 
    "S3", 
    "EC2", 
    "Lambda", 
    "Cloud Formation", 
    "Connect", 
    "IAM", 
    "CloudWatch", 
    "SNS", 
    "SES", 
    "RDS"
] as const;
