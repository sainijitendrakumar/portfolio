import React from "react";

function Button({ handleChange, title }) {
  return (
    <button
      onClick={handleChange}
      className="bg-red-600 hover:bg-red-500 text-white w-20 ms-2 font-semibold shadow-lg rounded-md py-1 "
    >
      {title}
    </button>
  );
}

export default Button;
