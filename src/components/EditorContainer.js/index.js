import { useRef, useState } from "react";
import "./index.scss";
import Editor from "@monaco-editor/react";
import { fileExtensionMapping } from "../../utils/Constants";

const editorOptions = {
  fontsize: 18,
  wordWrap: "on",
};

export const EditorContainer = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [theme, setTheme] = useState("vs-dark");
  const codeRef = useRef();

  const onChangeCode = (newCode) => {
    codeRef.current = newCode;
  };

  const importCode = (event) => {
    const file = event.target.files[0];
    const fileType = file.type.includes("text");
    if (fileType) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = function (value) {
        const importedCode = value.target.result;
        setCode(importedCode);
        codeRef.current = importedCode;
      };
    } else {
      alert("Please upload a program file");
    }
  };

  const exportCode = () => {
    const codeValue = codeRef.current.trim();

    if (!codeValue) {
      alert("Please type some sode in the editor before exporting");
    }
    //1. Creating a Blob/instant file in memory
    const codeBlob = new Blob([codeValue], { type: "text/plain" });

    // 2.Creating the downloadable link with blob Data
    const downloadUrl = URL.createObjectURL(codeBlob);

    //3. Creating a clickable link to download the blob/file
    const link = document.createElement("a");
    link.href = downloadUrl;
    const fileExtension = fileExtensionMapping[language];
    link.download = `code.${fileExtension}`;
    link.click();
  };

  const onChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const onChangeTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="root-editor-container">
      <div className="editor-header">
        <div className="editor-left-container">
          <b className="title">{"Title"}</b>
          <span className="material-icons">edit</span>
          <button>Save Code</button>
        </div>
        <div className="editor-right-container">
          <select onChange={onChangeLanguage} value={language}>
            <option value="cpp">cpp</option>
            <option value="javascript">javascript</option>
            <option value="java">java</option>
            <option value="python">python</option>
          </select>

          <select onChange={onChangeTheme} value={theme}>
            <option value="vs-dark">vs-dark</option>
            <option value="vs-light">vs-light</option>
          </select>
        </div>
      </div>
      <div className="editor-body">
        <Editor
          height={"100%"}
          language={language}
          options={editorOptions}
          theme={theme}
          onChange={onChangeCode}
          value={code}
        />
      </div>
      <div className="editor-footer">
        <button className="btn">
          <span className="material-icons">fullscreen</span>
          <span>Full Screen</span>
        </button>
        <label htmlFor="import-code" className="btn">
          <span className="material-icons">upload</span>
          <span>Import Code</span>
        </label>
        <input
          type="file"
          id="import-code"
          style={{ display: "none" }}
          onChange={importCode}
        />
        <button className="btn">
          <span className="material-icons">download</span>
          <span onClick={exportCode}>Export Code</span>
        </button>
        <button className="btn">
          <span className="material-icons">play_arrow</span>
          <span>Run Code</span>
        </button>
      </div>
    </div>
  );
};
