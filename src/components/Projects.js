import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 body-font">
      <div className="py-2 mx-auto text-center">
        <div className="flex flex-col w-full mb-20">
          <div className="flex flex-row">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-12 text-white m-auto">
              My Projects
            </h1>
            <div className="flex-col justify-center items-right p-4">
              <p className="pb-2">Check out all my projects on</p>
              <a
                href="https://github.com/MiaoE?tab=repositories"
                target="_blank"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Github
              </a>
            </div>
          </div>
          <div className="bg-autoimmunebg h-3/4 bg-fixed bg-no-repeat bg-center bg-cover w-full mx-auto">
            <div className="bg-gray-900 py-64 bg-opacity-40">
              <h1 className="text-xl title-font text-white"><a href="https://github.com/MiaoE/Auto-Immune" className="underline">Auto Immune</a></h1>
              An isometric strategy game in Java using LWJGL library and jMonkeyEngine (2020)
            </div>
          </div>
          <br className="container py-10 px-10" />
          <div className="bg-duberbg h-3/4 bg-fixed bg-no-repeat bg-center bg-cover w-full mx-auto">
            <div className="bg-gray-900 py-64 bg-opacity-40">
              <h1 className="text-xl title-font text-white"><a href="https://github.com/MiaoE/Dubers-Revenge" className="underline">Duber's Revenge</a></h1>
              A top-down shooter survival game in Java using the swing library from javax package (2019)
            </div>
          </div>
          <br className="container py-10 px-10" />
          <div className="w-full h-3/4 mx-auto bg-lostpathbg bg-fixed bg-no-repeat bg-bottom bg-cover">
            <div className="bg-gray-900 py-64 bg-opacity-40">
              <h1 className="text-xl title-font text-white"><a href="https://github.com/MiaoE/Lost-Path" className="underline">A Lost Path</a></h1>
              A 2D platform game in Python using the pygame library. Originally in Python 2, later updated to Python 3.
            </div>
          </div>
          <br className="container py-10 px-10" />
          <div className="w-full h-3/4 py-64 mx-auto">
            <h1 className="text-xl title-font text-white">RoboCar</h1>
            Designed a robot that can navigate through a course using motors, ultrasonic sensors, and fluorescent display (2019)
          </div>
          <br className="container py-10 px-10" />
        </div>
        <div className="flex-col justify-center items-right">
          <p className="pb-2">Check out all my projects on</p>
          <a
            href="https://github.com/MiaoE?tab=repositories"
            target="_blank"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
