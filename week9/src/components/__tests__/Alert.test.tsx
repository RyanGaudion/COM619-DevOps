import {render, screen} from "@testing-library/react";
import Alert from "../Alert";
// we can organise tests into describe blocks
describe("Alert", () => {
  // this tests the component renders 	
  it("renders", () => {
    render(<Alert label="Error" variant="warning" fade={true} />);
    expect(screen.getByTestId("alert")).toBeInTheDocument();
  });

  it("renders", () => {
    render(<Alert label="Error" variant="warning" fade={true} />);
    expect(screen.getByTestId("alert")).toHaveTextContent("Error");
  });
});
