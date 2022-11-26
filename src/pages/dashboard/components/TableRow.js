import PropTypes from "prop-types"
import Button from "../../../components/Button"
import ApprovedBadge from "../../../components/badge/ApprovedBadge"
import RejectedBadge from "../../../components/badge/RejectedBadge"
import PendingBadge from "../../../components/badge/PendingBadge"

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
      <td>{goal.title}</td>
      <td className="text-truncate" style={{ maxWidth: "250px" }}>
        {goal.description}
      </td>
      <td>{goal.assignee}</td>
      <td>{getGoalBadge(goal.status)}</td>
      <td>{goal.createdAt}</td>
      <td className="text-end">
        <Button variant="outline-info">View</Button>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  goal: PropTypes.object
}
export default TableRow
