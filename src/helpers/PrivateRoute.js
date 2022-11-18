import { useKeycloak } from "@react-keycloak/web"
import { Navigate } from "react-router"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak()

  if (!keycloak.authenticated) {
    return <Navigate to="/" />
  }

  return children
}

export default PrivateRoute
