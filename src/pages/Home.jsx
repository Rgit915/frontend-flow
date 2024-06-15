import { NavLink } from "react-router-dom";
import developerImage from "../assets/images/developer.png";

const Home = () => {
  return (
    <>
      <section className="flex flex-col-reverse justify-center items-center overflow-x-hidden md:flex-col lg:flex-row lg:min-h-screen xl:min-h-screen xl:justify-around">
        <article className="mt-12 max-w-xl md:flex md:flex-col md:items-center md:justify-center md:w-full lg:max-w-md lg:items-start xl:max-w-lg">
          <h1 className="text-3xl font-semibold leading-normal tracking-widest md:text-5xl  xl:text-6xl">
            Frontend <span className="font-light text-indigo-400">Flow</span>
          </h1>
          <p className="mt-4">
            This portfolio shows the projects I've worked on for the Frontend
            Friday Challenge by Frontend Queens👑. These projects showcase my
            frontend skills.
          </p>
          <div className="mt-10">
            <NavLink
              to="/projects"
              className="bg-indigo-400 text-indigo-950 font-bold rounded-3xl py-3 px-8
               inline-block mr-4 w-full  text-[16px] hover:bg-transparent hover:border-indigo-300 hover:text-white duration-300 hover:border
               border border-transparent md:px-4"
            >
              Explore projects ...
            </NavLink>
          </div>
        </article>
        <figure>
          <img
          src={developerImage}
          className="w-full md:h-[400px] xl:w-[600px]  xl:h-[600px]  bottom-0 right-20"
          alt="Developer Image"
        />
        </figure>

      </section>
    </>
  );
};

export default Home;
