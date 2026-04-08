import React from 'react'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import Playlist from './components/Playlist'
import Player from './components/Player'

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans max-w-6xl mx-auto p-4">
      <header className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 border-b border-gray-800">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Arch Music
        </h1>
        <SearchBar />
      </header>

      <main className="flex-1 overflow-hidden flex flex-col pt-6 gap-6">
        <CategoryFilter />
        <Playlist />
      </main>

      <Player />
    </div>
  )
}

export default App
