import PropTypes from "prop-types"
import Button from "../../../../components/Button"
import ApprovedBadge from "../../../../components/badge/ApprovedBadge"
import RejectedBadge from "../../../../components/badge/RejectedBadge"
import PendingBadge from "../../../../components/badge/PendingBadge"
import { formatDate } from "../../../../utils/Date"

function TableRow({ goal }) {
  const getGoalBadge = (status) => {
    switch (status) {
      case "approved":
        return <ApprovedBadge />
      case "rejected":
        return <RejectedBadge />
      default:
        return <PendingBadge />
    }
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
      <td data-testid="td-reviewer">{goal.reviewer.fullName}</td>
      <td data-testid="td-status">{getGoalBadge(goal.status)}</td>
      <td data-testid="td-date">{formatDate(goal.createdDate)}</td>
      <td data-testid="td-actions" className="text-end">
        <Button variant="outline-info">View</Button>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  goal: PropTypes.object
}
export default TableRow
