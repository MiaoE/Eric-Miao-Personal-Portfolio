import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-900 body-font">
      <div className="py-2 mx-auto text-center">
        <div className="flex flex-col w-full pb-12">
          <div className="flex flex-row">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-12 mt-6 text-white m-auto underline">
              My Experiences
            </h1>
          </div>

          <div className="mx-auto flex flex-col items-center w-full bg-jcibg bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="bg-gray-900 py-48 bg-opacity-60 w-full">
              <p className="leading-relaxed border-b m-auto w-1/2">
                Software QA Analyst | May 2023 - Present<br />
                <a href="https://www.johnsoncontrols.com/"  target="_blank" rel="noreferrer" className="underline">Johnson Controls</a><br />
              </p>
              <p className="md:w-1/2 sm:w-2/3 p-2 mx-auto">
                IQ Pro Software Team. More details to be added
                <li>Software Automation - Android and Browser</li>
              </p>
            </div>
          </div>
          <br className="container py-10 px-10" />
          <div className="mx-auto flex flex-col items-center w-full bg-efkbg bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="bg-gray-900 py-48 bg-opacity-60 w-full">
              <p className="leading-relaxed border-b m-auto w-1/2">
                Assistant STEM Instructor, STEM Instructor, and Summer Camp Counsellor | Nov 2019 - Sep 2020<br />
                <a href="https://www.engineeringforkids.com/toronto-york-region/"  target="_blank" rel="noreferrer" className="underline">Engineering For Kids Toronto - York Region</a><br />
              </p>
              <p className="md:w-1/2 sm:w-2/3 p-2 mx-auto">
                As an instructor for children aged 5 to 14, I was responsible for delivering course material in an intriguing way 
                that sparks their interest in engineering. Material that I taught include programming a Lego Mindstorm, making games with 
                Scratch and Clickteam Fusion, and delivering electrical circuit concepts (e.g. logic gates) through Minecraft.
              </p>
            </div>
          </div>

          <br className="container py-10 px-10" />
          <div className="flex flex-row">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-12 mt-6 text-white m-auto underline">
              My Projects
            </h1>
          </div>

          <div className="bg-flightbg h-3/4 bg-fixed bg-no-repeat bg-botton bg-cover w-full mx-auto">
            <div className="bg-gray-900 py-48 bg-opacity-60 w-full">
              <h1 className="text-xl title-font text-white"><a href="https://github.com/MiaoE/Flight-Studio" target="_blank" rel="noreferrer" className="underline">Flight Studio</a></h1>
              <p className="md:w-1/2 sm:w-2/3 p-2 mx-auto">
                A browser-based flight query service that provides the flight informations of the five cheapest flights given
                a prompt written in English. The prompt must consist of a departure city or airport, an arrival city or airport, 
                and a date of departure. 
                <br /><br />
                The server uses OpenAI to extract essential information from the prompt and feeds it to Amadeus API, an API 
                that queries over 5000 flight carriers for a flight or flights satisfying the prompt. Some other features 
                include a private chatting room for people on your flight, a login/register system that connects with 
                Appwrite backend server and accesses user information from Appwrite database.
                <br /><br />
                This project was created for <a href="https://www.newhacks.ca/" target="_blank" rel="noreferrer" className="underline">NewHacks 2022</a>,
                a 24-hour hackathon event hosted by the University of Toronto IEEE and sponsored by MLH. It uses Next.js
                and tailwindCSS frameworks for front-end hosting, and Flask for back-end.
              </p>
            </div>
          </div>
          <br className="container py-10 px-10" />
          <div className="w-full h-3/4 py-8 mx-auto">
            <h1 className="text-xl title-font text-white">Various University Console-based Projects</h1>
            <p className="md:w-1/2 sm:w-2/3 p-2 mx-auto">
              Various programming projects in <a href="https://engineering.calendar.utoronto.ca/course/esc180h1" target="_blank" rel="noreferrer" className="underline">
                Introduction to Computer Programming (ESC180)
              </a> and <a href="https://engineering.calendar.utoronto.ca/course/esc190h1" target="_blank" rel="noreferrer" className="underline">
                Computer Algorithms and Data Structures (ESC190)
              </a>. 
              ESC180 is taught in Python and ESC190 is taught in C.
              <br /><br />
              Machine Learning related: <a href="https://github.com/MiaoE/Semantic-Similarity" target="_blank" rel="noreferrer" className="underline">Semantic Similarity</a> (Python)
              <br />
              Data Structure focused: <a href="https://github.com/MiaoE/Order-Management" target="_blank" rel="noreferrer" className="underline">Order Management</a> (C)
              <br />
              Data manipulation: <a href="https://github.com/MiaoE/Data-Encryption" target="_blank" rel="noreferrer" className="underline">Data Encryption</a> (C)
            </p>
          </div>
          <br className="container py-10 px-10" />
          <div className="bg-autoimmunebg h-3/4 bg-fixed bg-no-repeat bg-center bg-cover w-full mx-auto">
            <div className="bg-gray-900 py-48 bg-opacity-60 w-full">
              <h1 className="text-xl title-font text-white"><a href="https://github.com/MiaoE/Auto-Immune" target="_blank" rel="noreferrer" className="underline">Auto Immune</a></h1>
              <p className="md:w-1/2 sm:w-2/3 p-2 mx-auto">
                An isometric strategy game where players must manipulate the eyeball (melee), syringe (long distance),
                and the pill (knockback) to protect the lungs from parasites and viruses for 5 rounds. There are also
                spawn tiles where parasites or viruses can spawn in the next round unless something blocks it. In 
                addition, there are kill tiles which may kill the intruders instantly if they are knockbacked onto it.
                <br /> <br />
                This project was developed as a final summative project for grade 12 computer science course (ICS4U1).
                It is developed fully in Java using LWJGL library and jMonkeyEngine, and has its own executable.
              </p>
            </div>
          </div>
          <br className="container py-10 px-10" />
          <div className="bg-duberbg h-3/4 bg-fixed bg-no-repeat bg-center bg-cover w-full mx-auto">
            <div className="bg-gray-900 py-48 bg-opacity-60 w-full">
              <h1 className="text-xl title-font text-white"><a href="https://github.com/MiaoE/Dubers-Revenge" target="_blank" rel="noreferrer" className="underline">Duber's Revenge</a></h1>
              <p className="md:w-1/2 sm:w-2/3 p-2 mx-auto">
                A top-down shooter survival game where the player must survive waves of zombies for as long as possible.
                The player can purchase guns and accessories, such as ammo and medkits, from the store. In addition,
                for every zombies killed, there is a chance for loot drops, including money, bandaids, and medkits. 
                There are four types of zombies: a walker (typical zombie), a runner (fast zombie), a bloated (a chubby 
                zombie that explodes upon death), and a spitter (a zombie of ranged attack). Animation is also 
                implemented in this game so the player have time to react and makes the game visuals better overall.
                <br /><br />
                This game was developed as a final summative project for grade 11 pre-AP computer science course (ICS3U6).
                It is developed fully in Java using java's swing library from the optional javax package.
              </p>
            </div>
          </div>
          <br className="container py-10 px-10" />
          <div className="w-full h-3/4 mx-auto bg-lostpathbg bg-fixed bg-no-repeat bg-bottom bg-cover">
            <div className="bg-gray-900 py-48 bg-opacity-60 w-full">
              <h1 className="text-xl title-font text-white"><a href="https://github.com/MiaoE/Lost-Path" target="_blank" rel="noreferrer" className="underline">A Lost Path</a></h1>
              <p className="md:w-1/2 sm:w-2/3 p-2 mx-auto">
                A 2D platform game where the player must survive three different rounds of asteroid and comet attacks
                from the sky. Each round has its unique background and music. The platform would also spawn at various 
                lengths.
                <br /><br />
                This game was developed as a final summative project for grade 10 programming course (ICS2O1).
                It is developed fully in Python using the pygame library. This game was originally programmed 
                in Python 2, but it is later updated to support Python 3 environment.
              </p>
            </div>
          </div>
          <br className="container py-10 px-10" />
          <div className="w-full h-3/4 py-8 mx-auto">
            <h1 className="text-xl title-font text-white">Arduino Autonomous RoboCar</h1>
            <p className="md:w-1/2 sm:w-2/3 p-2 mx-auto">
              Designed a robot that can navigate through a course using motors, ultrasonic sensors, and fluorescent display.
              The robot is controlled by an Arduino Uno microcontroller that uses controls in Arduino language, a subset of C/C++.
            </p>
          </div>
        </div>

        <div className="flex-col justify-center items-right pb-8">
          <p className="pb-2">Check out all my projects on</p>
          <a
            href="https://github.com/MiaoE?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
