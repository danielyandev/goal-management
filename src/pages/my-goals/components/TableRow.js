import PropTypes from "prop-types"
import Button from "../../../components/Button"
import { formatDate } from "../../../utils/Date"
import { getGoalBadge } from "../../../helpers/Common"

function TableRow({ goal, onViewCLick }) {
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
        <Button variant="outline-info" onClick={onViewCLick}>
          View
        </Button>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  goal: PropTypes.object,
  onViewCLick: PropTypes.func
}
export default TableRow
