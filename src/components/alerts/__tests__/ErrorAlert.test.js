import { render } from "@testing-library/react"
import ErrorAlert from "../ErrorAlert"

describe("ErrorAlert component", () => {
  test("does not render component when errors are empty", () => {
    const { queryByTestId } = render(<ErrorAlert errors={[]} />)
    expect(queryByTestId("errors")).not.toBeInTheDocument()
  })

  test("renders alert when errors are not empty", () => {
    const errors = ["Error message"]
    const { queryByTestId, queryByText } = render(
      <ErrorAlert errors={errors} />
    )
    expect(queryByTestId("errors")).toBeInTheDocument()
    expect(queryByText("Error message")).toBeInTheDocument()
  })
})
