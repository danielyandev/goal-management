import { render, screen } from "@testing-library/react"
import Landing from "../Landing"
import TestsWrapper from "../../../helpers/TestsWrapper"

describe("Landing page", () => {
  test("renders landing page", async () => {
    render(<Landing />, { wrapper: TestsWrapper })

    expect(screen.getByTestId("landing-page")).toBeTruthy()
  })
})
