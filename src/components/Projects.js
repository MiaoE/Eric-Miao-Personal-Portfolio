import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <li>Developed <a href="https://github.com/MiaoE/Auto-Immune" className="underline">Auto Immune</a>, an isometric strategy game in Java using LWJGL library and jMonkeyEngine (2020)</li>
            <li>Developed <a href="https://github.com/MiaoE/Dubers-Revenge" className="underline">Duber's Revenge</a>, a top-down shooter survival game in Java using the swing library from javax package (2019)</li>
            <li>Designed a robot that can navigate through a course using motors, ultrasonic sensors, and fluorescent display (2019)</li>
            <li>Developed <a href="https://github.com/MiaoE/Lost-Path" className="underline">A Lost Path</a>, a 2D platform game in Python using pygame library</li>
          </p>
        </div>
        <div className="flex justify-center items-right">
          <a
            href="https://github.com/MiaoE?tab=repositories"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
