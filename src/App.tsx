import React, { useState } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  ExternalLink, 
  Cpu, 
  Code2, 
  Zap, 
  BookOpen, 
  Mail, 
  ChevronRight,
  Star,
  Coffee
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  platform: 'Medium' | 'Dev.to';
  url: string;
}

const App = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'blog'>('projects');

  const projects: Project[] = [
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

  const blogPosts: BlogPost[] = [
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
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Cpu size={18} className="text-white" />
            </div>
            <span>TECH<span className="text-cyan-400">ADVOCATE</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="#sponsorship" className="hover:text-cyan-400 transition-colors">Sponsorship</a>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-cyan-400 transition-all duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-6 uppercase tracking-widest">
              <Zap size={12} /> Available for Developer Advocate Roles
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Future</span> of Tech.
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Creative Technologist & Developer Advocate. I bridge the gap between complex engineering and human-centric storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                View Projects <ChevronRight size={20} />
              </button>
              <div className="flex items-center gap-4 px-4">
                <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
                <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src="https://csspicker.dev/api/image/?q=developer+setup+neon&image_type=photo" 
              alt="Tech Setup" 
              className="relative rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Sponsorship Banner */}
      <section id="sponsorship" className="py-12 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Star className="text-yellow-400 fill-yellow-400" />
            <p className="text-lg font-medium">Trusted by industry leaders for hardware reviews & technical advocacy.</p>
          </div>
          <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-2xl">TECHGEAR</span>
            <span className="font-bold text-2xl">LOGIC</span>
            <span className="font-bold text-2xl">NVIDIA</span>
          </div>
        </div>
      </section>

      {/* Content Switcher */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 bg-white/5 rounded-2xl border border-white/10">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'projects' ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white'}`}
              >
                <Code2 size={18} /> Projects
              </button>
              <button 
                onClick={() => setActiveTab('blog')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'blog' ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white'}`}
              >
                <BookOpen size={18} /> Blog Posts
              </button>
            </div>
          </div>

          {activeTab === 'projects' ? (
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/10 rounded text-cyan-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">{project.description}</p>
                    <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all">
                      Case Study <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-6">
              {blogPosts.map((post) => (
                <a 
                  key={post.id} 
                  href={post.url}
                  className="block p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${post.platform === 'Medium' ? 'bg-black text-white border border-white/20' : 'bg-blue-600 text-white'}`}>
                        {post.platform}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-cyan-400 font-bold text-sm">
                    Read full article <ChevronRight size={16} />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-cyan-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's build something legendary.</h2>
          <p className="text-xl text-gray-400 mb-10">
            Looking for a technical speaker, hardware reviewer, or a developer advocate to grow your community?
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="mailto:hello@example.com" className="flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-cyan-400 transition-all">
              <Mail size={20} /> Send an Email
            </a>
            <button className="flex items-center justify-center gap-2 bg-white/10 border border-white/10 font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all">
              <Coffee size={20} /> Buy me a Gear
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2023 Creative Technologist Portfolio. Built with React & Tailwind.</p>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default App;