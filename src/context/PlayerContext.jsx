import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAudio } from '../hooks/useAudio';
import { searchMusic } from '../services/musicApi';

export const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [currentCategory, setCurrentCategory] = useState('Trending');
  const [loading, setLoading] = useState(true);

  const audio = useAudio();

  const loadSongs = async (query) => {
    setLoading(true);
    const results = await searchMusic(query);
    setSongs(results);
    setLoading(false);
  };

  useEffect(() => {
    loadSongs(currentCategory);
  }, [currentCategory]);

  // When a song is completely finished, auto-play next
  useEffect(() => {
    if (audio.duration && audio.progress && Math.abs(audio.duration - audio.progress) < 0.5 && !audio.isPlaying) {
      playNext();
    }
  }, [audio.isPlaying, audio.progress, audio.duration]);

  const selectAndPlay = (index) => {
    setCurrentSongIndex(index);
    const song = songs[index];
    if (song && song.previewUrl) {
      audio.playSong(song.previewUrl);
    }
  };

  const playNext = () => {
    if (songs.length === 0) return;
    const nextIndex = (currentSongIndex + 1) % songs.length;
    selectAndPlay(nextIndex);
  };

  const playPrev = () => {
    if (songs.length === 0) return;
    let prevIndex = currentSongIndex - 1;
    if (prevIndex < 0) prevIndex = songs.length - 1;
    selectAndPlay(prevIndex);
  };

  const handleSearch = (query) => {
    if (query.trim()) {
      setCurrentCategory(`Search: ${query}`);
      loadSongs(query);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        songs,
        currentSongIndex,
        currentSong: currentSongIndex >= 0 ? songs[currentSongIndex] : null,
        loading,
        currentCategory,
        setCurrentCategory,
        selectAndPlay,
        playNext,
        playPrev,
        handleSearch,
        ...audio
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
