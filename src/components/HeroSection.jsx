import React from 'react';
import { Cloud, Server, Database } from 'lucide-react';
import { portfolioData } from '../mock';

const HeroSection = () => {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-20">
      <div className="container mx-auto px-6 py-20 text-center">
        {/* Decorative Cloud Icons */}
        <div className="flex justify-center gap-8 mb-8 opacity-20">
          <Cloud size={48} className="text-blue-600 animate-float" />
          <Server size={48} className="text-blue-700 animate-float-delayed" />
          <Database size={48} className="text-blue-600 animate-float" />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6">
          {personal.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          {personal.headline}
        </p>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {personal.techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white border border-blue-200 text-slate-700 text-sm font-medium hover:border-blue-400 hover:shadow-md transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;