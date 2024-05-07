import { useParams } from "react-router-dom";
import "./index.scss";
import { EditorContainer } from "../../components/EditorContainer.js";

export const PlaygroundScreen = () => {
  const params = useParams();
  const { fileId, folderId } = params;
  return (
    <div className="playground-container">
      <div className="header-container">
        <img className="logo" src="/Logo.png" alt="Logo" />
      </div>
      <div className="content-container">
        <div className="editor-container">
          <EditorContainer />
        </div>
        <div className="input-output-container">
          <div className="input-header">
            <b>Input:</b>
            <label htmlFor="input" className="icon-container ">
              <span className="material-icons">upload</span>
              <b className="">Import Input</b>
            </label>
            <input type="file" id="input" style={{ display: "none" }} />
          </div>
          <textarea></textarea>
        </div>
        <div className="input-output-container">
          <div className="input-header">
            <b>Output:</b>
            <button className="icon-container">
              <span className="material-icons">download</span>
              <b>Export Output</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
