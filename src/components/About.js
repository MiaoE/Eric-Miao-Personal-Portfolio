import React from "react";

export default function About() {
  return (
    <section id="about" className="mx-auto flex flex-col items-center bg-gray-800">
      <div className="mx-auto flex bg-campbg bg-cover bg-center bg-no-repeat bg-fixed px-10 py-48 flex-col items-center w-full">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left p-8 items-center text-center bg-gray-900 bg-opacity-70 rounded-2xl">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hobbies
          </h1>
          <h3 className="subtitle-font text-2xl">
            Outdoors
          </h3>
          <p className="leading-relaxed">
            <li>Camping - gives me a chance of being outside and enjoying nature and the opportunity to bond with my
            family and friends</li>
            <li>Biking - good lower-body exercise, bonding with friends. Includes mountain biking, trail/gravel biking and road biking</li>
            <li>Driving - loves the freedom and the feeling of the breeze, capable of manual transmission</li>
            <li>Shooting - practice accuracy and precision, not PAL licenced</li>
            <li>Airsoft - shooting and being tactical, cosplays</li>
          </p>
          <h3 className="subtitle-font text-2xl">
            Indoors
          </h3>
          <p>
            <li>Gaming - Valorant, CS:GO, TheHunter: Breath of the Wild, Battlefield 1, Genshin Impact</li>
            <li>Piano (discontinued) - anime opening/closing, soft/nostalgic</li>
          </p>
        </div>
      </div>
      <br className="container py-10 px-10" />
      <div className="mx-auto flex px-10 py-48 flex-col items-center w-full bg-cadetsbg bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left p-8 items-center text-center bg-gray-900 bg-opacity-70 rounded-2xl">
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
            University of Toronto - Engineering Science | 2021-Present | Currently PEY 12-month work term
            <li>Computer Programming: Python and C, Algorithms and Data Structures (Year 1)</li>
            <li>Electrical Curcuits (Year 1)</li>
            <li>Calculus and Linear Algebra (Year 1)</li>
            <li>Structures, Molecules, and Materials (Year 1)</li>
            <li>Digital and Computer Systems: System Verilog and RISC-V-32I (Year 2)</li>
            <li>Waves and Quantum Physics (Year 2)</li>
            <li>Vector Calculus, Ordinary Differential Equations (Year 2)</li>
            <li>Thermodynamics, Heat Transfer, and Thermal Physics (Year 2)</li>
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
