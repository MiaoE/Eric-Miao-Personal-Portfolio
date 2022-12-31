import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return(
        <section id="home" className="flex px-10 sm:py-10 md:py-20 flex-col bg-homebg bg-no-repeat bg-fixed bg-center items-center">
            <div className="container lg:flex-grow mx-auto flex flex-col md:text-center pb-16 md:pb-12 lg:w-2/3 sm:w-3/4 items-center bg-gray-900 bg-opacity-50 rounded-3xl">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 pr-2 pl-2 pt-1 pb-2 font-medium text-white text-center justify-center">
                    Hello, I'm Eric
                </h1>
                <div className="mt-16 mb-16">
                    <img src="/assets/me1.jpg" alt="Eric" className="rounded-full w-96 h-96 object-cover" />
                </div>
                <div className="lg:flex justify-center pt-2 pl-4 pr-4 sm:w-48 md:w-96">
                    <p className="mb-2 text-white">
                        Welcome and thank you for visiting my website. Here, you will find 
                        a little more information about me. They include my hobbies, my past and current
                        education, my past work and projects, and finally ways of contacting me.
                    </p>
                </div>
                <div className="justify-center items-center text-center">
                    <Link to="/about" className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg ml-4 bg-opacity-50 hover:bg-opacity-60">
                        About Me
                    </Link>
                    <Link to="/projects" className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg ml-4 bg-opacity-50 hover:bg-opacity-60">
                        My Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}