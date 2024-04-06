import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
const NavLinks = () => {
  <>
    <NavLink to="/About">About</NavLink>
    <NavLink to="/Projects">Projects</NavLink>
    <NavLink to="/Contact">Contact</NavLink>
  </>;
};

const Nav = () => {
  return (
    <nav className="w-1/3">
      <div className="flex justify-between">
        <NavLinks/>
      </div>
      <div>
        <button><FiMenu/></button>
      </div>

  </nav>
  )
};

export default Nav;
