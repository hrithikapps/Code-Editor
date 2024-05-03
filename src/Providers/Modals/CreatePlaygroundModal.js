import { useContext } from "react";
import "./CreatePlaygroundModal.scss";
import { ModalContext } from "../ModalProvider";

export const CreatePlaygroundModal = () => {
  const modalFeatures = useContext(ModalContext);

  const closeModal = () => {
    modalFeatures.closeModal();
  };

  return (
    <div className="modal-container">
      <form className="modal-body">
        <span onClick={closeModal} className="material-icons close">
          close
        </span>

        <h1>Create New Playground</h1>
        <div className="item">
          <p>Enter Folder Name</p>
          <input type="text" />
        </div>
        <div className="item">
          <p>Enter Card Name</p>
          <input type="text" />
        </div>
        <div className="item">
          <select>
            <option value="cpp">C++</option>
            <option value="java">JAVA</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
          <button>Create Playground</button>
        </div>
      </form>
    </div>
  );
};
