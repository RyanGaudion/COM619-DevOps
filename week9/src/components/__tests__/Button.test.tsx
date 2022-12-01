import {fireEvent, render, screen} from "@testing-library/react";
import Button from "../Button";
// we can organise tests into describe blocks
describe("Button", () => {
  // this tests the component renders 	
  it("renders", () => {
    render(<Button label="Click Me" onClick={() => "clicked"} />);
    // like Cypress we can grab elements and assert they are in teh document
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("displays a the label", () => {
    render(<Button label="Click Me" onClick={() => "clicked"} />);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });

  /**
   * I don't really like these sorts of tests.
   * You'll often see them, and they effectively
   * test the implementation of react.
   */

  it("handles a click event", () => {
    render(<Button label="Click Me" onClick={() => "clicked"} />);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });
});

/**
 * This is slightly better. We are now testing wider functions
 */
it("handles a click event", () => {
  const handleClickMock = jest.fn();
  render(<Button label="Click Me" onClick={handleClickMock} />);
  fireEvent.click(screen.getByText("Click Me"));
  expect(handleClickMock.mock.calls.length).toBe(1);
});