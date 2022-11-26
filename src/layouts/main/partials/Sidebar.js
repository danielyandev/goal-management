import { Link } from "react-router-dom"
import SidebarListItem from "../components/SidebarListItem"

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
      <Link
        to="/dashboard"
        className="d-flex justify-content-center mb-3 mb-md-0 me-md-auto text-secondary text-decoration-none"
      >
        <span className="fs-4">GM Tool</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <SidebarListItem uri="/dashboard" text="My goals" />
        <SidebarListItem uri="/requests" text="Review requests" />
      </ul>
    </div>
  )
}

export default Sidebar