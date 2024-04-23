import React from 'react'
import developerImage from "../assets/images/developer.png";
import Nav from './Nav';
import Logo from './Logo'

const Header = () => {
  return (
    <header>
        <div className="container min-h-screen sticky bg-indigo-950 text-white px-28 py-5 z-(20) ">
          <div className='flex justify-between'>
          <Logo/>
          <Nav/>
          </div>
          <div className="mt-48 max-w-xl">
            <h1 className="text-6xl font-semibold leading-normal">
              Frontend <span className="font-light">Flow</span>{" "}
            </h1>
            <p>
              Below are the projects I've worked on for the Frontend Friday
              Challenge by Women Who Code. These projects showcase my frontend
              skills.
            </p>

            <div className="mt-10">
              <a
                href="#"
                className="bg-indigo-400 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-indigo-300 hover:text-white duration-300 hover:border border border-transparent"
              >
                Read more...
              </a>
            </div>
          </div>
          <img
            src={developerImage}
            className="w-full xl:w-1/2 xl:absolute bottom-0 right-20"
            alt="Developer Image"
          />
        </div>
      </header>
  )
}

export default Header