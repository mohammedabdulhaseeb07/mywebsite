import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Mohammed Abdul Haseeb. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm mt-2">
          Cloud & VMware Administrator | Open to Opportunities
        </p>
      </div>
    </footer>
  );
};

export default Footer;