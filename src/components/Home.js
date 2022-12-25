import React from "react";

export default function Home() {
    return(
        <section id="home" className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-gray-900 bg-opacity-40">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-center mb-16 md:mb-0 items-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 pr-2 pl-2 pt-1 pb-2 font-medium text-white text-center justify-center bg-gray-800 bg-opacity-50 rounded-xl">
                    Hello, I'm Eric
                </h1>
                <div className="mt-16 mb-16">
                    <img src="/assets/me1.jpg" className="rounded-full w-96 h-96 object-cover" />
                </div>
                <div className="lg:flex justify-center bg-gray-800 pt-2 bg-opacity-50 rounded-xl pl-4 pr-4">
                    <p className="mb-2 text-white w-96">
                        Welcome and thank you for visiting my website. Here, you will find 
                        a little more information about me. They include my hobbies, my past and current
                        education, my past work and projects, and finally ways of contacting me.
                    </p>
                </div>
                <div className="justify-center items-center text-center">
                    <a href="#about" className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg ml-4 bg-opacity-50 hover:bg-opacity-60">
                        About Me
                    </a>
                    <a href="#projects" className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg ml-4 bg-opacity-50 hover:bg-opacity-60">
                        My Projects
                    </a>
                </div>
            </div>
        </section>
    )
}