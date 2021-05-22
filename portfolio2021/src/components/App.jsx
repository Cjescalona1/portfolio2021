import Carou from './Carousel'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Proyect from './Proyect';
import Contact from './Contact';
import Home from './Home';
import Head from './Head';

export default function App() { 
  return (
         
 <Router>
      <div className="Head">
          <ul>
             
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/About">About</Link>
              </li>
              <li>
              <Link to="/Proyect">Proyect</Link>
              </li>
              <li>
              <Link to="/Contact">Contact</Link>
              </li>  
          </ul>
      </div>
      <div>
            <Switch>
            <Route path="/About">
              <About  />
            </Route>

            <Route path="/Proyect">
              <Proyect   />
            </Route>
           
            <Route path="/Contact">
              <Contact   />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          
          </Switch>
      </div>
 

</Router>
    
    

  )
}
