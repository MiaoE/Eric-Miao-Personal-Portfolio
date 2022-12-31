import React from "react";

export default function About() {
  return (
    <section id="about" className="mx-auto flex flex-col items-center bg-gray-800">
      <div className="mx-auto flex bg-campbg bg-cover bg-center bg-no-repeat bg-fixed px-10 py-48 flex-col items-center w-full">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left p-8 items-center text-center bg-gray-900 bg-opacity-70 rounded-2xl">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hobbies
          </h1>
          <p className="leading-relaxed">
            I love camping as it gives me a chance of being outside and enjoying nature. It also gives me the opportunity to bond with my
            family and my friends. I also like to bike with friends, including mountain biking, trail/gravel biking and road biking. 
            <br /><br />
            At home, I enjoy playing piano; I love playing anime opening and closing pieces, such as One Summer's Day, as well as calming 
            and nostalgic pieces, such as River Flows In You and Kiss The Rain. I also love to play video games, namely Valorant, Genshin 
            Impact, and other small group party or multiplayer games.
            <br />
          </p>
        </div>
      </div>
      <br className="container py-10 px-10" />
      <div className="mx-auto flex px-10 py-48 flex-col items-center w-full">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left p-8 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Experiences
          </h1>
          <p className="leading-relaxed border-b">
            Assistant Instructor, Instructor, and Summer Camp Counsellor | Nov, 2019 - Sep, 2020<br />
            <a href="https://www.engineeringforkids.com/toronto-york-region/"  target="_blank" rel="noreferrer">Engineering For Kids Toronto - York Region</a><br />
          </p>
          <p className="leading-relaxed mt-2">
            As an instructor for children aged 5 to 12, I was responsible for delivering course material in an intriguing way 
            that sparks their interest in engineering. Material that I taught include programming a Lego robot, making games with 
            Scratch and Clickteam Fusion, and designing unique toys using TinkerCAD.
          </p>
        </div>
      </div>
      <br className="container py-10 px-10" />
      <div className="mx-auto flex px-10 py-48 flex-col items-center w-full">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left p-8 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Extracurriculars
          </h1>
          <p className="leading-relaxed border-b">
            Cadet (Sergeant) | Sep, 2015 - Jan, 2019<br />
            <a href="https://www.778banshee.com/" target="_blank" rel="noreferrer">778 Banshee Royal Canadian Air Cadets Squadron</a>
          </p>
          <p className="leading-relaxed mt-2">
            As a senior cadet, I was responsible for teaching assigned lessons to cadets during training nights. 
            In addition, I was responsible for ensuring the safety of cadets and giving commands to enforce discipline.
            As a section commander, I was responsible for relaying information to my section from flight commander, as 
            per the chain of command. I was also responsible for relaying information about my section up the chain of 
            command.
          </p>
        </div>
      </div>
      <br className="container py-10 px-10" />
      <div className="mx-auto flex bg-uoftbg bg-cover bg-bottom bg-no-repeat bg-fixed px-10 py-48 flex-col items-center w-full">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left p-8 items-center text-center bg-gray-900 bg-opacity-80 rounded-2xl">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Education and Courses
          </h1>
          <p className="leading-relaxed text-gray-100">
            University of Toronto - Engineering Science | 2021-Present
            <li>Computer Programming: Python and C, Algorithms and Data Structures (Year 1)</li>
            <li>Electrical Curcuits (Year 1)</li>
            <li>Calculus and Linear Algebra (Year 1)</li>
            <li>Structures, Molecules, and Materials (Year 1)</li>
            <li>Digital and Computer Systems: System Verilog and RISC-V-32I (Year 2)</li>
            <li>Vector Calculus, Ordinary Differential Equations (Year 2)</li>
            <li>Thermodynamics and Heat Transfer (Year 2)</li>
            <li>Fluid Mechanics (Year 2)</li>
            <br />
            Richmond Hill High School (ON) | 2017-2021
            <li>Computer Science: Java and Python, Object-oriented Programming (Grades 10, 11, 12)</li>
            <li>Computer Engineering: Arduino (Grade 11)</li>
          </p>
        </div>
      </div>
    </section>
  );
}
