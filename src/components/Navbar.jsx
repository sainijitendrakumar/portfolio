import { useState } from "react";
import DropDown from "./DropDown";

function Navbar() {
  const [navToggled, setNavtoggled] = useState(false);

  const searchClicked = () => {
    setNavtoggled(!navToggled);
  };

  return (
    <>
      <nav className="hidden w-full fixed z-20 lg:flex justify-between items-center shadow-md  bg-slate-200 px-5 py-3">
        <div className="lg:w-1/6 flex ">
          <span className="font-semibold bg-red-700 px-3 tracking-wider shadow-inner py-1 rounded-md text-white text-lg">
            Portfolio
          </span>
        </div>
        <div className="w-4/6 flex justify-center items-center">
          <div className=" w-3/5 flex  items-center border border-black rounded-2xl">
            <input
              type="text"
              placeholder="Search"
              className="w-[90%] py-2 rounded-s-2xl px-2 border border-e-black focus-visible:outline-none"
            />
            <button className="flex m-auto justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="27"
                viewBox="0 0 24 24"
                width="27"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center w-[40px] h-[40px] cursor-pointer  py-4 rounded-full bg-gray-50 ms-3">
            <i className="fa-solid fa-microphone text-xl"></i>
          </div>
        </div>
        <div className="w-1/6 hidden lg:flex items-center justify-end gap-6 ">
          <a
            href="https://www.linkedin.com/in/jitendra-k-saini/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin text-2xl "></i>
          </a>
          <a href="https://github.com/sainijitendrakumar" target="_blank">
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <div className="w-[27px] h-[27px] cursor-pointer bg-red-600 rounded-full flex justify-center items-center text-white">
            J
          </div>
        </div>
      </nav>

      <nav className="w-full z-20 fixed flex lg:hidden justify-evenly items-center   bg-slate-200 px-3 py-2 border border-r-black">
        <div className={`${navToggled ? "hidden" : "flex"} items-center`}>
          <DropDown />
          <span className="font-semibold bg-red-700 px-3 tracking-wider shadow-inner py-1 rounded-md text-white text-lg">
            Portfolio
          </span>
        </div>
        <button
          onClick={searchClicked}
          className={`${
            navToggled ? "flex" : "hidden"
          } justify-center items-center cursor-pointer w-[50px] h-[43px]  py-1 rounded-full bg-gray-200 mx-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              d="M10.47 4.47a.75.75 0 111.06 1.06l-5.72 5.72H20a.75.75 0 010 1.5H5.81l5.72 5.72a.75.75 0 11-1.06 1.06l-7-7-.53-.53.53-.53 7-7Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={` w-full ${
            navToggled ? "flex" : "hidden"
          }  justify-evenly`}
        >
          <div className="w-full flex items-center border border-black rounded-2xl">
            <input
              type="text"
              placeholder="Search"
              className="w-[90%] py-2 rounded-s-2xl px-2  bg-slate-200 "
            />
            <button className="flex m-auto justify-center items-center me-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center w-[54px] h-[40px]  py-4 rounded-full bg-gray-200 ms-3">
            <i className="fa-solid fa-microphone"></i>
          </div>
        </div>
        <button
          className={`${
            navToggled ? "hidden" : "flex"
          } m-auto justify-center items-center me-2 `}
          onClick={searchClicked}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
