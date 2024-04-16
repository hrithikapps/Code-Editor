import "./index.scss";

export const HomeScreen = () => {
  return (
    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src="Logo.png" alt="Logo" />
          <h1>CodeX</h1>
          <h2>Code.Compile.Debug</h2>
          <button>
            <span className="material-icons">add</span>
            <span>Create Playground</span>
          </button>
        </div>
      </div>
      <div className="Right-container">
        <h1>Right-container</h1>
      </div>
    </div>
  );
};
