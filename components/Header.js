import React from 'react';
import { MdMoreVert } from 'react-icons/md';

const Header = ({ setShowSidebar }) => {
  return (
    <header className="fixed top-0 md:ml-64 w-full md:w-[calc(100%-256px)] flex items-center justify-between p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg z-50">
      <div></div>

      <div className="flex items-center gap-4">
        <button className="px-5 py-2 text-sm font-medium transition-all border border-gray-600 rounded-full hover:bg-gray-700">
          Iniciar sesión
        </button>
        <button className="px-5 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700">
          Registrarse
        </button>
        <button 
          className="px-2 py-2 text-2xl transition-all rounded-full md:py-3 md:px-4 hover:bg-gray-700"
          onClick={() => setShowSidebar(true)}
        >
          <MdMoreVert className="box-content p-2 text-2xl hover:cursor-pointer" />
        </button>
      </div>
    </header>
  );
};

export default Header;
