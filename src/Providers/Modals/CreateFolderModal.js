import { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import "./CreateFolderModal.scss";
import "./CreatePlaygroundModal.scss";
import { PlaygroundContext } from "../PlaygroundProvider";

export const CreateFolderModal = () => {
  const modalFeatures = useContext(ModalContext);
  const { createNewFolder } = useContext(PlaygroundContext);

  const closeModal = () => {
    modalFeatures.closeModal();
  };
  const onSubmitModal = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    createNewFolder(folderName);
    closeModal();
  };
  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-icons close">
          close
        </span>
        <h1>Create New Folder</h1>
        <div style={styles.inputContainer}>
          <input name="folderName" required placeholder="Enter Folder Name" />
          <button type="submit" style={styles.btn}>
            Create Folder
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  inputContainer: {
    display: "flex",
    gap: 10,
  },
  input: {
    flexGrow: 1,
    padding: 10,
  },
  btn: {
    backgroundColor: "#241F21",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    color: "white",
  },
};
