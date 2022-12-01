import { useEffect, useState } from "react"
import Layout from "../../../layouts/main/Layout"
import TableRow from "./components/TableRow"
import EmptyRow from "../../../components/table/EmptyRow"
import Pagination from "../../../components/pagination/Pagination"
import { getGoals } from "../../../api/requests"
import Loading from "../../../components/Loading"

function ReviewRequests() {
  const [goals, setGoals] = useState([])
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
      reviewEligible: true
    }
    const { data } = await getGoals(params)
    const { content, totalElements } = data
    setGoals(content)
    setTotalElements(totalElements)
    setLoading(false)
  }

  const renderGoals = () => {
    if (!goals.length) {
      return <EmptyRow colSpan={6} />
    }
    return goals.map((goal) => (
      <TableRow goal={goal} key={"review-goal-" + goal.id} />
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
    </Layout>
  )
}

export default ReviewRequests
