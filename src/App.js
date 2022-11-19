import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import PrivateRoute from "./helpers/PrivateRoute"
import { useKeycloak } from "@react-keycloak/web"
import Dashboard from "./pages/dashboard/Dashboard"

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
        </Routes>
      </BrowserRouter>
    )
  )
}

export default App
