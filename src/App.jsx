import React from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import Playlist from './components/Playlist';
import Player from './components/Player';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#0f1115] text-white font-sans selection:bg-blue-500/30">
      <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="max-w-6xl mx-auto p-4 md:px-8 w-full flex flex-col min-h-full">
          <Header />
          
          <main className="flex flex-col mt-6 gap-6 flex-1">
            <CategoryFilter />
            <Playlist />
            <About />
          </main>

          <Footer />
        </div>
      </div>

      <Player />
    </div>
  );
}

export default App;
