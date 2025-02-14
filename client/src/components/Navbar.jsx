import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/fondos/2.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* LOGO */}
        <a href="#" className="text-7xl font-bold text-yellow-500">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </a>

        {/* LINKS DESKTOP CENTRADOS */}
        <ul className="hidden md:flex space-x-8 text-lg absolute font-lucky bg-violet-500 py-3 px-7 border-4 border-black rounded-full left-1/2 transform -translate-x-1/2 text-stone-300">
          <li>
            <a href="#inicio" className="hover:text-marronclaro">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-marronclaro">
              About
            </a>
          </li>
          <li>
            <a href="#howtobuy" className="hover:text-marronclaro">
              How to Buy
            </a>
          </li>
        </ul>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="md:hidden text-white text-3xl z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center z-40`}
      >
        {/* BOTÓN CERRAR CON MAYOR Z-INDEX */}

        {/* LINKS */}
        <div className="flex flex-col items-center space-y-6 text-2xl font-lucky">
          <a
            href="#inicio"
            onClick={() => setMenuOpen(false)}
            className="hover:text-marronclaro"
          >
            Inicio
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-marronclaro"
          >
            About
          </a>
          <a
            href="#howtobuy"
            onClick={() => setMenuOpen(false)}
            className="hover:text-marronclaro"
          >
            How to Buy
          </a>
        </div>
      </div>
    </nav>
  );
}
