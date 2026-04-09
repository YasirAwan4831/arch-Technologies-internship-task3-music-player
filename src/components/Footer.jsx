import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-8 pb-32 md:pb-28 pt-8 border-t border-gray-800/50 animate-fade-in relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400 font-medium">
            © 2026 Muhammad Yasir. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1.5 flex items-center justify-center md:justify-start gap-1">
            Designed & developed By 
            <a 
              href="https://yasirawaninfodev.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors ml-1 font-medium hover:underline underline-offset-2"
            >
              Muhammad Yasir
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/YasirAwan4831" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:-translate-y-1 group">
            <Github size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://x.com/YasirAwan4831" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-[#1DA1F2] transition-all duration-300 hover:-translate-y-1 group">
            <Twitter size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/yasirawan4831/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-[#0A66C2] transition-all duration-300 hover:-translate-y-1 group">
            <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
