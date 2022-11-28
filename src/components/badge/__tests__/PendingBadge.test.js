import { render } from "@testing-library/react"
import PendingBadge from "../PendingBadge"

describe("ApprovedBadge component", () => {
  test("renders with correct variant and text", () => {
    const { getByTestId } = render(<PendingBadge text="test pending badge" />)
    const badge = getByTestId("badge")
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveTextContent("test pending badge")
    expect(badge.className).toContain("badge-light-info")
  })

  test("renders with default text", () => {
    const { getByTestId } = render(<PendingBadge />)
    const badge = getByTestId("badge")
    expect(badge).toHaveTextContent("Pending")
  })
})
