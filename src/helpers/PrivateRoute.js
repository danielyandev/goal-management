import { useKeycloak } from "@react-keycloak/web"
import { Navigate } from "react-router"
import PropTypes from "prop-types"

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak()

  if (!keycloak.authenticated) {
    return <Navigate to="/" />
  }

  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.any
}

export default PrivateRoute
