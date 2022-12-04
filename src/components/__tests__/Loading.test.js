import { render } from "@testing-library/react"
import Loading from "../Loading"

describe("Loading component", () => {
  test("renders loading icon when loading param is true", () => {
    const { queryByTestId, queryByText } = render(
      <Loading loading={true}>
        <div>Child</div>
      </Loading>
    )
    expect(queryByTestId("loading")).toBeInTheDocument()
    expect(queryByText("Child")).not.toBeInTheDocument()
  })

  test("renders children when loading param is false", () => {
    const { queryByTestId, queryByText } = render(
      <Loading loading={false}>
        <div>Child</div>
      </Loading>
    )
    expect(queryByTestId("loading")).not.toBeInTheDocument()
    expect(queryByText("Child")).toBeInTheDocument()
  })
})
