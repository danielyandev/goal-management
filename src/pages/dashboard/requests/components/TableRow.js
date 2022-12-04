import PropTypes from "prop-types"
import Button from "../../../../components/Button"
import { formatDate } from "../../../../utils/Date"
import { getGoalBadge } from "../../../../helpers/Common"

function TableRow({ goal, onViewCLick, onReviewSubmit }) {
  const isPending = (goal) => {
    return goal.status.toLowerCase() === "pending"
  }

  return (
    <tr>
      <td data-testid="td-title">{goal.title}</td>
      <td
        data-testid="td-description"
        className="text-truncate"
        style={{ maxWidth: "250px" }}
      >
        {goal.description}
      </td>
      <td data-testid="td-owner">{goal.owner.fullName}</td>
      <td data-testid="td-status">{getGoalBadge(goal.status)}</td>
      <td data-testid="td-date">{formatDate(goal.createdDate)}</td>
      <td data-testid="td-actions" className="text-end">
        {isPending(goal) && (
          <>
            <Button
              data-testid="approve"
              variant="outline-success"
              onClick={() => onReviewSubmit(true)}
            >
              Approve
            </Button>
            <Button
              data-testid="reject"
              variant="outline-danger"
              onClick={() => onReviewSubmit(false)}
            >
              Reject
            </Button>
          </>
        )}
        <Button variant="outline-info" onClick={onViewCLick}>
          View
        </Button>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  goal: PropTypes.object,
  onViewCLick: PropTypes.func,
  onReviewSubmit: PropTypes.func
}
export default TableRow
