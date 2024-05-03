import { useContext } from "react";
import { Modals } from "../../Providers/Modals/Modals";
import RightComponent from "../../components/RightComponent";
import "./index.scss";
import { ModalContext } from "../../Providers/ModalProvider";

export const HomeScreen = () => {
  const modalFeatures = useContext(ModalContext);

  const openCreatePlaygroundModal = () => {
    modalFeatures.openModal("CREATE_PLAYGROUND");
    console.log("openCreatePlaygroundModal");
    console.log("+++", modalFeatures);
  };

  return (
    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src="Logo.png" alt="Logo" />
          <h1>CodeX</h1>
          <h2>Code.Compile.Debug</h2>
          <button onClick={openCreatePlaygroundModal}>
            <span className="material-icons">add</span>
            <span>Create Playground</span>
          </button>
        </div>
      </div>
      <RightComponent />
      <Modals />
    </div>
  );
};
