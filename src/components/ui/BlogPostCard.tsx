import React from 'react';
import { ChevronRight } from 'lucide-react';
import { BlogPost } from '../../types';

const BlogPostCard = ({ post }: { post: BlogPost }) => (
  <a href={post.url} className="block group p-6 bg-[#1a1a1a] border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all">
    <div className="flex justify-between items-start mb-4">
      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{post.platform}</span>
      <span className="text-xs text-gray-500">{post.date} • {post.readTime}</span>
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
    <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
      Read Article <ChevronRight size={16} />
    </div>
  </a>
);

export default BlogPostCard;