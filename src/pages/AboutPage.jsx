import React from "react";
import About from "../components/About";

const AboutPage = () => {
  return (
    <>
    <section className="flex flex-col justify-center items-center min-h-screen w-full">
      <article className="h-[50vh]">
       <About/>
      </article>
    </section>
    </>
  );
};

export default AboutPage;
