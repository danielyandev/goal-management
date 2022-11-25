import TestsWrapper from "../TestsWrapper"
import { render } from "@testing-library/react"
import PrivateRoute from "../PrivateRoute"

describe("PrivateRoute helper", () => {
  test("renders child component if user is logged in", () => {
    const { queryByText } = render(
      <TestsWrapper keycloakMocks={{ authenticated: true }}>
        <PrivateRoute>
          <div>Child component</div>
        </PrivateRoute>
      </TestsWrapper>
    )

    expect(queryByText("Child component")).toBeInTheDocument()
  })
})
