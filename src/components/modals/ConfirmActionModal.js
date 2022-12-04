import PropTypes from "prop-types"
import { Modal } from "react-bootstrap"
import Button from "../Button"

function ConfirmActionModal({ message, onConfirm, onClose }) {
  return (
    <Modal show={!!message} onHide={onClose} data-testid="confirm-modal">
      <Modal.Header closeButton>
        <Modal.Title>Confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-secondary"
          onClick={onClose}
          data-testid="cancel-button"
        >
          Cancel
        </Button>
        <Button
          variant="outline-success"
          onClick={onConfirm}
          data-testid="confirm-button"
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ConfirmActionModal.propTypes = {
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
}
export default ConfirmActionModal
