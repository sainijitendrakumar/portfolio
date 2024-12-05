import React, { useState, useEffect } from "react";
import data from "../utils/data.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDetails } from "../Store/projectDetail";
import ForMore from "../components/ForMore";

function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="text-2xl font-bold text-center py-4">
        🌟 React Projects 🌟
      </h2>
      <div className={`px-2 lg:px-4 flex flex-wrap`}>
        {data ? (
          data.react_projects.slice(0, 3).map((item, i) => (
            <div className="w-full sm:w-1/2 lg:w-1/3" key={i}>
              {/* <Link to={"/watch?v=" + item.demo_url}> */}
              <Card info={item} />
              {/* </Link> */}
            </div>
          ))
        ) : (
          <p>there is no data</p>
        )}
        <div className="w-full flex justify-end">
          <Link to={"/react_projects"}>
            <ForMore />
          </Link>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center py-5">
        🌟 Vanilla Javascript Projects 🌟
      </h2>
      <div className={`px-2 lg:px-4 flex flex-wrap`}>
        {data ? (
          data.vanilla_js_projects.slice(0, 3).map((item, i) => (
            <div className="w-full sm:w-1/2 lg:w-1/3" key={i}>
              {/* <Link to={"/watch?v=" + item.demo_url}> */}
              <Card info={item} />
              {/* </Link> */}
            </div>
          ))
        ) : (
          <p>there is no data</p>
        )}
        <div className="w-full flex justify-end">
          <Link to={"/react_projects"}>
            <ForMore />
          </Link>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center py-5">
        🌟 Simple Responsive Web Page With Bootstrip 🌟
      </h2>
      <div className={`px-2 lg:px-8 flex flex-wrap`}>
        {data ? (
          data.simple_web_page.slice(0, 3).map((item, i) => (
            <div className="w-full sm:w-1/2 lg:w-1/3" key={i}>
              {/* <Link to={"/watch?v=" + item.demo_url}> */}
              <Card info={item} />
              {/* </Link> */}
            </div>
          ))
        ) : (
          <p>there is no data</p>
        )}
        <div className="w-full flex justify-end">
          <Link to={"/react_projects"}>
            <ForMore />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center py-4">
          🌟 Mega Projects 🌟
        </h2>
        <div className={`px-2 lg:px-4 flex flex-wrap`}>
          {data ? (
            data.mega_projects.map((item, i) => (
              <div className="w-full sm:w-1/2 lg:w-1/3" key={i}>
                {/* <Link to={"/watch?v=" + item.demo_url}> */}
                <Card info={item} />
                {/* </Link> */}
              </div>
            ))
          ) : (
            <p>there is no data</p>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center py-4">
          🌟 Figma Projects 🌟
        </h2>
        <div className={`px-2 lg:px-4 flex flex-wrap`}>
          {data ? (
            data.figma_design.slice(0, 3).map((item, i) => (
              <div className="w-full sm:w-1/2 lg:w-1/3" key={i}>
                {/* <Link to={"/watch?v=" + item.demo_url}> */}
                <Card info={item} />
                {/* </Link> */}
              </div>
            ))
          ) : (
            <p>there is no data</p>
          )}
        </div>
        <div className="w-full flex justify-end">
          <Link to={"/figma_design"}>
            <ForMore />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
