import { Link } from "react-router-dom"
import SidebarListItem from "../components/SidebarListItem"
import PropTypes from "prop-types"

function Sidebar({ visible = false }) {
  return (
    <div
      data-testid="sidebar"
      className={`sidebar ${
        !visible && "d-none"
      } d-lg-flex flex-column position-sticky flex-shrink-0 p-3 text-bg-dark`}
    >
      <Link
        data-testid="dashboard-link"
        to="/goals"
        className="d-flex justify-content-center mb-3 mb-md-0 me-md-auto text-secondary text-decoration-none"
      >
        <span className="fs-4">GM Tool</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <SidebarListItem uri="/goals" text="My goals" />
        <SidebarListItem uri="/goals/requests" text="Review requests" />
      </ul>
    </div>
  )
}

Sidebar.propTypes = {
  visible: PropTypes.bool
}

export default Sidebar
