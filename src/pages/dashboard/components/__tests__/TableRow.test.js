import TableRow from "../TableRow"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import { render } from "@testing-library/react"

const goal = {
  title: "test goal title",
  description: "test goal description",
  status: "pending",
  assignee: "test user",
  createdAt: "some date"
}

describe("TableRow component", () => {
  test("renders table row with status Pending", () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <TableRow goal={goal} />
        </tbody>
      </table>,
      {
        wrapper: TestsWrapper
      }
    )
    expect(getByTestId("td-title")).toHaveTextContent(goal.title)
    expect(getByTestId("td-description")).toHaveTextContent(goal.description)
    expect(getByTestId("td-assignee")).toHaveTextContent(goal.assignee)
    expect(getByTestId("td-date")).toHaveTextContent(goal.createdAt)

    const badge = getByTestId("td-status")
    expect(badge).toHaveTextContent("Pending")
  })

  test("renders table row with status Approved", () => {
    goal.status = "approved"
    const { getByTestId } = render(
      <table>
        <tbody>
          <TableRow goal={goal} />
        </tbody>
      </table>,
      {
        wrapper: TestsWrapper
      }
    )

    expect(getByTestId("td-status")).toHaveTextContent("Approved")
  })

  test("renders table row with status Rejected", () => {
    goal.status = "rejected"
    const { getByTestId } = render(
      <table>
        <tbody>
        <TableRow goal={goal} />
        </tbody>
      </table>,
      {
        wrapper: TestsWrapper
      }
    )

    expect(getByTestId("td-status")).toHaveTextContent("Rejected")
  })
})
