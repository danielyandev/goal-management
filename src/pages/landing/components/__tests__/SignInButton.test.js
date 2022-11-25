import SignInButton from "../SignInButton"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import { fireEvent, render } from "@testing-library/react"

describe("SignInButton component", () => {
  test("renders login button when user is logged out", () => {
    const { queryByText } = render(<SignInButton>Sign In</SignInButton>, {
      wrapper: TestsWrapper
    })

    expect(queryByText("Sign In")).toBeInTheDocument()
    expect(queryByText("Go to Dashboard")).not.toBeInTheDocument()
  })

  test("renders link to dashboard when user is logged in", () => {
    const { queryByText } = render(
      <TestsWrapper keycloakMocks={{ authenticated: true }}>
        <SignInButton>Sign In</SignInButton>
      </TestsWrapper>
    )

    expect(queryByText("Sign In")).not.toBeInTheDocument()
    expect(queryByText("Go to Dashboard")).toBeInTheDocument()
  })

  test("redirects to keycloak on login button click", () => {
    const login = jest.fn()
    const { queryByText } = render(
      <TestsWrapper keycloakMocks={{ login }}>
        <SignInButton>Sign In</SignInButton>
      </TestsWrapper>
    )

    const button = queryByText("Sign In")
    fireEvent.click(button)
    expect(login).toHaveBeenCalledTimes(1)
  })
})
