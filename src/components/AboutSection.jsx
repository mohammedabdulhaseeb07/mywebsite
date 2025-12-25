import React from 'react';
import { User } from 'lucide-react';
import { portfolioData } from '../mock';

const AboutSection = () => {
  const { personal } = portfolioData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <User className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">About Me</h2>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 border-l-4 border-blue-600">
            <p className="text-lg text-slate-700 leading-relaxed">
              {personal.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;