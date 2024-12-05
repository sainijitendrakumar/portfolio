import React from "react";

function List({ children, extraCSS }) {
  return (
    <li
      className={`flex  items-center cursor-pointer rounded-lg ps-0 py-1 lg:py-2 lg:ps-5  ${extraCSS} `}
    >
      {children}
    </li>
  );
}

export default List;
