import React from "react";
import "./index.scss";
import { useContext } from "react";
import { PlaygroundContext } from "../../Providers/PlaygroundProvider";
import { ModalContext } from "../../Providers/ModalProvider";
import { modalConstants } from "../../utils/Constants";

const Folder = ({ folderTitle, cards, id }) => {
  const { deleteFolder } = useContext(PlaygroundContext);
  const onDeleteFolder = () => {
    deleteFolder(id);
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
          <span className="material-icons">edit</span>
          <button>
            <span className="material-icons">add</span>
            <span>Playground</span>
          </button>
        </div>
      </div>
      <div className="cards-container">
        {cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src="Logo.png" alt="" />
              <div className="title-container">
                <span>{card.title}</span>
                <span>Language : {card.language}</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <span className="material-icons">delete</span>
                <span className="material-icons">edit</span>
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
            id={folder.id}
          />
        );
      })}
    </div>
  );
};

export default RightComponent;
