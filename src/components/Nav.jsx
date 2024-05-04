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
    <nav className="flex md:w-1/3 md:float-right">
      <div className="hidden justify-between w-full md:flex">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <button className="" onClick={toggleMenu}>
          {isOpen ? <MdClose className={`absolute z-50 `}/> :  <FiMenu />}
        </button>
      </div>
    </nav>
    {isOpen &&
    <div className="flex flex-col items-center gap-4 space-y-8 p-24 backdrop-blur-2xl  transition ease-in-out duration-300 absolute inset-y-0 right-0 w-64  uppercase text-xl tracking-wider z-40 md:hidden ">
      <NavLinks />
      </div>}
    </>

  );
};

export default Nav;
