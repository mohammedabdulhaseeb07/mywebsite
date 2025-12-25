import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { portfolioData } from '../mock';
import { Card } from './ui/card';

const ContactSection = () => {
  const { contact } = portfolioData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">Get In Touch</h2>
          <p className="text-slate-600 text-center mb-12">Feel free to reach out for opportunities or collaborations</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600">
              <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                <Mail className="text-blue-600" size={28} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 text-sm break-words">{contact.email}</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600">
              <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                <Phone className="text-blue-600" size={28} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 text-sm">{contact.phone}</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600">
              <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                <Linkedin className="text-blue-600" size={28} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">LinkedIn</h3>
              <p className="text-slate-600 text-sm break-words">{contact.linkedin}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;