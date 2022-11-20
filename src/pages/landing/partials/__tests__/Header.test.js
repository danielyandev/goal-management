import { render } from "@testing-library/react"
import Header from "../Header"
import TestsWrapper from "../../../../helpers/TestsWrapper"

describe("Landing header", () => {
  test("renders landing header", () => {
    const { getByText } = render(<Header />, { wrapper: TestsWrapper })

    // check for title link
    const a = getByText("GM Tool")
    expect(a).toBeInTheDocument()
    expect(a).toHaveAttribute("href")

    // check for button
    const button = getByText("Sign In")
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("btn btn-success")
  })
})
