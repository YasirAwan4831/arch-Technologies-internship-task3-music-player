import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import { Play, Pause, Music } from 'lucide-react';

const Playlist = () => {
  const { songs, loading, selectAndPlay, currentSongIndex, isPlaying } = usePlayer();

  if (loading) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center text-gray-400 gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p>Fetching beautiful tunes...</p>
      </div>
    );
  }

  if (songs.length === 0) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center text-gray-400 gap-4">
        <Music size={48} className="text-gray-600" />
        <p>No songs found for this search.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto pr-2 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map((song, index) => {
          const isCurrent = currentSongIndex === index;
          
          return (
            <div
              key={song.id}
              onClick={() => selectAndPlay(index)}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all hover:bg-gray-800 border ${
                isCurrent ? 'border-blue-500 bg-gray-800/50 shadow-md shadow-blue-500/10' : 'border-transparent'
              }`}
            >
              <div className="relative group w-16 h-16 flex-shrink-0">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-full h-full rounded-md object-cover shadow-md"
                />
                <div className={`absolute inset-0 bg-black/50 rounded-md flex justify-center items-center ${isCurrent && isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
                  {isCurrent && isPlaying ? <Pause size={20} className="text-white fill-white" /> : <Play size={20} className="text-white ml-1 fill-white" />}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-semibold truncate ${isCurrent ? 'text-blue-400' : 'text-white'}`}>
                  {song.title}
                </p>
                <p className="text-sm text-gray-400 truncate">{song.artist}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
