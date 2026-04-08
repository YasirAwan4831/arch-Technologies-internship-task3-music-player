// Note: We use iTunes Search API because it does not require a CORS proxy for frontend usage and provides a reliable audio preview URL.
const BASE_URL = 'https://itunes.apple.com/search';

export const searchMusic = async (query = 'trending', limit = 20) => {
  try {
    const response = await fetch(`${BASE_URL}?term=${encodeURIComponent(query)}&media=music&limit=${limit}`);
    const data = await response.json();
    return data.results.map((track) => ({
      id: track.trackId,
      title: track.trackName,
      artist: track.artistName,
      cover: track.artworkUrl100?.replace('100x100bb', '300x300bb'), // get better quality cover
      previewUrl: track.previewUrl,
    })).filter(track => track.previewUrl); // Keep only tracks with audio preview
  } catch (error) {
    console.error("Error fetching music:", error);
    return [];
  }
};
