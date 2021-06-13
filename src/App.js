import React, { useState, useEffect } from "react";
import "./App.css";
import Editor from "./component/editor";
import Output from "./component/output";
function App() {
  const [code, setCode] = useState("");
  const [runCode, setRunCode] = useState("");
  function onChange(value) {
    setCode(value);
  }
  function runEditorCode() {
    setRunCode(code);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="editor">
        <button className="runButton" onClick={runEditorCode}>
        Run >>{" "}
      </button>
          <Editor onChange={onChange} />
        </div>
        <div className="output">
          <Output code={runCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
