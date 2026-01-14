import React, { useState } from 'react';
import { Code2, BookOpen } from 'lucide-react';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blogPosts';
import ProjectCard from './ui/ProjectCard';
import BlogPostCard from './ui/BlogPostCard';

const ContentSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'blog'>('projects');

  return (
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
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSwitcher;