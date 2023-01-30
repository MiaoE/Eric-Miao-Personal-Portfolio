import React from "react";
import {Link} from "react-router-dom";
import Pdf from "../Resume.pdf";

export default function Navbar() {
  const emailCopy = () => {
    navigator.clipboard.writeText("ericxmiao@gmail.com")
    .then(() => alert("Email copied to clipboard"), () => alert("Failed to copy email"));
  };

  return (
    <header className="bg-gradient-to-l from-blue-600 to-indigo-900 md:sticky top-0 z-10 bg-opacity-40">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          Eric Miao
        </Link>

        <div className="md:mr-auto md:ml-5 md:py-1 md:pl-4 md:border-l md:border-gray-800	flex flex-wrap items-center text-base justify-center text-xl text-gray-400">
          <Link to="/about" className="mr-5 hover:text-white">
            About
          </Link>
          <Link to="/experiences" className="mr-5 hover:text-white">
            Experiences
          </Link>
          {/*<Link to="/contact" className="mr-5 hover:text-white">
            Contact
          </Link>*/}
        </div>
{/*
        <Link
          to={Pdf}
          target="_blank"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0 text-xl text-gray-400">
          Resume
        </Link>
*/}
          <button onClick={emailCopy} className="container w-10 h-10 bg-gray-200 bg-opacity-30 hover:bg-opacity-70 rounded-full md:mr-2 sm:mr-1 justify-items-center">
            <img src="/assets/emailicon.png" alt="Email icon" className="object-contain" />
          </button>
          <a href="https://github.com/MiaoE" target="_blank" rel="noreferrer" className="container w-10 h-10 bg-gray-200 bg-opacity-30 hover:bg-opacity-70 rounded-full md:mr-2 sm:mr-1 justify-items-center">
            <img src="/assets/githubicon.png" alt="Github icon" className="object-contain m-auto" />
          </a>
          <a href="https://www.linkedin.com/in/ericmiao03/" rel="noreferrer" target="_blank" className="container w-10 h-10 bg-gray-200 bg-opacity-30 hover:bg-opacity-70 rounded-full md:mr-2 sm:mr-1 ">
            <img src="/assets/linkedinicon.png" alt="LinkedIn icon" className="w-6 h-6 m-2" />
          </a>

      </div>
    </header>
  );
}
