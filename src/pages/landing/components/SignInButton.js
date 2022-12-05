import { useKeycloak } from "@react-keycloak/web"
import Button from "../../../components/Button"
import { Link } from "react-router-dom"

function SignInButton({ children, ...rest }) {
  const { keycloak } = useKeycloak()
  const redirectUri = "/goals"

  const handleSignIn = () => {
    return keycloak.login({ redirectUri: location.origin + redirectUri })
  }

  return !keycloak.authenticated ? (
    <Button {...rest} onClick={handleSignIn}>
      {children}
    </Button>
  ) : (
    <Link to={redirectUri}>
      <Button {...rest}>Go to Dashboard</Button>
    </Link>
  )
}

SignInButton.propTypes = {
  ...Button.propTypes
}

export default SignInButton
