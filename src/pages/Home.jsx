import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import About from "../components/About";

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};


const Home = () => {
  return (
    <>
      <motion.section className="flex flex-col-reverse justify-center items-center overflow-x-hidden md:flex-col lg:flex-row lg:min-h-screen xl:min-h-screen xl:justify-around">
        <motion.article className="mt-8 max-w-xl md:flex md:flex-col md:items-center md:justify-center md:w-full lg:max-w-md lg:items-start xl:max-w-lg">
          <About/>
          <motion.div
            className="mt-10"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "transparent",
              borderColor: "#c3dafe",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          >
            <NavLink
              to="/projects"
              className="bg-gold text-indigo-950 font-bold rounded-3xl py-3 px-8
               inline-block mr-4 w-full  text-[16px] hover:bg-transparent hover:border-indigo-300 hover:text-white duration-300 hover:border
               border border-transparent md:px-4"
            >
              Explore projects ...
            </NavLink>
          </motion.div>
        </motion.article>
        <motion.figure variants={gridSquareVariants}>
          <motion.img
            src="/images/developer.png"
            className="w-full md:h-[400px] xl:w-[600px]  xl:h-[600px]  bottom-0 right-20"
            alt="Developer Image"
          />
        </motion.figure>
      </motion.section>
    </>
  );
};

export default Home;
