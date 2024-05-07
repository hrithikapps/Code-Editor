import React from "react";
import "./index.scss";
import { useContext } from "react";
import { PlaygroundContext } from "../../Providers/PlaygroundProvider";
import { ModalContext } from "../../Providers/ModalProvider";
import { modalConstants } from "../../utils/Constants";
import { useNavigate } from "react-router-dom";

const Folder = ({ folderTitle, cards, folderId }) => {
  const { deleteFolder, deleteFile } = useContext(PlaygroundContext);
  const { openModal, setModalPayload } = useContext(ModalContext);
  const navigate = useNavigate();
  const onDeleteFolder = () => {
    deleteFolder(folderId);
  };
  const onEditFolderTitle = () => {
    setModalPayload(folderId);
    openModal(modalConstants.UPDATE_FOLDER_TITLE);
  };

  const openCreateCardModal = () => {
    setModalPayload(folderId);
    openModal(modalConstants.CREATE_CARD);
  };

  return (
    <div className="folder-container">
      <div className="folder-header">
        <div className="folder-header-items">
          <span style={{ color: "#FFCA29" }} className="material-icons">
            folder
          </span>
          <span>{folderTitle}</span>
        </div>
        <div className="folder-header-items">
          <span className="material-icons" onClick={onDeleteFolder}>
            delete
          </span>
          <span onClick={onEditFolderTitle} className="material-icons">
            edit
          </span>
          <button onClick={openCreateCardModal}>
            <span className="material-icons">add</span>
            <span>Playground</span>
          </button>
        </div>
      </div>
      <div className="cards-container">
        {cards.map((file, index) => {
          const onEditFile = () => {
            setModalPayload({ fileId: file.id, folderId: folderId });
            openModal(modalConstants.UPDATE_FILE_TITLE);
          };

          const onDeleteFile = () => {
            deleteFile(folderId, file.id);
          };

          const navigateToPlaygroundScreen = () => {
            // TODO : navigate to next screen by passing fileId and FolderID
            navigate(`/playground/${file.id}/${folderId}`);
          };
          return (
            <div
              onClick={navigateToPlaygroundScreen}
              className="card"
              key={index}
            >
              <img src="Logo.png" alt="Logo" />
              <div className="title-container">
                <span>{file.title}</span>
                <span>Language : {file.language}</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <span onClick={onDeleteFile} className="material-icons">
                  delete
                </span>
                <span onClick={onEditFile} className="material-icons">
                  edit
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RightComponent = () => {
  const { folders } = useContext(PlaygroundContext);
  const modalFeatures = useContext(ModalContext);
  const openCreateNewFolderModal = () => {
    modalFeatures.openModal(modalConstants.CREATE_FOLDER);
  };

  return (
    <div className="right-container">
      <div className="header">
        <h2>
          My
          <span className="title"> Playground</span>
        </h2>
        <div onClick={openCreateNewFolderModal} className="add-folder">
          <span className="material-icons">add</span>
          <span>New Folder</span>
        </div>
      </div>
      {folders?.map((folder, index) => {
        return (
          <Folder
            folderTitle={folder?.title}
            cards={folder?.files}
            key={index}
            folderId={folder.id}
          />
        );
      })}
    </div>
  );
};

export default RightComponent;
