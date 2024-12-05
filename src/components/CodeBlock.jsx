import React from "react";
import "prismjs";
import "prismjs/components/prism-jsx"; // Include specific language support
import "prismjs/themes/prism-tomorrow.css"; // Import the theme

const CodeBlock = ({ code }) => {
  React.useEffect(() => {
    Prism.highlightAll(); // Highlight all code blocks
  }, []);

  return (
    <pre className="rounded-md !bg-transparent w-full !overflow-visible !m-0">
      <code className="language-jsx">{code}</code>
    </pre>
  );
};

export default CodeBlock;
