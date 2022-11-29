import { render } from "@testing-library/react"
import Badge from "../Badge"

describe("Badge component", () => {
  test("renders with correct variant and text", () => {
    const { getByTestId } = render(
      <Badge variant="success" text="test badge" />
    )
    const badge = getByTestId("badge")
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveTextContent("test badge")
    expect(badge.className).toContain("badge-light-success")
  })
})
