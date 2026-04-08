import React, { useState } from 'react';
import { usePlayer } from '../context/PlayerContext';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { handleSearch } = usePlayer();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(query === '' ? 'trending' : query);
  };

  return (
    <form onSubmit={onSubmit} className="relative w-full md:w-80">
      <input
        type="text"
        placeholder="Search for songs or artists..."
        className="w-full bg-gray-800 text-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
        <Search size={18} />
      </button>
    </form>
  );
};

export default SearchBar;
