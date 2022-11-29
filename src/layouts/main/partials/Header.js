import SignOutButton from "../components/SignOutButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

function Header({ toggleSidebar }) {
  return (
    <header className="d-flex text-bg-dark align-items-center justify-content-between">
      <div className="d-flex align-items-center ms-3">
        <button
          className="d-flex d-lg-none navbar-toggler position-absolute"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      </div>
      <SignOutButton variant="outline-danger" />
    </header>
  )
}

Header.propTypes = {
  toggleSidebar: PropTypes.func
}

export default Header
