import React from 'react';
import Image from 'next/image';
import { MdHomeFilled, MdSearch, MdLibraryMusic, MdFavorite, MdPlaylistAdd, MdClose } from 'react-icons/md';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`fixed top-0 w-64 h-full p-6 text-white shadow-lg bg-gradient-to-b from-gray-900 via-gray-800 to-black transition-all duration-300 ${showSidebar ? "left-0" : "-left-full"} md:left-0 z-50`}>
      
      {/* Botón de cerrar en móvil */}
      <button
        className="absolute text-gray-400 top-4 right-4 hover:text-white md:hidden"
        onClick={() => setShowSidebar(false)}
      >
        <MdClose size={24} />
      </button>

      {/* Logo */}
      <div className="mt-4 mb-10 text-center">
        <Image 
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" 
          alt="Spotify" 
          width={140} 
          height={140} 
        />
      </div>

      {/* Navegación */}
      <nav>
        <ul className="space-y-6">
          <NavItem icon={<MdHomeFilled />} label="Inicio" />
          <NavItem icon={<MdSearch />} label="Buscar" />
          <NavItem icon={<MdLibraryMusic />} label="Tu Biblioteca" />
        </ul>
      </nav>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Playlists */}
      <nav className="h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        <ul className="space-y-6">
          <NavItem icon={<MdPlaylistAdd />} label="Crear Playlist" />
          <NavItem icon={<MdFavorite />} label="Tus Favoritos" />
        </ul>

        {/* Ejemplo de Playlists */}
        <div className="mt-8">
          <h3 className="mb-3 text-sm font-semibold text-gray-400 uppercase">Tus Playlists</h3>
          <ul className="space-y-3">
            <PlaylistItem label="Daily Mix 1" />
            <PlaylistItem label="Rock Classics" />
            <PlaylistItem label="Lo-Fi Beats" />
          </ul>
        </div>
      </nav>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Footer Links */}
      <div className="mt-8 text-sm text-gray-400">
        <a href="#" className="block p-2 transition-colors hover:text-white">Cookies</a>
        <a href="#" className="block p-2 transition-colors hover:text-white">Privacidad</a>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <li className="group">
    <a href="#" className="flex items-center gap-4 p-3 transition-all rounded-lg hover:bg-gray-700">
      <span className="text-2xl text-gray-400 group-hover:text-green-500">{icon}</span>
      <span className="text-base font-medium group-hover:text-green-500">{label}</span>
    </a>
  </li>
);

const PlaylistItem = ({ label }) => (
  <li>
    <a href="#" className="block p-2 text-gray-400 transition-colors rounded-lg hover:bg-gray-700 hover:text-white">
      {label}
    </a>
  </li>
);

export default Sidebar;
