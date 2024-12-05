import React, { useState } from "react";
import Watch_page from "./Watch_page";
import { Link } from "react-router-dom";
import CopyButton from "../components/CopyButton";
import List from "../components/List";

function IntroPage() {
  const [text, setText] = useState("");

  return (
    <div className="text-[#403b3b] mb-4">
      <div className=" flex flex-col justify-center items-center  pt-5 ">
        <div className="bg-slate-200 rounded-md shadow-xl">
          <img
            src="https://i.postimg.cc/LXyp2g28/my-image.png"
            alt="profile image"
            className="rounded-md w-[250px]"
          />
        </div>
        <h1 className="text-xl font-semibold lg:text-4xl py-3 mt-4">
          HI, I'M <span className="font-bold">JITENDRA KUMAR SAINI</span> 👋
        </h1>
        <p className="text-center py-2 text-lg font-semibold lg:w-[75%]">
          Welcome to my portfolio website! I'm a front-end developer passionate
          about crafting responsive, user-friendly web applications using tools
          like React.js and Tailwind CSS.
        </p>
      </div>
      <section className=" flex flex-col justify-center items-center my-5 bg-slate-200 mx-3 lg:mx-36 shadow-xl rounded-lg">
        <h2 className="text-center text-xl lg:text-3xl font-bold py-2">
          🌟 About Me 🌟
        </h2>
        <p className="py-2 text-md lg:text-lg font-semibold px-3 lg:px-14 ">
          Hello, I’m Jitendra Kumar Saini, a Front-End Developer with experience
          in HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript, and React.js. I
          specialize in creating responsive, user-friendly web applications with
          a focus on clean design and functionality. I’ve honed my skills
          through diverse projects, building a strong foundation in
          problem-solving and attention to detail. I’m eager to contribute to
          innovative IT teams and bring ideas to life.
          <Link to={"/projects_preview"} className="text-red-700 font-bold">
            {" "}
            Check out my projects!
          </Link>
        </p>
        <a
          href="https://drive.google.com/file/d/1SNf_KFJj4DDMRJQk_Eg_AvVwQysiQgp_/view?usp=sharing"
          target="_blank"
          className="p-2 bg-red-600 text-white rounded-lg my-3 hover:bg-red-500 font-semibold"
        >
          {" "}
          Download My Resume{" "}
        </a>
      </section>

      <section className=" flex flex-col justify-center items-center my-6 bg-slate-200 mx-3 lg:mx-36 shadow-xl rounded-lg">
        <h2 className="text-center text-xl lg:text-3xl font-bold py-2">
          🌟 Contact Me 🌟
        </h2>
        <ul className="flex flex-wrap justify-between gap-1 lg:gap-4 text-md px-14 font-semibold py-3">
          <List extraCSS={"!px-4"}>
            <i className="fa-solid fa-envelope me-2 mt-[6px]"></i>
            er.sainijitendra@gmail.com
          </List>
          <List extraCSS={"!px-4"}>
            <i className="fa-solid fa-phone me-2 mt-[6px]"></i> +91 9785969201
          </List>
          <List extraCSS={"!px-4"}>
            <i className="fa-brands fa-github me-2 mt-[6px]"></i>
            https://github.com/sainijitendrakumar
          </List>
          <List extraCSS={"!px-4"}>
            <i className="fa-brands fa-linkedin me-2 mt-[6px]"></i>
            https://www.linkedin.com/in/jitendra-k-saini/
          </List>
        </ul>
      </section>
    </div>
  );
}

export default IntroPage;
