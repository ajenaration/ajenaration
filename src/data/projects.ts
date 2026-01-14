import { Project } from '../types';

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