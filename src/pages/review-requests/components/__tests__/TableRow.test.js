import TableRow from "../TableRow"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import { fireEvent, render } from "@testing-library/react"
import { formatDate } from "../../../../utils/Date"

const goal = {
  id: 8,
  title: "Test title",
  description: "Test description",
  owner: {
    username: "owner1",
    fullName: "Owner Name"
  },
  reviewer: {
    username: "reviewer1",
    fullName: "Reviewer Name"
  },
  status: "PENDING",
  createdDate: "2022-11-29T23:12:08.988466959"
}

describe("TableRow component", () => {
  test("renders table row with status Pending", () => {
    const { getByTestId, queryByText } = render(
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
    expect(getByTestId("td-owner")).toHaveTextContent(goal.owner.fullName)
    expect(getByTestId("td-date")).toHaveTextContent(
      formatDate(goal.createdDate)
    )

    const badge = getByTestId("td-status")
    expect(badge).toHaveTextContent("Pending")
    expect(queryByText("View")).toBeInTheDocument()
    expect(queryByText("Approve")).toBeInTheDocument()
    expect(queryByText("Reject")).toBeInTheDocument()
  })

  test("calls onReviewSubmit callback on approve", () => {
    const onReviewSubmit = jest.fn()
    const { getByTestId } = render(
      <table>
        <tbody>
          <TableRow goal={goal} onReviewSubmit={onReviewSubmit} />
        </tbody>
      </table>,
      {
        wrapper: TestsWrapper
      }
    )

    fireEvent.click(getByTestId("approve"))
    expect(onReviewSubmit).toBeCalledTimes(1)
    expect(onReviewSubmit).toBeCalledWith(true)
  })

  test("calls onReviewSubmit callback on reject", () => {
    const onReviewSubmit = jest.fn()
    const { getByTestId } = render(
      <table>
        <tbody>
          <TableRow goal={goal} onReviewSubmit={onReviewSubmit} />
        </tbody>
      </table>,
      {
        wrapper: TestsWrapper
      }
    )

    fireEvent.click(getByTestId("reject"))
    expect(onReviewSubmit).toBeCalledTimes(1)
    expect(onReviewSubmit).toBeCalledWith(false)
  })

  test("renders table row with status Approved", () => {
    goal.status = "APPROVED"
    const { getByTestId, queryByText } = render(
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
    expect(queryByText("View")).toBeInTheDocument()
    expect(queryByText("Approve")).not.toBeInTheDocument()
    expect(queryByText("Reject")).not.toBeInTheDocument()
  })

  test("renders table row with status Rejected", () => {
    goal.status = "REJECTED"
    const { getByTestId, queryByText } = render(
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
    expect(queryByText("View")).toBeInTheDocument()
    expect(queryByText("Approve")).not.toBeInTheDocument()
    expect(queryByText("Reject")).not.toBeInTheDocument()
  })
})
