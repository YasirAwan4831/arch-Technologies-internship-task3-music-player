import { useState, useEffect, useRef } from 'react';

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;
    
    // Set audio configuration
    audio.volume = volume;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setProgress(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const playSong = (url) => {
    if (audioRef.current.src !== url) {
      audioRef.current.src = url;
    }
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(err => {
      console.error("Failed to play audio:", err);
      setIsPlaying(false);
    });
  };

  const togglePlay = () => {
    if (!audioRef.current.src) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log(err);
      });
    }
  };

  const handleSeek = (percentage) => {
    if (!duration) return;
    const time = (percentage / 100) * duration;
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  const changeVolume = (newVolume) => {
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return {
    isPlaying,
    progress,
    volume,
    duration,
    playSong,
    togglePlay,
    handleSeek,
    changeVolume,
    setIsPlaying
  };
};
