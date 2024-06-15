import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="about" className="nav-link">About</NavLink>
      <NavLink to="projects" className="nav-link">Projects</NavLink>
      <NavLink to="#" className="nav-link">Blog</NavLink>
      <NavLink to="#" className="nav-link">Contact</NavLink>
    </>
  );
};

export default NavLinks;
