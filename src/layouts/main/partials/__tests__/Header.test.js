import Header from "../Header"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import { render } from "@testing-library/react"

describe("Header component", () => {
  test("renders Header", () => {
    const { queryByText } = render(<Header />, {
      wrapper: TestsWrapper
    })

    expect(queryByText("Sign Out")).toBeInTheDocument()
  })
})
