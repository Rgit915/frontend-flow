import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div>
      <Link className={`text-slate-700 font-medium px-2 cursor-pointer rounded-3xl bg-white hover:bg-black hover:text-white`}
      onClick={props.onClick} to={props.to}>{props.value}
      </Link>
    </div>
  );
};

export default Button;
