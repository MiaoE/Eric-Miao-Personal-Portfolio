import React from "react";

export default function About() {
  return (
    <section id="about" className="mx-auto flex flex-col items-center bg-gray-800">
      <div className="mx-auto flex bg-campbg bg-cover bg-center bg-no-repeat bg-fixed px-10 py-48 flex-col items-center w-full">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left pb-4 pt-4 items-center text-center bg-gray-900 bg-opacity-50 rounded-2xl">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hobbies
          </h1>
          <p className="leading-relaxed w-1/2">
            I love camping as it gives me a chance of being outside and enjoying nature. It also gives me the opportunity to bond with
            family, friends, and family friends. 
          </p>
        </div>
      </div>
      <br className="container py-10 px-10" />
      <div className="mx-auto flex px-10 py-48 flex-col items-center w-full">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left pb-4 pt-4 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Experiences
          </h1>
          <p className="leading-relaxed border-b">
            Assistant Instructor, Instructor, and Summer Camp Counsellor | Nov, 2019 - Sep, 2020<br />
            <a href="https://www.engineeringforkids.com/toronto-york-region/">Engineering For Kids Toronto - York Region</a><br />
          </p>
          <p className="leading-relaxed w-1/2">
            As an instructor for children aged 5 to 12, I was responsible for delivering course material in an intriguing way 
            that sparks their interest in engineering. Material that I taught include programming a Lego robot, making games with 
            Scratch and Clickteam Fusion, and designing unique toys using TinkerCAD.
          </p>
        </div>
      </div>
      <br className="container py-10 px-10" />
      <div className="mx-auto flex bg-uoftbg bg-cover bg-bottom bg-no-repeat bg-fixed px-10 py-48 flex-col items-center w-full">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left pb-4 pt-4 items-center text-center bg-gray-900 bg-opacity-70 rounded-2xl">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Education and Courses
          </h1>
          <p className="leading-relaxed text-gray-300">
            University of Toronto - Engineering Science | 2021-Present
            <li>Computer Programming: Python and C, Algorithms and Data Structures (Year 1)</li>
            <li>Electrical Curcuits (Year 1)</li>
            <li>Calculus and Linear Algebra (Year 1)</li>
            <li>Structures, Molecules, and Materials (Year 1)</li>
            <li>Digital and Computer Systems: System Verilog and RISC-V-32I (Year 2)</li>
            <li>Vector Calculus, Ordinary Differential Equations (Year 2)</li>
            <li>Thermodynamics and Heat Transfer (Year 2)</li>
            <li>Fluid Mechanics (Year 2)</li>
            Richmond Hill High School (ON) | 2017-2021
            <li>Computer Science: Java and Python, Object-oriented Programming (Grades 10, 11, 12)</li>
            <li>Computer Engineering: Arduino (Grade 11)</li>
          </p>
        </div>
      </div>
    </section>
  );
}
