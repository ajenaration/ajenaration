import React, { useState, useEffect } from 'react';
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
  Coffee,
  Instagram,
  Youtube,
  X,
  Download,
  Volume2,
  ArrowLeft,
  MapPin,
  Terminal,
  Copy,
  Check,
  Play,
} from 'lucide-react';
import nameAudio from './fullname.mp3';
import mainImage from './ajenaration-main.png';
import GenerativeArt from './components/GenerativeArt';
import { TiktokIcon, BlueskyIcon } from './components/CustomIcons';
import { socialLinks, sponsors, projects, blogPosts, fullTechStack, contentStats } from './data/content';

const App = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'blog'>('projects');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  // Handle URL routing
  const getInitialView = () => {
    const path = window.location.pathname;
    if (path === '/about') return 'about';
    if (path === '/sponsorship') return 'sponsorship';
    return 'home';
  };

  const [currentView, setCurrentView] = useState(getInitialView);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: 'home' | 'about' | 'sponsorship') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
    const path = view === 'home' ? '/' : `/${view}`;
    window.history.pushState({}, '', path);
  };

  const [isTechStackModalOpen, setIsTechStackModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-cyan-500 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <GenerativeArt />
      </div>
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Terminal size={28} className="text-cyan-400" />
            <span className="font-accent font-normal text-2xl">ajenaration</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <button onClick={() => navigateTo('home')} className={`hover:text-cyan-400 transition-colors ${currentView === 'home' ? 'text-cyan-400' : ''}`}>Home</button>
            <button onClick={() => navigateTo('about')} className={`hover:text-cyan-400 transition-colors ${currentView === 'about' ? 'text-cyan-400' : ''}`}>About</button>
            <a 
              href="#work" 
              onClick={(e) => { e.preventDefault(); navigateTo('home'); setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 100); }} 
              className="hover:text-cyan-400 transition-colors"
            >
              Work
            </a>
            <button onClick={() => navigateTo('sponsorship')} className={`hover:text-cyan-400 transition-colors ${currentView === 'sponsorship' ? 'text-cyan-400' : ''}`}>Sponsorship</button>
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-cyan-400 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {currentView === 'home' && (
        <>
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <button 
              onClick={() => setIsAboutModalOpen(true)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-6 uppercase tracking-widest hover:bg-cyan-500/20 transition-colors cursor-pointer"
            >
              <Zap size={12} /> Available for Developer Advocate and Backend Roles
            </button>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Obsessed with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">new</span>.
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Creative Technologist & Developer Advocate. I bridge the gap between complex engineering and human-centric storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1">
                View Projects <ChevronRight size={20} />
              </button>
              <div className="flex items-center gap-4 px-4">
                <a href={socialLinks.github} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Github size={24} /></a>
                <a href={socialLinks.twitter} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Twitter size={24} /></a>
                <a href={socialLinks.linkedin} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Linkedin size={24} /></a>
                <a href={socialLinks.instagram} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Instagram size={24} /></a>
                <a href={socialLinks.youtube} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><Youtube size={24} /></a>
                <a href={socialLinks.tiktok} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><TiktokIcon size={24} /></a>
                <a href={socialLinks.bluesky} className="p-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"><BlueskyIcon size={24} /></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-auto">
            <div className="relative w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="./src/ajenaration-main.png"
                src={mainImage}
                alt="Tech Setup" 
                className="relative rounded-2xl border border-white/10 shadow-2xl w-full h-[450px] object-cover object-top"
              />
            </div>
            <div className="flex items-center gap-2 mt-8 text-gray-400">
              <MapPin size={16} className="text-cyan-400" />
              <span className="text-sm font-medium">Toronto & New York</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Banner */}
      <section id="sponsorship" className="py-12 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 shrink-0">
            <Star className="text-yellow-400 fill-yellow-400" />
            <p className="text-lg font-medium">Trusted by industry leaders for hardware reviews & technical advocacy.</p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden relative marquee-mask">
            <div className="flex gap-8 animate-scroll whitespace-nowrap w-max opacity-50 grayscale hover:grayscale-0 transition-all">
              {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                <span key={index} className="font-semibold text-sm tracking-wider">{sponsor}</span>
              ))}
            </div>
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
            <a href="mailto:collab@ajenaration.com" className="flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-cyan-400 transition-all">
              <Mail size={20} /> Let's collab
            </a>
            <button className="flex items-center justify-center gap-2 bg-white/10 border border-white/10 font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all">
              <Coffee size={20} /> Support me
            </button>
          </div>
        </div>
      </section>
        </>
      )}

      {/* About Page */}
      {currentView === 'about' && (
        <div className="pt-32 pb-20 px-6 min-h-screen">
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="bg-[#0a0a0a] w-full rounded-2xl border border-white/10 flex flex-col shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1a1a1a]">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="font-mono text-sm flex items-center gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-white">sudo whoami</span>
                    <span className="animate-blink w-2 h-4 bg-gray-400 block"></span>
                  </div>
                </div>
                <button onClick={() => navigateTo('home')} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 space-y-12 bg-[#0a0a0a]">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    I'm Ayana (/ə ˈjenə/) Nithey
                    <button 
                      onClick={() => new Audio(nameAudio).play()}
                      className="inline-flex mx-2 align-middle p-1.5 bg-white/10 rounded-full hover:bg-cyan-500/20 text-cyan-400 transition-colors"
                      title="Play pronunciation"
                    >
                      <Volume2 size={16} />
                    </button>
                    , a Production Engineer based at the intersection of hardware and software.
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    My work focuses on making complex technology accessible through storytelling and interactive media. My journey in tech is fueled by curiosity, creativity, and a relentless pursuit of knowledge. I'm a passionate technologist driven by the desire to build meaningful connections and foster innovation within developer communities. 
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-6">Tech Stack</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(fullTechStack).map(([category, skills]) => (
                      <div key={category}>
                        <h5 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">{category}</h5>
                        <div className="flex flex-wrap gap-2">
                          {skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">DevRel & Sponsorships</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    I partner with innovative dev tools, API platforms, and open-source projects to create technical content that drives adoption. From SDK walkthroughs to infrastructure deep-dives, I help developers build the future.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all w-full md:w-auto justify-center">
                      <Download size={18} /> Download Media Kit
                    </button>
                    <a href="mailto:collab@ajenaration.com" className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all w-full md:w-auto justify-center">
                      <Mail size={18} /> Email Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sponsorship Page */}
      {currentView === 'sponsorship' && (
        <div className="pt-32 pb-20 px-6 min-h-screen">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">Sponsorships & <span className="text-cyan-400">Collaborations</span></h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Partnering with brands to tell compelling technical stories. From hardware reviews to developer advocacy, I help bridge the gap between product and community.
              </p>
            </div>

            {/* Marquee Section */}
            <div className="mb-20 py-12 bg-white/[0.06] backdrop-blur-3xl backdrop-saturate-150 border-t border-white/20 border-b border-white/5 relative overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8">
                <div className="flex items-center gap-4 shrink-0">
                  <Star className="text-yellow-400 fill-yellow-400" />
                  <p className="text-lg font-medium">Trusted by industry leaders</p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden relative marquee-mask">
                  <div className="flex gap-8 animate-scroll whitespace-nowrap w-max opacity-50 grayscale hover:grayscale-0 transition-all">
                    {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                      <span key={index} className="font-semibold text-sm tracking-wider">{sponsor}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Stats Grid */}
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Play className="text-cyan-400" /> Content Showcase
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentStats.map((video, index) => (
                <a 
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                      {video.icon} {video.platform}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">{video.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="text-cyan-400 font-bold">{video.views}</span> views
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© 2025 <span className="font-accent">ajenaration</span>.</p>
      </footer>
      </div>

      {/* About Modal (Mini Window) */}
      {isAboutModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsAboutModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="bg-[#0a0a0a] w-full rounded-2xl border border-white/10 flex flex-col shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1a1a1a]">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="font-mono text-sm flex items-center gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-white">sudo whoami</span>
                    <span className="animate-blink w-2 h-4 bg-gray-400 block"></span>
                  </div>
                </div>
                <button onClick={() => setIsAboutModalOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 space-y-8 bg-[#0a0a0a]">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    I'm Ayana (/ə ˈjenə/) Nithey
                    <button 
                      onClick={() => new Audio(nameAudio).play()}
                      className="inline-flex mx-2 align-middle p-1.5 bg-white/10 rounded-full hover:bg-cyan-500/20 text-cyan-400 transition-colors"
                      title="Play pronunciation"
                    >
                      <Volume2 size={16} />
                    </button>
                    , a Production Engineer based at the intersection of hardware and software.
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    My work focuses on making complex technology accessible through storytelling and interactive media. My journey in tech is fueled by curiosity, creativity, and a relentless pursuit of knowledge. I'm a passionate technologist driven by the desire to build meaningful connections and foster innovation within developer communities. 
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Java", "React", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "PostgreSQL", "AI/ML"].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">
                        {tech}
                      </span>
                    ))}
                    <button 
                      onClick={() => {
                        setIsTechStackModalOpen(true);
                        setTerminalInput('');
                      }}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-bold text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    >
                      + View All
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">DevRel & Sponsorships</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    I partner with innovative dev tools, API platforms, and open-source projects to create technical content that drives adoption. From SDK walkthroughs to infrastructure deep-dives, I help developers build the future.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all w-full md:w-auto justify-center">
                      <Download size={18} /> Download Media Kit
                    </button>
                    <a href="mailto:collab@ajenaration.com" className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all w-full md:w-auto justify-center">
                      <Mail size={18} /> Email Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tech Stack Modal */}
      {isTechStackModalOpen && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsTechStackModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0a0a0a] w-full rounded-2xl border border-white/10 flex flex-col shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1a1a1a]">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="font-mono text-sm flex items-center gap-2 flex-1">
                    <span className="text-cyan-400">~</span>
                    <span className="text-white">/tech-stack</span>
                    <span className="text-gray-500">$</span>
                    <input 
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && terminalInput.trim() === 'cd ..') {
                          setIsTechStackModalOpen(false);
                        }
                      }}
                      className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 placeholder:text-gray-700"
                      placeholder="type 'cd ..' to go back"
                      autoFocus
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsTechStackModalOpen(false)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                </div>
              </div>
              <div className="p-8 space-y-8 bg-[#0a0a0a] max-h-[70vh] overflow-y-auto">
                {Object.entries(fullTechStack).map(([category, skills]) => (
                  <div key={category}>
                    <h5 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">{category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {isResumeOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="bg-[#0a0a0a] w-full h-full rounded-2xl border border-white/10 flex flex-col shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#1a1a1a]">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="font-mono text-sm flex items-center gap-2">
                    <span className="text-cyan-400">~</span>
                    <span className="text-white">/resume.pdf</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href="/ayana-n-resume.pdf" 
                    download 
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-gray-300 hover:text-white transition-colors"
                  >
                    <Download size={14} /> Download PDF
                  </a>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText("work@ajenaration.com");
                      setIsEmailCopied(true);
                      setTimeout(() => setIsEmailCopied(false), 2000);
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-gray-300 hover:text-white transition-colors"
                  >
                    {isEmailCopied ? <Check size={14} /> : <Copy size={14} />}
                    {isEmailCopied ? "Copied!" : "Copy Email"}
                  </button>
                  <button onClick={() => setIsResumeOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-[#1a1a1a] p-1 overflow-hidden">
                <iframe src="/ayana-n-resume.pdf" className="w-full h-full rounded-lg bg-white" title="Resume PDF" />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .font-sans {
          font-family: 'Space Grotesk', sans-serif;
        }
        .font-accent {
          font-family: 'Shrikhand', cursive;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
};

export default App;