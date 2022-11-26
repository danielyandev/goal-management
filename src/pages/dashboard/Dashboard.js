import { useEffect, useState } from "react"
import Layout from "../../layouts/main/Layout"
import TableRow from "./components/TableRow"
import EmptyRow from "../../components/table/EmptyRow"
import Pagination from "../../components/pagination/Pagination"

function Dashboard() {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    // todo fetch goals
    setGoals([
      {
        id: 1,
        title: "test title",
        description: "test description",
        assignee: "test assignee",
        createdAt: "Today",
        status: "pending"
      },
      {
        id: 2,
        title: "test title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        assignee: "test assignee",
        createdAt: "Today",
        status: "approved"
      },
      {
        id: 3,
        title: "test title",
        description: "test description",
        assignee: "test assignee",
        createdAt: "Today",
        status: "rejected"
      }
    ])
  }, [])

  const renderGoals = () => {
    if (!goals.length) {
      return <EmptyRow colSpan={6} />
    }
    return goals.map((goal) => <TableRow goal={goal} key={"goal-" + goal.id} />)
  }
  return (
    <Layout>
      <button className="btn btn-outline-primary">Create new goal</button>

      <div className="table-responsive">
        <table className="table align-middle table-row-dashed mt-4">
          <thead>
            <tr className="text-start text-uppercase text-secondary">
              <th>Title</th>
              <th>Description</th>
              <th>Assignee</th>
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

export default Dashboard
