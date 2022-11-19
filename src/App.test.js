import { render } from "@testing-library/react"
import App from "./App"

test("renders temporary main page", () => {
  const { container } = render(<App />)
  expect(container).toBeEmptyDOMElement()
})
