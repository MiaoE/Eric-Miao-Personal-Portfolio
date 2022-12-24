import React from "react";
import CurPage from "../App.js";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-l from-blue-600 to-indigo-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a id="title" href="#home" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          Eric Miao
        </a>

        <nav className="md:mr-auto md:ml-5 md:py-1 md:pl-4 md:border-l md:border-gray-800	flex flex-wrap items-center text-base justify-center text-xl">
          <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Project
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="#hiring"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0 text-xl">
          Seeking Summer Internship
        </a>
      </div>
    </header>
  );
}
