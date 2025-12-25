import React from 'react';
import { Award, Clock } from 'lucide-react';
import { Card } from './ui/card';

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">Certifications</h2>
          </div>
          
          <Card className="p-12 text-center bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-dashed border-slate-300">
            <Clock className="mx-auto mb-4 text-slate-400" size={48} />
            <h3 className="text-2xl font-semibold text-slate-700 mb-2">Certifications In Progress</h3>
            <p className="text-slate-600">Currently working on certifications - will be updated soon!</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;