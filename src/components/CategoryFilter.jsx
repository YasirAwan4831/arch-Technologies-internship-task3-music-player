import React from 'react';
import { usePlayer } from '../context/PlayerContext';

const categories = ['Trending', 'Pop', 'Hip Hop', 'Rock', 'Sad', 'Chill', 'Workout', 'Acoustic'];

const CategoryFilter = () => {
  const { currentCategory, setCurrentCategory } = usePlayer();

  return (
    <div className="flex gap-3 overflow-x-auto pb-4 pt-2 animate-fade-in" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {categories.map((cat, index) => {
        const isActive = currentCategory === cat || currentCategory === `Search: ${cat}`;
        return (
          <button
            key={cat}
            onClick={() => setCurrentCategory(cat)}
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
            className={`px-5 py-2.5 flex-shrink-0 rounded-2xl whitespace-nowrap text-sm font-semibold transition-all duration-300 animate-slide-up hover:-translate-y-1 ${
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/25 scale-105 border border-blue-400/30'
                : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700/50'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
