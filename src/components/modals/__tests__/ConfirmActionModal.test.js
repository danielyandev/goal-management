import { fireEvent, render } from "@testing-library/react"
import ConfirmActionModal from "../ConfirmActionModal"

describe("ConfirmActionModal component", () => {
  const message = "confirm your action"
  test("renders modal with correct message", () => {
    const { queryByText } = render(
      <ConfirmActionModal
        message={message}
        onConfirm={jest.fn()}
        onClose={jest.fn()}
      />
    )
    expect(queryByText(message)).toBeInTheDocument()
  })

  test("does not render modal without a message", () => {
    const { queryByTestId } = render(
      <ConfirmActionModal
        message={""}
        onConfirm={jest.fn()}
        onClose={jest.fn()}
      />
    )
    expect(queryByTestId("confirm-moda")).not.toBeInTheDocument()
  })

  test("onConfirm callback is called", () => {
    const onConfirm = jest.fn()
    const { getByTestId } = render(
      <ConfirmActionModal
        message={message}
        onConfirm={onConfirm}
        onClose={jest.fn()}
      />
    )
    fireEvent.click(getByTestId("confirm-button"))
    expect(onConfirm).toBeCalledTimes(1)
  })

  test("onClose callback is called", () => {
    const onClose = jest.fn()
    const { getByTestId } = render(
      <ConfirmActionModal
        message={message}
        onConfirm={jest.fn()}
        onClose={onClose}
      />
    )
    fireEvent.click(getByTestId("cancel-button"))
    expect(onClose).toBeCalledTimes(1)
  })
})
