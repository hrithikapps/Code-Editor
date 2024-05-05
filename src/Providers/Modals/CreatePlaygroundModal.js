import { useContext } from "react";
import "./CreatePlaygroundModal.scss";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";

export const CreatePlaygroundModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playgroundFeatures = useContext(PlaygroundContext);

  const closeModal = () => {
    modalFeatures.closeModal();
  };

  const onSubmitModal = (e) => {
    e.preventDefault();
    const folderName = e.target?.folderName?.value;
    const fileName = e.target?.fileName?.value;
    const language = e.target?.language?.value;

    playgroundFeatures.createNewPlayground({
      folderName,
      fileName,
      language,
    });
    closeModal();
  };

  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-icons close">
          close
        </span>

        <h1>Create New Playground</h1>
        <div className="item">
          <p>Enter Folder Name</p>
          <input type="text" name="folderName" required />
        </div>
        <div className="item">
          <p>Enter Card Name</p>
          <input type="text" name="fileName" required />
        </div>
        <div className="item">
          <select name="language" required>
            <option value="cpp">C++</option>
            <option value="java">JAVA</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
          <button type="submit">Create Playground</button>
        </div>
      </form>
    </div>
  );
};
