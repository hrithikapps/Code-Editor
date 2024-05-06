import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);
  const [modalPayload, setModalPayload] = useState(null);
  const closeModal = () => {
    setModalType(null);
    setModalPayload(null);
  };

  const modalFeatures = {
    openModal: setModalType,
    closeModal,
    activeModal: modalType,
    modalPayload,
    setModalPayload,
  };

  return (
    <ModalContext.Provider value={modalFeatures}>
      {children}
    </ModalContext.Provider>
  );
};
