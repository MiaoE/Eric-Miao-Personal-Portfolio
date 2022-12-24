import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="text-gray-400 bg-homebg bg-no-repeat bg-gray-900 body-font">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
    
  );
}

export default App;