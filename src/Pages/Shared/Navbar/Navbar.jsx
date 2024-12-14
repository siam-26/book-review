import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(true);
  console.log(clicked);
  return (
    <div className="nav-container">
      {/* logo */}
      <div className="logo-div">
        <h2>
          <Link to='/' className="book">Book Vibe</Link>
        </h2>
      </div>

      {/* middle part */}
      <div className="nav-pages">
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/listed-books' end>Listed Books</NavLink>
        <NavLink to='/pages-to-read' end>Pages to Read</NavLink>
      </div>

      {
        clicked ?
          (<div className="nav-buttons">
            <button style={{ backgroundColor: "#23BE0A" }} className="button">Sign In</button>
            <button style={{ backgroundColor: "#59C6D2" }} className="button">Sign Up</button>
            <RxHamburgerMenu onClick={() => setClicked(!clicked)} className="hambarger" />
          </div>)
          :
          (<div className="drawer-div">
            <div className="nav-icon-div"><RxCross1 onClick={() => setClicked(!clicked)} className="cross-icon" /></div>
              <ul>
                <li><NavLink to='/' end>Home</NavLink></li>
                <li><NavLink to='/listed-books' end>Listed Books</NavLink></li>
                <li><NavLink to='/pages-to-read' end>Pages to Read</NavLink></li>
                <li><button style={{ backgroundColor: "#23BE0A" }} className="sign-button">Sign In</button></li>
                <li><button style={{ backgroundColor: "#59C6D2" }} className="sign-button">Sign Up</button></li>
              </ul>
          </div>)
      }
    </div>
  )
}

export default Navbar