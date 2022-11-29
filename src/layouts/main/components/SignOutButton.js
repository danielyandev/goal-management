import Button from "../../../components/Button"
import { useKeycloak } from "@react-keycloak/web"

function SignOutButton() {
  const { keycloak } = useKeycloak()
  return (
    <Button variant="outline-danger" onClick={keycloak.logout}>
      Sign Out
    </Button>
  )
}

SignOutButton.propTypes = {
  ...Button.propTypes
}
export default SignOutButton
