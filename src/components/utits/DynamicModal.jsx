import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function DynamicModal({
  show,
  handleClose,
  title,
  content,
  handlesave}
) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {content}
      </Modal.Body>
    </Modal>
  );
}
