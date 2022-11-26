import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import PrivateRoute from "./helpers/PrivateRoute"
import { useKeycloak } from "@react-keycloak/web"
import Dashboard from "./pages/dashboard/Dashboard"
import { Navigate } from "react-router"

function App() {
  const { initialized } = useKeycloak()

  return (
    initialized && (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path="/requests"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    )
  )
}

export default App
