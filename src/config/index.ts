import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Darsh Patel",
  author: "Darsh Patel",
  description:
    "",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/darsh-patel0/" },
    { text: "Github", href: "https://github.com/DaRsHpAtE1" },
    
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Darsh Patel",
    specialty: "Cybersecurity Professional",
    summary:
      "Exploring cybersecurity through hands-on research, penetration testing, and secure development.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Bar 1 Betting, Galway, Ireland",
      position: "Manager",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Implemented advanced customer management techniques and developed business for the company. Managing a team of 6 employees, overseeing daily operations, cash management, and customer service.",
      ],
    },
    {
      company: "Hacktify Cybersecurity, Mumbai, India",
      position: "Cybersecurity Analyst Intern",
      startDate: "Feb 2024",
      endDate: "Mar 2024",
      summary:
        "Performed web app penetration testing against OWASP Top 10 vulnerabilities (XSS, SQLi, CSRF, SSRF, IDOR). Produced detailed technical reports per task and conducted OSINT research and phishing analysis.",
    },
    {
      company: "Zuvius Lifesciences Pvt Ltd",
      position: "Full Stack & Cybersecurity Intern",
      startDate: "Dec 2022",
      endDate: "Dec 2023",
      summary: [
        "Developed and maintained an inventory management system using React, Node.js, and MongoDB, enhancing user experience and functionality. Transitioned to cybersecurity role, conducting vulnerability assessments and implementing security measures to protect sensitive data. Developed Malicespotter -  a phishing detection tool with 90%+ accuracy, deployed on AWS.",
      ],
    },
    
  ],
  projects: [
    {
      name: "Email Alexis",
      summary: "EmailAlexis is an intelligent email security platform designed to proactively detect and prevent phishing attacks before they reach users inbox. It integrates authentication protocols, blacklist checks, ML content analysis",
      linkSource: "https://openpress.universityofgalway.ie/perspectivesoncybersecurityriskmanagementvol1/chapter/chapter2/",
      image: "/spotifu.png",
    },
    {
      name: "Malicespotter",
      summary: "MaliceSpotter detects phishing URLs using an ensemble machine learning approach. Built with Flask and Python , it analyses URLs based on 28 parameters including  suspicious redirection patterns.",
      linkSource: "https://indjst.org/articles/malicespotter-revolutionizing-cyber-security-with-machine-learning-for-phishing-resilience",
      image: "/shopify-clon.png",
    },
    
  ],
  about: {
    description: `
      Hi, I’m Darsh! I recently completed my MSc in Cybersecurity Risk Management at the University of Galway and on Stamp 1G visa. I’m driven by a strong interest in offensive security, ethical hacking, and identifying security weaknesses before they can be exploited. Through my academic projects and internship experience, I’ve gained hands-on exposure to security assessments, vulnerability research, network security, and developing intelligent security solutions using machine learning. I currently hold the eJPT certification and preparing for OSCP to further strengthen my practical penetration testing expertise. Outside of work, I solve labs and play esports, exploring the competitive side of tech. 

      
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
