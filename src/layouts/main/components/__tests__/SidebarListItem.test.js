import SidebarListItem from "../SidebarListItem"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import { render } from "@testing-library/react"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3005/active"
  })
}))

describe("SidebarListItem component", () => {
  test("renders SidebarListItem with text and uri when inactive", () => {
    const { queryByText } = render(
      <SidebarListItem text="test text" uri="/test" />,
      {
        wrapper: TestsWrapper
      }
    )
    const link = queryByText("test text")
    expect(link).toBeInTheDocument()
    expect(link.href).toContain("/test")
    expect(link.className).toContain("text-white")
    expect(link.className).not.toContain("active")
  })

  test("renders SidebarListItem with text and uri when active", () => {
    const { queryByText } = render(
      <SidebarListItem text="test text active" uri="/active" />,
      {
        wrapper: TestsWrapper
      }
    )
    const link = queryByText("test text active")
    expect(link).toBeInTheDocument()
    expect(link.href).toContain("/active")
    expect(link.className).toContain("active")
    expect(link.className).not.toContain("text-white")
  })
})
