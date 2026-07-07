"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-900 text-yellow-400 flex items-center justify-center font-bold text-xl">
            D
          </div>

          <div>
            <h1 className="text-xl font-bold text-blue-950 leading-none">
              DSD Germany
            </h1>
            <p className="text-xs text-gray-500">
              Karriere & Ausbildung
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <a href="#" className="hover:text-blue-700 transition">Ana Sayfa</a>
          <a href="#hizmetler" className="hover:text-blue-700 transition">Hizmetler</a>
          <a href="#iletisim" className="hover:text-blue-700 transition">İletişim</a>

          <a
            href="#iletisim"
            className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition"
          >
            Başvur
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-blue-900"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            <a href="#" onClick={() => setMenuOpen(false)}>Ana Sayfa</a>
            <a href="#hizmetler" onClick={() => setMenuOpen(false)}>Hizmetler</a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>

            <a
              href="#iletisim"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-700 text-white text-center py-3 rounded-xl"
            >
              Başvur
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}