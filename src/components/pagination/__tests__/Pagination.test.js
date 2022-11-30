import { render } from "@testing-library/react"
import Pagination from "../Pagination"

describe("Pagination component", () => {
  const fn = jest.fn()

  test("renders component without size when items are empty", () => {
    const { queryByTestId } = render(
      <Pagination
        items={[]}
        pageSize={10}
        onPageChange={fn}
        onPageSizeChange={fn}
      />
    )

    expect(queryByTestId("perpage-select")).not.toBeInTheDocument()
  })

  test("renders component with size when items are not empty", () => {
    const { queryByTestId } = render(
      <Pagination
        items={["non empty goals array"]}
        pageSize={10}
        onPageChange={fn}
        onPageSizeChange={fn}
      />
    )

    expect(queryByTestId("perpage-select")).toBeInTheDocument()
  })
})
