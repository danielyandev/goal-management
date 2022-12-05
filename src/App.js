import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/landing/Landing"
import PrivateRoute from "./helpers/PrivateRoute"
import { useKeycloak } from "@react-keycloak/web"
import MyGoals from "./pages/my-goals/MyGoals"
import { Navigate } from "react-router"
import ReviewRequests from "./pages/review-requests/ReviewRequests"
import CreateGoal from "./pages/create-goal/CreateGoal"

function App() {
  const { initialized } = useKeycloak()

  return (
    initialized && (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route
            exact
            path="/goals"
            element={
              <PrivateRoute>
                <MyGoals />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path="/goals/requests"
            element={
              <PrivateRoute>
                <ReviewRequests />
              </PrivateRoute>
            }
          />

          <Route
            exact
            path="/goals/create"
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
