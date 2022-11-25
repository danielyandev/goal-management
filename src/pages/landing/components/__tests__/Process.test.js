import { render } from "@testing-library/react"
import TestsWrapper from "../../../../helpers/TestsWrapper"
import Process from "../Process"

describe("Process component", () => {
  test("renders Process component with correct prop values", () => {
    const props = {
      step: 1,
      imageUrl: "/test",
      title: "test title",
      description: "test description"
    }

    const { getByTestId } = render(<Process {...props} />, {
      wrapper: TestsWrapper
    })

    const step = getByTestId("process-step")
    const title = getByTestId("process-title")
    const description = getByTestId("process-description")
    const imageUrl = getByTestId("process-image-url")

    expect(step).toHaveTextContent(props.step)
    expect(title).toHaveTextContent(props.title)
    expect(description).toHaveTextContent(props.description)
    expect(imageUrl.src).toContain(props.imageUrl)
  })

  test("renders Process component with empty values", () => {
    const { getByTestId } = render(<Process />, {
      wrapper: TestsWrapper
    })

    const step = getByTestId("process-step")
    const title = getByTestId("process-title")
    const description = getByTestId("process-description")
    const imageUrl = getByTestId("process-image-url")

    expect(step).toBeEmptyDOMElement()
    expect(title).toBeEmptyDOMElement()
    expect(description).toBeEmptyDOMElement()
    expect(imageUrl.src).toBe("")
  })
})
