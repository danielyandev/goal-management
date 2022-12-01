import Layout from "../../../layouts/main/Layout"
import { useEffect, useState } from "react"
import ErrorAlert from "../../../components/alerts/ErrorAlert"
import { createGoal, getUsers } from "../../../api/requests"
import { httpStatuses } from "../../../config/constants"
import { useNavigate } from "react-router-dom"

function CreateGoal() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState([])
  const [form, setForm] = useState({
    title: "",
    description: "",
    reviewer: ""
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const { data } = await getUsers()
    setUsers(data)
  }

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err.length) {
      setErrors(err)
      return
    }
    setErrors([])
    try {
      const { status } = await createGoal(form)
      if (status === httpStatuses.OK) {
        return navigate("/dashboard")
      }
    } catch (e) {
      setErrors(["Something went wrong, please try again later"])
    }
  }

  const validate = () => {
    const errors = []
    if (!form.title) {
      errors.push("Title is required")
    }
    if (!form.description) {
      errors.push("Description is required")
    }
    if (!form.reviewer) {
      errors.push("Reviewer is required")
    }

    return errors
  }

  const renderOptions = () => {
    return users.map((user) => {
      return (
        <option key={user.username} value={user.username}>
          {user.fullName}
        </option>
      )
    })
  }
  return (
    <Layout>
      <h2>Create goal</h2>
      <form className="col-lg-6" onSubmit={handleFormSubmit}>
        <ErrorAlert errors={errors} />
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={form.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            rows="5"
            id="description"
            name="description"
            value={form.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="reviewer">Reviewer</label>
          <select
            className="form-control"
            id="reviewer"
            name="reviewer"
            value={form.reviewer}
            onChange={handleInputChange}
          >
            <option value=""></option>
            {renderOptions()}
          </select>
        </div>
        <button type="submit" className="btn btn-outline-primary mt-3">
          Create
        </button>
      </form>
    </Layout>
  )
}

export default CreateGoal
