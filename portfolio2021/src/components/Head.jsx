 

import {
  BrowserRouter as 
  Link
} from "react-router-dom";
export default function Head() {
return (
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
    )
  }

 