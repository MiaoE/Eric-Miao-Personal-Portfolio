import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <main className="text-white bg-homebg bg-no-repeat bg-fixed bg-center bg-gray-900 body-font">
      <Navbar />
      <Page />
    </main>
    
  );
}

function Page() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;