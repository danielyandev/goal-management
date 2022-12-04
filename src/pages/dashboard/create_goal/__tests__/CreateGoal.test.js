import { fireEvent, render } from "@testing-library/react"
import CreateGoal from "../CreateGoal"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import * as goals from "../../../../api/goals"

jest.spyOn(goals, "createGoal").mockResolvedValueOnce({})

describe("CreateGoal component", () => {
  test("renders component", () => {
    const { queryByText, getByTestId } = render(<CreateGoal />, {
      wrapper: TestsWrapper
    })
    expect(queryByText("Create goal")).toBeInTheDocument()
    expect(getByTestId("title-field")).toBeInTheDocument()
    expect(getByTestId("description-field")).toBeInTheDocument()
    expect(getByTestId("reviewer-field")).toBeInTheDocument()
    expect(getByTestId("create-button")).toBeInTheDocument()
  })

  test("request is not sent on create when validation is not passed", () => {
    const { getByTestId, queryByTestId } = render(<CreateGoal />, {
      wrapper: TestsWrapper
    })

    fireEvent.click(getByTestId("create-button"))
    expect(goals.createGoal).toBeCalledTimes(0)
    expect(queryByTestId("errors")).toBeInTheDocument()
  })
})
