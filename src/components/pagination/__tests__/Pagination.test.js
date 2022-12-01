import { render } from "@testing-library/react"
import Pagination from "../Pagination"

describe("Pagination component", () => {
  const fn = jest.fn()

  test("renders component without size when elements are empty", () => {
    const { queryByTestId } = render(
      <Pagination
        totalElements={0}
        pageSize={10}
        onPageChange={fn}
        onPageSizeChange={fn}
      />
    )

    expect(queryByTestId("perpage-select")).not.toBeInTheDocument()
  })

  test("renders component with size when elements are not empty", () => {
    const { queryByTestId } = render(
      <Pagination
        totalElements={1}
        pageSize={10}
        onPageChange={fn}
        onPageSizeChange={fn}
      />
    )

    expect(queryByTestId("perpage-select")).toBeInTheDocument()
  })
})
