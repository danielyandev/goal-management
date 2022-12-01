import ApprovedBadge from "../components/badge/ApprovedBadge"
import RejectedBadge from "../components/badge/RejectedBadge"
import PendingBadge from "../components/badge/PendingBadge"

export const getGoalBadge = (status) => {
  switch (status.toLowerCase()) {
    case "approved":
      return <ApprovedBadge />
    case "rejected":
      return <RejectedBadge />
    default:
      return <PendingBadge />
  }
}
