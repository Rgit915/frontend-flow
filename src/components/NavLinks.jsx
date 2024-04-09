import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </>
  );
};

export default NavLinks;
