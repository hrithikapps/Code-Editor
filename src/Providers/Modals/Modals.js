import { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import { CreatePlaygroundModal } from "./CreatePlaygroundModal";

export const Modals = () => {
  const modalFeatures = useContext(ModalContext);
  console.log("modals", modalFeatures.activeModal);
  return (
    <>
      <h1>Working</h1>
      {modalFeatures.activeModal === "CREATE_PLAYGROUND" && (
        <CreatePlaygroundModal />
      )}
    </>
  );
};
