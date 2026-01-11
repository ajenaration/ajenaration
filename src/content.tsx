import React from 'react';
import { Youtube } from 'lucide-react';
import { TiktokIcon } from '../components/CustomIcons';
import { Project, BlogPost } from '../types';

export const socialLinks = {
  github: "https://github.com/ajenaration",
  twitter: "https://twitter.com/ajenaration",
  instagram: "https://instagram.com/ajenaration",
  tiktok: "https://tiktok.com/@ajenaration",
  youtube: "https://youtube.com/@ajenaration",
  bluesky: "https://bsky.app/profile/ajenaration.bsky.social",
  linkedin: "https://linkedin.com/in/ayana-n/"
};

export const sponsors = ["TECHGEAR", "ROGERS", "FIDO", "A&CO", "LOGIC", "MLH", "TAIT"];

export const projects: Project[] = [
  {
    id: 1,
    title: "Neural Interface Dashboard",
    description: "A real-time data visualization tool for BCI devices using React and Three.js. Optimized for high-frequency data streams.",
    tags: ["React", "Three.js", "WebSockets"],
    image: "https://csspicker.dev/api/image/?q=cyberpunk+interface&image_type=photo",
    link: "#"
  },
  {
    id: 2,
    title: "Autonomous Drone Swarm",
    description: "Lead developer for a decentralized coordination system for 50+ micro-drones. Sponsored by TechGear Pro.",
    tags: ["C++", "Python", "ROS"],
    image: "https://csspicker.dev/api/image/?q=drone+technology&image_type=photo",
    link: "#"
  },
  {
    id: 3,
    title: "Edge AI Camera Kit",
    description: "Open-source hardware and software stack for real-time object detection on low-power ARM devices.",
    tags: ["TensorFlow", "Edge Computing", "IoT"],
    image: "https://csspicker.dev/api/image/?q=circuit+board&image_type=photo",
    link: "#"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Developer Advocacy is the Future of Engineering",
    excerpt: "Exploring the intersection of community building and technical excellence in the modern SaaS landscape.",
    date: "Oct 12, 2023",
    readTime: "8 min read",
    platform: "Medium",
    url: "#"
  },
  {
    id: 2,
    title: "Optimizing WebGL for Low-End Mobile Devices",
    excerpt: "A deep dive into shader optimization and memory management for mobile-first creative coding.",
    date: "Sep 28, 2023",
    readTime: "12 min read",
    platform: "Dev.to",
    url: "#"
  },
  {
    id: 3,
    title: "Building a Career as a Creative Technologist",
    excerpt: "How to bridge the gap between design, hardware, and software to create unique digital experiences.",
    date: "Aug 15, 2023",
    readTime: "6 min read",
    platform: "Medium",
    url: "#"
  },
];

export const fullTechStack = {
  "Languages & Frameworks": ["Python", "C#", ".NET", "Swift", "Bash", "Java", "AngularJS", "PHP", "Spring Boot"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "ELK Stack", "Oracle SQL"],
  "Tools & Observability": ["Git", "Postman", "Linux", "Dynatrace", "JIRA", "Grafana", "Datadog", "Splunk"],
  "Security": ["VPN", "PKI", "SSL", "Vault", "Incident Management"],
  "AI & ML": ["TensorFlow", "PyTorch", "Scikit-learn", "MLOps", "Predictive Analytics"]
};

export const contentStats = [
  {
    platform: 'YouTube',
    icon: <Youtube size={20} />,
    url: 'https://www.youtube.com/watch?v=8m58xF2bnI8',
    views: '12.5K',
    title: 'Setup Tour & Tech Review',
    image: 'https://img.youtube.com/vi/8m58xF2bnI8/maxresdefault.jpg'
  },
  {
    platform: 'TikTok',
    icon: <TiktokIcon size={20} />,
    url: 'https://www.tiktok.com/@ajenaration/video/7563638573807766814',
    views: '45.2K',
    title: 'Mechanical Keyboard Build',
    image: 'https://csspicker.dev/api/image/?q=mechanical+keyboard&image_type=photo'
  },
  {
    platform: 'TikTok',
    icon: <TiktokIcon size={20} />,
    url: 'https://www.tiktok.com/@ajenaration/video/7563720367739505951',
    views: '82.1K',
    title: 'Day in the Life: Engineer',
    image: 'https://csspicker.dev/api/image/?q=coding+setup&image_type=photo'
  },
  {
    platform: 'TikTok',
    icon: <TiktokIcon size={20} />,
    url: 'https://www.tiktok.com/@ajenaration/video/7574134173900885279',
    views: '28.4K',
    title: 'Smart Home Integration',
    image: 'https://csspicker.dev/api/image/?q=smart+home&image_type=photo'
  },
  {
    platform: 'TikTok',
    icon: <TiktokIcon size={20} />,
    url: 'https://www.tiktok.com/@ajenaration/video/7574331979953474846',
    views: '156K',
    title: 'Viral Tech Tips',
    image: 'https://csspicker.dev/api/image/?q=tech+gadgets&image_type=photo'
  }
];