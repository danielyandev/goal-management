import SignOutButton from "../SignOutButton"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import { fireEvent, render } from "@testing-library/react"

describe("SignOutButton component", () => {
  test("renders logout button when user is logged in", () => {
    const { queryByText } = render(<SignOutButton />, {
      wrapper: TestsWrapper
    })

    expect(queryByText("Sign Out")).toBeInTheDocument()
  })

  test("redirects landing page on logout button click", () => {
    const logout = jest.fn()
    const { queryByText } = render(
      <TestsWrapper keycloakMocks={{ logout }}>
        <SignOutButton />
      </TestsWrapper>
    )

    const button = queryByText("Sign Out")
    fireEvent.click(button)
    expect(logout).toHaveBeenCalledTimes(1)
  })
})
