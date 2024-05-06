import "./CreatePlaygroundModal.scss";
import { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import { createFolderStyles } from "./CreateFolderModal";

export const UpdateFileTitleModal = () => {
  const closeModal = useContext(ModalContext);
  const { editFileTitle, modalPayload } = useContext(ModalContext);
  const onSubmitModal = (e) => {
    e.preventDefault();
    const fileName = e.target.fileName.value;
    editFileTitle(fileName, modalPayload.folderId, modalPayload.fileId);
    closeModal();
  };

  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-icons close">
          close
        </span>
        <h1>Update Card Title</h1>
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
