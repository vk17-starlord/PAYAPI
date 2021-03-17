
import './App.css';
import Home from'./components/Home';
import About from'./components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Pricing from './components/Pricing'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <div className="App">

<Router>
<div className="container">
<Navbar />
</div>
<Switch>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About" >
            <About />
             </Route>
             <Route path="/Pricing" >
            <Pricing />
             </Route>
             <Route path="/Contact" >
            <Contact />
             </Route>
        </Switch>
        <Footer/>
</Router>




    </div>
  );
}

export default App;
