import React, { useCallback, useState, useEffect } from "react";

function CopyButton({ textToCopy }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText({ textToCopy });
  }, []);

  const handleCopy = useCallback(() => {
    window.navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <button className="flex justify-center items-center" onClick={handleCopy}>
      <i className="fa-solid fa-copy"></i>
    </button>
  );
}

export default CopyButton;
