import { act, fireEvent, render } from "@testing-library/react"
import CreateGoal from "../CreateGoal"
import TestsWrapper from "../../../helpers/TestsWrapper"
import * as goals from "../../../api/goals"

jest.spyOn(goals, "createGoal").mockResolvedValueOnce({})
jest.mock("axios", () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [{ username: "testuser", fullName: "Test User" }]
      })
    }
  }
})
describe("CreateGoal component", () => {
  test("renders component", async () => {
    let queryByText, getByTestId
    await act(() => {
      const res = render(<CreateGoal />, {
        wrapper: TestsWrapper
      })
      getByTestId = res.getByTestId
      queryByText = res.queryByText
    })
    expect(queryByText("Create goal")).toBeInTheDocument()
    expect(getByTestId("title-field")).toBeInTheDocument()
    expect(getByTestId("description-field")).toBeInTheDocument()
    expect(getByTestId("reviewer-field")).toBeInTheDocument()
    expect(getByTestId("create-button")).toBeInTheDocument()
  })

  test("request is not sent on create when validation is not passed", async () => {
    let getByTestId, queryByTestId
    await act(() => {
      const res = render(<CreateGoal />, {
        wrapper: TestsWrapper
      })
      getByTestId = res.getByTestId
      queryByTestId = res.queryByTestId
    })

    fireEvent.click(getByTestId("create-button"))

    expect(goals.createGoal).toBeCalledTimes(0)
    expect(queryByTestId("errors")).toBeInTheDocument()
  })
})
