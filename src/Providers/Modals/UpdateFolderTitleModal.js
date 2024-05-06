import { useContext } from "react";
import "./CreatePlaygroundModal.scss";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";
import { createFolderStyles } from "./CreateFolderModal";

export const UpdateFolderTitleModal = () => {
  const { closeModal, modalPayload } = useContext(ModalContext);
  const { editFolderTitle } = useContext(PlaygroundContext);

  const onSubmitModal = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    editFolderTitle(folderName, modalPayload);
    closeModal();
  };
  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-icons close">
          close
        </span>
        <h1>Update Folder Title</h1>
        <div style={createFolderStyles.inputContainer}>
          <input name="folderName" required placeholder="Enter Folder Name" />
          <button type="submit" style={createFolderStyles.btn}>
            Create Folder
          </button>
        </div>
      </form>
    </div>
  );
};
