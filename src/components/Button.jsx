import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className={`text-slate-700 font-medium px-2 cursor-pointer rounded-3xl bg-white hover:bg-black hover:text-white`}
      onClick={props.onClick}>{props.value}
      </button>
    </div>
  );
};

export default Button;
