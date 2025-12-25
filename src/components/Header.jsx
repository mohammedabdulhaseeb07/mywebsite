import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const Header = () => {
  const handleDownloadResume = () => {
    // Placeholder function - will be implemented later
    window.open('/resume.pdf', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-slate-900">
          MAH
        </div>
        
        <Button 
          onClick={handleDownloadResume}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
        >
          <Download size={18} />
          Download Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;