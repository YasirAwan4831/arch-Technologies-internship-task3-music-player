import React, { useRef } from 'react';
import { usePlayer } from '../context/PlayerContext';
import { formatTime } from '../utils/helpers';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

const Controls = () => {
  const {
    isPlaying, togglePlay, playNext, playPrev,
    progress, duration, handleSeek,
    volume, changeVolume, currentSongIndex
  } = usePlayer();
  
  const progressBarRef = useRef(null);

  const onSeek = (e) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;
    handleSeek(percent);
  };

  const progressPercent = duration > 0 ? (progress / duration) * 100 : 0;
  const isControlsDisabled = currentSongIndex === -1;

  return (
    <div className="w-full max-w-2xl flex flex-col items-center gap-3">
      <div className="flex items-center gap-6">
        <button 
          className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
          onClick={playPrev}
          disabled={isControlsDisabled}
        >
          <SkipBack size={24} className="fill-current" />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-400 text-white transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-50"
          onClick={togglePlay}
          disabled={isControlsDisabled}
        >
          {isPlaying ? <Pause size={24} className="fill-white" /> : <Play size={24} className="ml-1 fill-white" />}
        </button>
        <button 
          className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
          onClick={playNext}
          disabled={isControlsDisabled}
        >
          <SkipForward size={24} className="fill-current" />
        </button>
      </div>
      
      {/* Progress & Volume Controls */}
      <div className="w-full flex items-center gap-3 text-xs font-medium text-gray-400">
        <span className="w-10 text-right text-gray-500">{formatTime(progress)}</span>
        
        <div
          ref={progressBarRef}
          className={`flex-1 h-2 bg-gray-800 rounded-full relative group ${isControlsDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} hover:bg-gray-700 transition-colors border border-gray-700`}
          onClick={isControlsDisabled ? undefined : onSeek}
        >
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ left: `calc(${progressPercent}% - 6px)` }}
          />
        </div>
        <span className="w-10 text-left text-gray-500">{formatTime(duration)}</span>
        
        {/* Volume Control */}
        <div className="hidden md:flex items-center gap-2 ml-4 w-28">
          <button 
            onClick={() => changeVolume(volume === 0 ? 1 : 0)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <div className="flex-1 flex items-center h-2 bg-gray-800 rounded-full relative border border-gray-700 group">
             <div className="absolute top-0 left-0 h-full bg-gray-400 rounded-full" style={{ width: `${volume * 100}%` }}></div>
             <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => changeVolume(parseFloat(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
