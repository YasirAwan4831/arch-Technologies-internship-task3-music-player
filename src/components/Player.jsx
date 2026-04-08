import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import Controls from './Controls';

const Player = () => {
  const { currentSong } = usePlayer();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 shadow-2xl z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
        
        {/* Song Info */}
        <div className="flex items-center gap-4 w-full md:w-1/4 lg:w-1/3">
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="w-14 h-14 rounded-lg object-cover shadow-lg"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-white font-semibold truncate text-sm md:text-base">{currentSong.title}</h3>
            <p className="text-gray-400 text-xs md:text-sm truncate">{currentSong.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="w-full md:w-3/4 lg:w-2/3 flex justify-center">
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default Player;
