import React from "react";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-full">
      <article className="h-[70vh]">
        <h1 className="text-white text-3xl leading-7 tracking-wide py-4">
          Contact
        </h1>
        <p className="">
          Hello! Thank you for visiting my portfolio. If you have any questions,
          feedback, or potential collaboration opportunities, I'd love to hear
          from you. Your input helps me improve and grow as a web developer, and
          I appreciate your interest in my work. Please feel free to reach out
          using the contact form below.
          <br />
          Additionally, you can connect with me on:
          <br />
          <a
            href="https://www.linkedin.com/in/rora-alem"
            className="bold cursor-pointer"
          >
            <LiaLinkedinIn />
          </a>{" "}
          or send me an
          <a href="mailto:rora.goitom@gmail.com">
            <MdEmail />
          </a>
          <br/>
          .I look forward to the opportunity of working together!
        </p>
      </article>

      <div className="font-mono w-full max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
