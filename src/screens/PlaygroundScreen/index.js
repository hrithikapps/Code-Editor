import { useParams } from "react-router-dom";
import "./index.scss";
import { EditorContainer } from "../../components/EditorContainer.js";
import { useState } from "react";

export const PlaygroundScreen = () => {
  const params = useParams();
  const { fileId, folderId } = params;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const importInput = (e) => {
    const file = e.target.files[0];
    const fileType = file.type.includes("text");
    if (fileType) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = (e) => {
        setInput(e.target.result);
      };
    } else {
      alert("Please upload a program file");
    }
  };

  const exportOutput = () => {
    const outputValue = output.trim();
    if (!outputValue) {
      alert("Output is Empty");
      return;
    }
    const blob = new Blob([outputValue], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `output.txt`;
    link.click();
  };
  return (
    <div className="playground-container">
      <div className="header-container">
        <img className="logo" src="/Logo.png" alt="Logo" />
      </div>
      <div className="content-container">
        <div className="editor-container">
          <EditorContainer fileId={fileId} folderId={folderId} />
        </div>
        <div className="input-output-container">
          <div className="input-header">
            <b>Input:</b>
            <label htmlFor="input" className="icon-container ">
              <span className="material-icons">upload</span>
              <b className="">Import Input</b>
            </label>
            <input
              type="file"
              id="input"
              style={{ display: "none" }}
              onChange={importInput}
            />
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div className="input-output-container">
          <div className="input-header">
            <b>Output:</b>
            <button className="icon-container" onClick={exportOutput}>
              <span className="material-icons">download</span>
              <b>Export Output</b>
            </button>
          </div>
          <textarea
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
