import { render } from "@testing-library/react"
import EmptyRow from "../EmptyRow"

describe("EmptyRow component", () => {
  test("renders with given colspan", () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <EmptyRow colSpan="5" />
        </tbody>
      </table>
    )
    const row = getByTestId("empty-row")
    expect(row).toBeInTheDocument()
    expect(row).toHaveAttribute("colSpan", "5")
  })

  test("renders with default colspan", () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <EmptyRow />
        </tbody>
      </table>
    )
    const row = getByTestId("empty-row")
    expect(row).toBeInTheDocument()
    expect(row).toHaveAttribute("colSpan", "1")
  })
})
