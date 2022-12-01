import { useEffect, useState } from "react"
import Layout from "../../../layouts/main/Layout"
import TableRow from "./components/TableRow"
import EmptyRow from "../../../components/table/EmptyRow"
import Pagination from "../../../components/pagination/Pagination"
import { Link } from "react-router-dom"
import { getGoals } from "../../../api/requests"
import Loading from "../../../components/Loading"
import ViewGoalModal from "../../../components/modals/ViewGoalModal"

function MyGoals() {
  const [goals, setGoals] = useState([])
  const [viewGoal, setViewGoal] = useState(null)
  const [loading, setLoading] = useState(false)
  const [totalElements, setTotalElements] = useState(0)
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10
  })

  useEffect(() => {
    fetchGoals()
  }, [pagination])

  const fetchGoals = async () => {
    setLoading(true)
    const params = {
      ...pagination,
      reviewEligible: false,
      sort: "createdDate,desc"
    }
    const { data } = await getGoals(params)
    const { content, totalElements } = data
    setGoals(content)
    setTotalElements(totalElements)
    setLoading(false)
  }

  const handleViewCLick = (goal) => {
    setViewGoal(goal)
  }

  const handleModalClose = () => {
    setViewGoal(null)
  }

  const renderGoals = () => {
    if (!goals.length) {
      return <EmptyRow colSpan={6} />
    }
    return goals.map((goal) => (
      <TableRow
        goal={goal}
        key={"goal-" + goal.id}
        onViewCLick={() => handleViewCLick(goal)}
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
      <h2>My Goals</h2>
      <Link to="/create">
        <button className="btn btn-outline-primary">Create new goal</button>
      </Link>

      <Loading loading={loading}>
        <div className="table-responsive">
          <table className="table align-middle table-row-dashed mt-4">
            <thead>
              <tr className="text-start text-uppercase text-secondary">
                <th>Title</th>
                <th>Description</th>
                <th>Reviewer</th>
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

      <ViewGoalModal goal={viewGoal} onClose={handleModalClose} />
    </Layout>
  )
}

export default MyGoals
