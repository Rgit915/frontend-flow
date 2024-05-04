import { Outlet } from 'react-router-dom';

import Nav from "./Nav";
import Logo from "./Logo";


const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <Logo />
        <Nav />
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
