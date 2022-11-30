import { fireEvent, render } from "@testing-library/react"
import PerPage from "../PerPage"

describe("PerPage component", () => {
  const handleSizeChange = jest.fn()

  test("renders component with default size", () => {
    const { getByTestId } = render(<PerPage onSizeChange={handleSizeChange} />)

    expect(getByTestId("perpage-select").value).toBe("10")
  })

  test("renders component with correct size", () => {
    const { getByTestId } = render(
      <PerPage size={25} onSizeChange={handleSizeChange} />
    )

    expect(getByTestId("perpage-select").value).toBe("25")
  })

  test("triggers onSizeChange handler when value is changed", () => {
    const { getByTestId } = render(<PerPage onSizeChange={handleSizeChange} />)
    const select = getByTestId("perpage-select")
    fireEvent.change(select)
    expect(handleSizeChange).toBeCalledTimes(1)
  })
})
