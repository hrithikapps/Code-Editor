import { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import { CreatePlaygroundModal } from "./CreatePlaygroundModal";

export const Modals = () => {
  const modalFeatures = useContext(ModalContext);
  return (
    <>
      {modalFeatures.activeModal === "CREATE_PLAYGROUND" && (
        <CreatePlaygroundModal />
      )}
    </>
  );
};
