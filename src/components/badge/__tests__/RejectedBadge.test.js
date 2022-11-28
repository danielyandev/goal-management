import { render } from "@testing-library/react"
import RejectedBadge from "../RejectedBadge"

describe("ApprovedBadge component", () => {
  test("renders with correct variant and text", () => {
    const { getByTestId } = render(<RejectedBadge text="test rejected badge" />)
    const badge = getByTestId("badge")
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveTextContent("test rejected badge")
    expect(badge.className).toContain("badge-light-danger")
  })

  test("renders with default text", () => {
    const { getByTestId } = render(<RejectedBadge />)
    const badge = getByTestId("badge")
    expect(badge).toHaveTextContent("Rejected")
  })
})
