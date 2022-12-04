import { useEffect, useState } from "react"
import Layout from "../../../layouts/main/Layout"
import TableRow from "./components/TableRow"
import EmptyRow from "../../../components/table/EmptyRow"
import Pagination from "../../../components/pagination/Pagination"
import { getGoals, reviewGoal } from "../../../api/goals"
import Loading from "../../../components/Loading"
import ViewGoalModal from "../../../components/modals/ViewGoalModal"
import ConfirmActionModal from "../../../components/modals/ConfirmActionModal"

function ReviewRequests() {
  const initialReviewedGoal = {
    goal: null,
    message: ""
  }

  const [goals, setGoals] = useState([])
  const [viewGoal, setViewGoal] = useState(null)
  const [reviewedGoal, setReviewedGoal] = useState(initialReviewedGoal)
  const [loading, setLoading] = useState(false)
  const [totalElements, setTotalElements] = useState(0)
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10
  })

  useEffect(() => {
    fetchGoals()
  }, [pagination])

  const handleViewCLick = (goal) => {
    setViewGoal(goal)
  }

  const fetchGoals = async () => {
    setLoading(true)
    const params = {
      ...pagination,
      reviewEligible: true,
      sort: "createdDate,desc"
    }
    const { data } = await getGoals(params)
    const { content, totalElements } = data
    setGoals(content)
    setTotalElements(totalElements)
    setLoading(false)
  }

  const handleReviewSubmit = (goal, approved) => {
    setReviewedGoal({
      goal,
      approved,
      message: `Are you sure you want to ${
        approved ? "approve" : "reject"
      } this goal?`
    })
  }

  const handleConfirmReviewSubmit = async () => {
    const params = {
      id: reviewedGoal.goal.id,
      approve: reviewedGoal.approved
    }
    const { data } = await reviewGoal(params)
    setReviewedGoal(initialReviewedGoal)
    const mapped = goals.map((goal) => {
      if (goal.id === data.id) {
        goal.status = data.status
      }
      return goal
    })
    setGoals(mapped)
  }

  const renderGoals = () => {
    if (!goals.length) {
      return <EmptyRow colSpan={6} />
    }
    return goals.map((goal) => (
      <TableRow
        goal={goal}
        key={"review-goal-" + goal.id}
        onViewCLick={() => handleViewCLick(goal)}
        onReviewSubmit={(approved) => handleReviewSubmit(goal, approved)}
      />
    ))
  }

  const handlePageChange = ({ selected }) => {
    setPagination({
      ...pagination,
      page: selected
    })
  }

  const handlePageSizeChange = (size) => {
    setPagination({
      page: 0,
      size
    })
  }

  return (
    <Layout>
      <h2>Review Requests</h2>

      <Loading loading={loading}>
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
      </Loading>

      <Pagination
        totalElements={totalElements}
        onPageChange={handlePageChange}
        pageSize={pagination.size}
        onPageSizeChange={handlePageSizeChange}
      />

      <ViewGoalModal goal={viewGoal} onClose={() => setViewGoal(null)} />
      <ConfirmActionModal
        message={reviewedGoal.message}
        onClose={() => setReviewedGoal(initialReviewedGoal)}
        onConfirm={handleConfirmReviewSubmit}
      />
    </Layout>
  )
}

export default ReviewRequests
