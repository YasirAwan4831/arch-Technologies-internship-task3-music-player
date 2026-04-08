import React from 'react';
import SearchBar from './SearchBar';
import { Music } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 border-b border-gray-800/50 animate-slide-down">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
          <Music size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:to-white transition-colors duration-300">
          Arch Music
        </h1>
      </div>
      
      <nav className="hidden md:flex items-center justify-center flex-1 gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-blue-400 transition-colors hover:-translate-y-0.5 transform duration-200">Discover</a>
        <a href="#" className="hover:text-blue-400 transition-colors hover:-translate-y-0.5 transform duration-200">Library</a>
        <a href="#about" className="hover:text-blue-400 transition-colors hover:-translate-y-0.5 transform duration-200">About</a>
      </nav>

      <div className="w-full md:w-auto">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
