import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders temporary main page", () => {
  render(<App />)
  const linkElement = screen.getByText(/Goal management/i)
  expect(linkElement).toBeInTheDocument()
})
