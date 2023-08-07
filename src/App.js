import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import TaxEstimation from "./components/TaxEstimation";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <main className="text-white body-font">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/experiences" component={Experience} />
        <Route path="/contact" component={Contact} />
        <Route path="/taxestimator" component={TaxEstimation} />
      </Switch>
    </main>
    
  );
}

export default App;