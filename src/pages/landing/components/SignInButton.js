import { useKeycloak } from "@react-keycloak/web"
import PropTypes from "prop-types"
import Button from "../../../components/Button"
import { Link } from "react-router-dom"

function SignInButton({ children, ...rest }) {
  const { keycloak } = useKeycloak()

  const handleSignIn = () => {
    return keycloak.login({ redirectUri: location.origin + "/home" })
  }

  return !keycloak.authenticated ? (
    <Button {...rest} onClick={handleSignIn}>
      {children}
    </Button>
  ) : (
    <Link to="/dashboard">
      <Button {...rest}>Go to Dashboard</Button>
    </Link>
  )
}

SignInButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "success", "info", "warning", "danger"]),
  children: PropTypes.any
}

export default SignInButton
