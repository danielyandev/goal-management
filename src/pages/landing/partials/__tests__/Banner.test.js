import { render } from "@testing-library/react"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import Banner from "../Banner"

describe("Landing banner", () => {
  test("renders landing banner", () => {
    const { getByTestId, getByText } = render(<Banner />, { wrapper: TestsWrapper })

    // check for title
    const h1 = getByTestId("banner-title")

    expect(h1).toBeInTheDocument()
    expect(h1).toHaveTextContent(
      "Achieve Better Results With The Best Goal Management System Ever"
    )

    // check for button
    const button = getByText("Try it now")
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("btn btn-primary")
  })
})
