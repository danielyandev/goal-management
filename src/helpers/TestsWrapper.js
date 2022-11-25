import { MemoryRouter } from "react-router"
import { ReactKeycloakProvider } from "@react-keycloak/web"
import PropTypes from "prop-types"

export const createKeycloakStub = () => ({
  init: jest.fn().mockResolvedValue(true),
  updateToken: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  register: jest.fn(),
  createLoginUrl: jest.fn(),
  authenticated: false
})

function TestsWrapper({ children, keycloakMocks }) {
  const keycloak = {
    ...createKeycloakStub(),
    ...keycloakMocks
  }

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <MemoryRouter>{children}</MemoryRouter>
    </ReactKeycloakProvider>
  )
}

TestsWrapper.propTypes = {
  children: PropTypes.any,
  keycloakMocks: PropTypes.object,
  routerMocks: PropTypes.object
}
export default TestsWrapper
