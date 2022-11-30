import { useEffect, useState } from "react"
import Layout from "../../../layouts/main/Layout"
import TableRow from "./components/TableRow"
import EmptyRow from "../../../components/table/EmptyRow"
import Pagination from "../../../components/pagination/Pagination"

function ReviewRequests() {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    fetchGoals()
  }, [])

  // todo fetch
  const fetchGoals = () => {
    setGoals([])
  }

  const renderGoals = () => {
    if (!goals.length) {
      return <EmptyRow colSpan={6} />
    }
    return goals.map((goal) => (
      <TableRow goal={goal} key={"review-goal-" + goal.id} />
    ))
  }
  return (
    <Layout>
      <h2>Review Requests</h2>
      <div className="table-responsive">
        <table className="table align-middle table-row-dashed mt-4">
          <thead>
            <tr className="text-start text-uppercase text-secondary">
              <th>Title</th>
              <th>Description</th>
              <th>Submitted By</th>
              <th>Status</th>
              <th>Created Date</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>

          <tbody>{renderGoals()}</tbody>
        </table>
      </div>

      {goals.length > 0 && <Pagination />}
    </Layout>
  )
}

export default ReviewRequests
