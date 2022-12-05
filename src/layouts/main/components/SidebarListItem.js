import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"

function SidebarListItem({ uri, text }) {
  const location = useLocation()

  const isActive = () => {
    return location.pathname === uri
  }

  const getLinkClassname = () => {
    let className = "nav-link "
    className += isActive() ? "active" : "text-white"

    return className
  }

  return (
    <li>
      <Link to={uri} className={getLinkClassname()}>
        {text}
      </Link>
    </li>
  )
}

SidebarListItem.propTypes = {
  uri: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default SidebarListItem
