import React from 'react';
import { Cloud, Server, Network, HardDrive } from 'lucide-react';
import { portfolioData } from '../mock';
import { Card } from './ui/card';

const SkillsSection = () => {
  const { coreSkills } = portfolioData;
  
  const iconMap = {
    "Cloud & Virtualization": Cloud,
    "Windows Server": Server,
    "Networking": Network,
    "Storage": HardDrive
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">Core Skills</h2>
        <p className="text-slate-600 text-center mb-12">Technical expertise across enterprise infrastructure</p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {coreSkills.map((skillSet) => {
            const Icon = iconMap[skillSet.category];
            return (
              <Card 
                key={skillSet.id}
                className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{skillSet.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 text-sm font-medium transition-all duration-200 border border-slate-200 hover:border-blue-300"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;