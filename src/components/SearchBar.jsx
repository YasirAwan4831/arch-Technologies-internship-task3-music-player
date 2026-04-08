import React, { useState } from 'react';
import { usePlayer } from '../context/PlayerContext';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { handleSearch } = usePlayer();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(query === '' ? 'trending' : query);
  };

  return (
    <form onSubmit={onSubmit} className="relative w-full md:w-80 group animate-fade-in">
      <div className={`absolute inset-0 bg-blue-500/20 rounded-full blur-md transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
      <input
        type="text"
        placeholder="Search for songs or artists..."
        className="relative w-full bg-gray-800/80 backdrop-blur-sm text-white rounded-full py-2.5 pl-5 pr-12 border border-gray-700/50 focus:border-blue-500/50 focus:outline-none transition-all duration-300 placeholder-gray-500 shadow-inner"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button 
        type="submit" 
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 z-10"
      >
        <Search size={16} />
      </button>
    </form>
  );
};

export default SearchBar;
