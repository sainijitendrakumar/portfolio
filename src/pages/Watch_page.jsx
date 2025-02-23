import { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import Button from "../components/Button";
import { useSearchParams } from "react-router-dom";
import data from "../utils/data.json";

function Watch_page() {
  const [toggle, setToggle] = useState(false);
  const [searchParams] = useSearchParams();
  const project_name = searchParams.get("v");

  const codeSnippet = `
import React, { useState } from 'react';

function TodoList() {
    const [data, setData] = useState('');
    const [todo, setTodo] = useState([]);

    const addValue = () => {
        setTodo([...todo, { id: Date.now(), data, completed: false }]);
        setData('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Write something"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <button onClick={addValue}>Add</button>
            {todo.map((item) => (
                <div key={item.id}>{item.data}</div>
            ))}
        </div>
    );
}

export default TodoList;`;

  return (
    <>
      <div className="rounded-lg w-full flex flex-wrap lg:flex-nowrap py-4">
        <div className="w-full pe-4">
          <Button handleChange={() => setToggle(false)} title={"Preview"} />
          <Button handleChange={() => setToggle(true)} title={"Code"} />
          <iframe
            className={`${
              toggle ? "hidden" : "block"
            } rounded-lg pt-15 w-full h-[250px] bg-gray-400  md:h-[450px] lg:w-full lg:h-[570px] m-2`}
            src={project_name}
            title='Android Users Reaction to IOS 18 "New Features"'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div
            className={`${
              toggle ? "block" : "hidden"
            } rounded-lg pt-15 w-full bg-slate-800 h-[250px] md:h-[450px] lg:w-full m-3 lg:h-[514px] overflow-x-auto`}
          >
            <CodeBlock code={codeSnippet} />
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default Watch_page;
