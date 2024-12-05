import React from "react";
import { Link } from "react-router-dom";

function Card({ info }) {
  return (
    <>
      <div className="p-2">
        <div className="rounded relative shadow-md cursor-pointer">
          <Link to={"/watch?v=" + info.demo_url}>
            <img
              src={info.thumbnail}
              className="w-full position-center h-[282px]  top-0 rounded-md"
              alt={info.name}
            />
          </Link>
        </div>
        <div className="flex justify-between mx-3">
          <h6 className="text-md font-semibold pt-3">{info.name}</h6>
          <div className="pt-3 cursor-pointer">
            <a href={info.code_address} target="_blank">
              <i className="fa-brands fa-github text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
