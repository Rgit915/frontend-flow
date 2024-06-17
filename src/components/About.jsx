import {motion} from "framer-motion"
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <div>
      <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-3xl font-semibold leading-normal tracking-widest md:text-5xl  xl:text-6xl"
          >
           {isAboutPage ? 'About' : (
          <>
            Frontend <span className="font-light text-indigo-400">Flow</span>
          </>
        )} </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ bounceDamping: 10, bounceStiffness: 600, delay: 0.5 }}
            className="mt-4"
          >
            This portfolio shows the projects I've worked on for the Frontend
            Friday Challenge by Frontend Queens👑. These projects showcase my
            frontend skills.
          </motion.p>
    </div>
  )
}

export default About