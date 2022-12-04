import PropTypes from "prop-types"
import { Modal } from "react-bootstrap"
import Button from "../Button"
import { getGoalBadge } from "../../helpers/Common"
import { formatDate } from "../../utils/Date"

function ViewGoalModal({ goal, onClose }) {
  return (
    <Modal show={!!goal} onHide={onClose} data-testid="view-goal-modal">
      <Modal.Header closeButton>
        <Modal.Title>View goal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {goal && (
          <>
            <div className="row mt-3">
              <div className="col-lg-6 fw-bold">Title</div>
              <div className="col-lg-6">{goal.title}</div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 fw-bold">Description</div>
              <div className="col-lg-6">{goal.description}</div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 fw-bold">Owner</div>
              <div className="col-lg-6">{goal.owner.fullName}</div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 fw-bold">Reviewer</div>
              <div className="col-lg-6">{goal.reviewer.fullName}</div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 fw-bold">Created Date</div>
              <div className="col-lg-6">{formatDate(goal.createdDate)}</div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 fw-bold">Status</div>
              <div className="col-lg-6" data-testid="status">
                {getGoalBadge(goal.status)}
              </div>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-primary"
          onClick={onClose}
          data-testid="close-button"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

ViewGoalModal.propTypes = {
  goal: PropTypes.object,
  onClose: PropTypes.func
}
export default ViewGoalModal
