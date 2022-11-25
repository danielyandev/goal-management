import { Link } from "react-router-dom"
import SignInButton from "../components/SignInButton"

function Header() {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between pt-2">
        <div className="d-flex align-items-center">
          <Link className="logo-link color-gray" to="/">
            GM Tool
          </Link>
        </div>

        <div className="text-end ms-1">
          <SignInButton variant="success">Sign In</SignInButton>
        </div>
      </div>
    </div>
  )
}

export default Header
