import { render } from "@testing-library/react"
import ApprovedBadge from "../ApprovedBadge"

describe("ApprovedBadge component", () => {
  test("renders with correct variant and custom text", () => {
    const { getByTestId } = render(<ApprovedBadge text="test approved badge" />)
    const badge = getByTestId("badge")
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveTextContent("test approved badge")
    expect(badge.className).toContain("badge-light-success")
  })

  test("renders with default text", () => {
    const { getByTestId } = render(<ApprovedBadge />)
    const badge = getByTestId("badge")
    expect(badge).toHaveTextContent("Approved")
  })
})
