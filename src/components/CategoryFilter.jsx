import React from 'react';
import { usePlayer } from '../context/PlayerContext';

const categories = ['Trending', 'Pop', 'Hip Hop', 'Rock', 'Sad', 'Chill', 'Workout'];

const CategoryFilter = () => {
  const { currentCategory, setCurrentCategory } = usePlayer();

  return (
    <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCurrentCategory(cat)}
          className={`px-5 py-2 flex-shrink-0 rounded-full whitespace-nowrap font-medium transition-colors ${
            currentCategory === cat || currentCategory === `Search: ${cat}`
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
