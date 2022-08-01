import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalComponent = ({
  isOpen,
  setIsOpen,
  onModalCloseHandler,
  modalBody,
  modalHeading,
}) => {
  return (
    <Modal show={isOpen} onHide={setIsOpen}>
      <Modal.Header closeButton>
        <Modal.Title>{modalHeading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onModalCloseHandler}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
