import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all">
    <div className="h-48 overflow-hidden">
      <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/0 transition-colors z-10"></div>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-bold px-2 py-1 bg-white/5 rounded text-cyan-400">{tag}</span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-2">{project.title} <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" /></h3>
      <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
    </div>
  </div>
);

export default ProjectCard;