import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="about">About</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </>
  );
};

export default NavLinks;
