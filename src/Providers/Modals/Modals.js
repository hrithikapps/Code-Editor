import { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import { CreatePlaygroundModal } from "./CreatePlaygroundModal";
import { modalConstants } from "../../utils/Constants";
import { CreateFolderModal } from "./CreateFolderModal";
import { UpdateFolderTitleModal } from "./UpdateFolderTitleModal";
import { UpdateFileTitleModal } from "./UpdateFileTitleModal";

export const Modals = () => {
  const modalFeatures = useContext(ModalContext);
  return (
    <>
      {modalFeatures.activeModal === modalConstants.CREATE_PLAYGROUND && (
        <CreatePlaygroundModal />
      )}
      {modalFeatures.activeModal === modalConstants.CREATE_FOLDER && (
        <CreateFolderModal />
      )}
      {modalFeatures.activeModal === modalConstants.UPDATE_FOLDER_TITLE && (
        <UpdateFolderTitleModal />
      )}
      {modalFeatures.activeModal === modalConstants.UPDATE_FILE_TITLE && (
        <UpdateFileTitleModal />
      )}
    </>
  );
};
