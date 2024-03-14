import React, { useState } from 'react';
import BanderaPanama from '../assets/images/Flag.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  /* If scroll is on top */
  window.onscroll = () => {
    setScroll(window.scrollY);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed ${scroll !== 0 ? "md:-top-16" : "md:top-0" } ${isOpen ? "bg-primary-900" : ""} top-0 hover:top-0 transition-all ease-in-out z-50 w-full h-20 text-white bg-white/20 filter backdrop-blur-sm flex py-5 px-10 items-center justify-between`}>
      <a href='#' className="flex items-center space-x-4">
        <img src={BanderaPanama} alt="Logo" className="h-10 object-cover rounded-full w-10" />
        <h1 className="hidden md:block text-2xl font-bold">El Panamá Que Yo Quiero</h1>
      </a>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`md:hidden absolute bg-primary-900 h-[calc(100svh-5rem)] backdrop-blur-2xl w-svw right-0 top-20 p-5 duration-300 transition-all ease-in-out ${isOpen ? 'translate-x-0 opacity-1' : 'translate-x-[100%] opacity-0'}`}>
        <ul className="flex flex-col h-full gap-5 justify-center items-center w-full text-lg">
          <li><a href="#" className="text-white" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#encuesta1" className="text-white" onClick={toggleMenu}>Encuesta 1</a></li>
          <li><a href="#encuesta2" className="text-white" onClick={toggleMenu}>Encuesta 2</a></li>
          <li><a href="#encuesta3" className="text-white" onClick={toggleMenu}>Encuesta 3</a></li>
        </ul>
      </nav>

      {/* Desktop Menu */}
      <nav className="md:flex items-center space-x-6 hidden">
        <ul className="flex items-center space-x-6">
          <li><a href="#" className="text-lg">Inicio</a></li>
          <li><a href="#encuesta1" className="text-lg">Encuesta 1</a></li>
          <li><a href="#encuesta2" className="text-lg">Encuesta 2</a></li>
          <li><a href="#encuesta3" className="text-lg">Encuesta 3</a></li>
        </ul>
      </nav>

      <div className={`absolute left-10 ${scroll !== 0 ? "md:flex" : "hidden" } bg-white/20 -bottom-6 h-6 px-3 py-1.5 rounded-b-md w-1/12 hidden gap-0.5 items-center justify-around flex-col`}>
      <div className='bg-white/20 rounded-full h-px w-full'/>
      <div className='bg-white/20 rounded-full h-px w-full'/>
      <div className='bg-white/20 rounded-full h-px w-full'/>
      </div>

    </header>
  );
}

export default Header;
