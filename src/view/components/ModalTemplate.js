import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalTemplate({
  isVisible,
  handleClose,
  title,
  saveButton = false,
  handleSave = null,
  callToAction = "Salvar",
  children,
}) {
  return (
    <Modal show={isVisible} onHide={handleClose} className="text-dark">
      <Modal.Header closeButton>
        <Modal.Title className="h6">{title}</Modal.Title>
      </Modal.Header>
      {children && <Modal.Body className="container">{children}</Modal.Body>}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {saveButton && (
          <Button variant="primary" onClick={handleSave}>
            {callToAction}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
