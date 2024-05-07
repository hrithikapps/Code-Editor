import "./index.scss";
export const EditorContainer = () => {
  return (
    <div className="root-editor-container">
      <div className="editor-header">
        <div className="editor-left-container">
          <b className="title">{"Title"}</b>
          <span className="material-icons">edit</span>
          <button>Save Code</button>
        </div>
        <div className="editor-right-container">
          <select>
            <option value="cpp">cpp</option>
            <option value="javascript">javascript</option>
            <option value="java">java</option>
            <option value="python">python</option>
          </select>

          <select>
            <option value="vs-dark">vs-dark</option>
            <option value="vs-light">vs-light</option>
          </select>
        </div>
      </div>
      <div className="editor-body"></div>
      <div className="editor-footer">
        <button className="btn">
          <span className="material-icons">fullscreen</span>
          <span>Full Screen</span>
        </button>
        <label htmlFor="import-code" className="btn">
          <span className="material-icons">upload</span>
          <span>Import Code</span>
        </label>
        <input type="file" id="import-code" style={{ display: "none" }} />
        <button className="btn">
          <span className="material-icons">download</span>
          <span>Export Code</span>
        </button>
        <button className="btn">
          <span className="material-icons">play_arrow</span>
          <span>Run Code</span>
        </button>
      </div>
    </div>
  );
};
