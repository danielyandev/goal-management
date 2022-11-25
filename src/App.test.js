import { render } from "@testing-library/react"
import App from "./App"
import TestsWrapper from "./helpers/TestsWrapper"

test("renders app", () => {
  const { container } = render(<App />, { wrapper: TestsWrapper })
  expect(container).toBeValid()
})
