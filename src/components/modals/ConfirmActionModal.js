import PropTypes from "prop-types"
import { Modal } from "react-bootstrap"
import Button from "../Button"

function ConfirmActionModal({ message, onApprove, onClose }) {
  return (
    <Modal show={!!message} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="outline-success" onClick={onApprove}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ConfirmActionModal.propTypes = {
  message: PropTypes.string,
  onApprove: PropTypes.func,
  onClose: PropTypes.func
}
export default ConfirmActionModal
