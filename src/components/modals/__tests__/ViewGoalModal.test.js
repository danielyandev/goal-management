import { fireEvent, render } from "@testing-library/react"
import ViewGoalModal from "../ViewGoalModal"

describe("ViewGoalModal component", () => {
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

  test("does not render modal without a goal", () => {
    const { queryByTestId } = render(
      <ViewGoalModal goal={null} onClose={jest.fn()} />
    )
    expect(queryByTestId("view-goal-modal")).not.toBeInTheDocument()
  })

  test("renders modal with the goal", () => {
    const { queryByText, queryByTestId } = render(
      <ViewGoalModal goal={goal} onClose={jest.fn()} />
    )
    expect(queryByTestId("view-goal-modal")).toBeInTheDocument()

    expect(queryByText(goal.title)).toBeInTheDocument()
    expect(queryByText(goal.description)).toBeInTheDocument()
    expect(queryByText(goal.owner.fullName)).toBeInTheDocument()
    expect(queryByText(goal.reviewer.fullName)).toBeInTheDocument()
    expect(queryByTestId("status")).toHaveTextContent("Pending")
  })

  test("onClose callback is called", () => {
    const onClose = jest.fn()
    const { queryByTestId } = render(
      <ViewGoalModal goal={goal} onClose={onClose} />
    )
    expect(queryByTestId("view-goal-modal")).toBeInTheDocument()
    fireEvent.click(queryByTestId("close-button"))
    expect(onClose).toBeCalledTimes(1)
  })
})
