import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hiring from "./components/Hiring";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <main className="text-white bg-homebg bg-no-repeat bg-fixed bg-center bg-gray-900 body-font">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/hiring" component={Hiring} />
      </Switch>
    </main>
    
  );
}

export default App;