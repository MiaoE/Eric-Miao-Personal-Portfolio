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
                <div className="lg:flex justify-center pt-2 pl-4 pr-4 sm:w-3/4 md:w-2/3">
                    <p className="mb-2 text-white">
                        Welcome to my website. I treat this as a personal portfolio where I can
                        keep track of myself and review what I have done in my lifetime. I will
                        try to regularly update this website when I have time.
                    </p>
                </div>
                <div className="justify-center items-center text-center">
                    <Link to="/about" className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg ml-4 bg-opacity-50 hover:bg-opacity-60">
                        About Me
                    </Link>
                    <Link to="/experiences" className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg ml-4 bg-opacity-50 hover:bg-opacity-60">
                        My Projects
                    </Link>
                </div>
                <div className="text-sm w-3/4 pt-16">
                    <p className="text-white">
                        This site is made entirely with React.js and Tailwind CSS. I self-taught
                        both frameworks, as well as basic HTML and CSS. I am also proficient in
                        Python, Java, C/C++.
                    </p>
                    <p className="text-white">
                        Last Updated: May 22, 2023
                    </p>
                </div>
            </div>
        </section>
    )
}