import React from "react";

function Components() {
  const data = false;
  return (
    <div>
      <h2 className="text-2xl font-bold text-center py-4">
        🌟 Reusable Components 🌟
      </h2>
      <div className={`px-2 lg:px-4 flex flex-wrap justify-center`}>
        {data ? (
          data.react_projects.map((item, i) => (
            <div className="w-full sm:w-1/2 lg:w-1/3" key={i}>
              {/* <Link to={"/watch?v=" + item.demo_url}> */}
              <Card info={item} />
              {/* </Link> */}
            </div>
          ))
        ) : (
          <p className="flex justify-center text-2xl">there is no data yet</p>
        )}
      </div>
    </div>
  );
}

export default Components;
