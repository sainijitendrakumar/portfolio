import React from "react";
import data from "../utils/data.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function React_project() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-4">
        🌟 React Projects 🌟
      </h2>
      <div className={`px-2 lg:px-4 flex flex-wrap`}>
        {data ? (
          data.react_projects.map((item, i) => (
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
  );
}

export default React_project;
