import { render } from "@testing-library/react"
import Layout from "../Layout"
import TestsWrapper from "../../../helpers/TestsWrapper"

describe("Layout component", () => {
  test("renders children", () => {
    const { queryByText, getByTestId } = render(
      <Layout>
        <div>Child</div>
      </Layout>,
      { wrapper: TestsWrapper }
    )
    expect(queryByText("Child")).toBeInTheDocument()
    expect(getByTestId("sidebar")).toBeInTheDocument()
    expect(getByTestId("header")).toBeInTheDocument()
  })
})
