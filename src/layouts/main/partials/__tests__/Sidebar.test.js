import Sidebar from "../Sidebar"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import { render } from "@testing-library/react"

describe("Sidebar component", () => {
  test("renders Sidebar when visible is true", () => {
    const { getByTestId } = render(<Sidebar visible={true} />, {
      wrapper: TestsWrapper
    })

    const sidebar = getByTestId("sidebar")
    expect(sidebar.className).not.toContain("d-none")

    const link = getByTestId("dashboard-link")
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent("GM Tool")
    expect(link.href).toContain("/dashboard")
  })

  test("Sidebar is not visible when visible is false", () => {
    const { getByTestId } = render(<Sidebar visible={false} />, {
      wrapper: TestsWrapper
    })
    const sidebar = getByTestId("sidebar")
    expect(sidebar).toBeInTheDocument()
    expect(sidebar.className).toContain("d-none")
  })

  test("Sidebar is not visible by default", () => {
    const { getByTestId } = render(<Sidebar />, {
      wrapper: TestsWrapper
    })
    const sidebar = getByTestId("sidebar")
    expect(sidebar).toBeInTheDocument()
    expect(sidebar.className).toContain("d-none")
  })
})
