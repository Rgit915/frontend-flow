import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
   setOpen(!isOpen);
  };

  return (
    <>
    <nav className="flex w-1/3 ">
      <div className="hidden justify-between w-full md:flex">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <button className="" onClick={toggleMenu}>
          {isOpen ? <MdClose/> :  <FiMenu />}
        </button>
      </div>
    </nav>
    {isOpen &&
    <div className="flex flex-col items-center basis-full">
      <NavLinks />
      </div>}
    </>

  );
};

export default Nav;
