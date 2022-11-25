import { render } from "@testing-library/react"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import HowItWorksSection from "../HowItWorksSection"

describe("Landing HowItWorksSection", () => {
  test("renders section", () => {
    const { getByText } = render(<HowItWorksSection />, {
      wrapper: TestsWrapper
    })

    // check for title
    expect(getByText("How it Works")).toBeInTheDocument()
  })
})
