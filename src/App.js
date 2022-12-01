import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import PrivateRoute from "./helpers/PrivateRoute"
import { useKeycloak } from "@react-keycloak/web"
import MyGoals from "./pages/dashboard/goals/MyGoals"
import { Navigate } from "react-router"
import ReviewRequests from "./pages/dashboard/requests/ReviewRequests"
import CreateGoal from "./pages/dashboard/create_goal/CreateGoal"

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
                <MyGoals />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path="/requests"
            element={
              <PrivateRoute>
                <ReviewRequests />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path="/create"
            element={
              <PrivateRoute>
                <CreateGoal />
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
