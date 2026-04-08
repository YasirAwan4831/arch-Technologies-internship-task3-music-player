import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import { Play, Pause, Music, Disc3 } from 'lucide-react';

const Playlist = () => {
  const { songs, loading, selectAndPlay, currentSongIndex, isPlaying } = usePlayer();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center text-gray-400 gap-6 py-20 animate-fade-in">
        <Disc3 size={48} className="animate-spin text-blue-500" />
        <p className="animate-pulse">Curating your customized playlist...</p>
      </div>
    );
  }

  if (songs.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center text-gray-400 gap-4 py-20 animate-fade-in">
        <Music size={48} className="text-gray-600 opacity-50" />
        <p>No songs found for this search.</p>
      </div>
    );
  }

  return (
    <div className="pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {songs.map((song, index) => {
          const isCurrent = currentSongIndex === index;
          
          return (
            <div
              key={`${song.id}-${index}`}
              style={{ animationDelay: `${index * 30}ms`, animationFillMode: 'both' }}
              onClick={() => selectAndPlay(index)}
              className={`group flex items-center gap-4 p-3.5 rounded-2xl cursor-pointer transition-all duration-300 animate-slide-up hover:-translate-y-1 ${
                isCurrent 
                  ? 'bg-gray-800/80 border border-blue-500/40 shadow-lg shadow-blue-500/10' 
                  : 'bg-gray-800/30 border border-transparent hover:bg-gray-800/60 hover:border-gray-700/50 hover:shadow-xl'
              }`}
            >
              <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl">
                <img
                  src={song.cover}
                  alt={song.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${isCurrent && isPlaying ? 'scale-110' : 'group-hover:scale-105'}`}
                />
                <div className={`absolute inset-0 bg-black/40 flex justify-center items-center backdrop-blur-[2px] transition-all duration-300 ${isCurrent && isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {isCurrent && isPlaying ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-40"></div>
                      <Pause size={20} className="text-white fill-white relative z-10" />
                    </div>
                  ) : (
                    <Play size={20} className="text-white ml-0.5 fill-white" />
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0 pr-2">
                <p className={`font-bold truncate transition-colors duration-300 ${isCurrent ? 'text-blue-400' : 'text-gray-100 group-hover:text-blue-300'}`}>
                  {song.title}
                </p>
                <p className="text-sm text-gray-400 truncate mt-0.5">{song.artist}</p>
              </div>
              {isCurrent && isPlaying && (
                 <div className="flex gap-1 items-end h-4 pr-3 opacity-80">
                   <div className="w-1 bg-blue-400 h-full animate-[bounce_1s_infinite]"></div>
                   <div className="w-1 bg-blue-400 h-2/3 animate-[bounce_1.2s_infinite]"></div>
                   <div className="w-1 bg-blue-400 h-full animate-[bounce_0.8s_infinite]"></div>
                 </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
