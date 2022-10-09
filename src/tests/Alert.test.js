import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("Displays an error message", () => {
    render(<Alert message="Error!" />);

    expect(screen.getByText(/Error/).textContent).toBe("Error!");
  });

  it("Displays a success message", () => {
    render(<Alert message="Success!!!" success />);
    expect(screen.getByText(/Success/).textContent).toBe("Success!!!");
  });

  it("Does not render when message prop is empty", () => {
    const { asFragment } = render(<Alert message="" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays and has the correct class when success message passed", () => {
    const { asFragment } = render(<Alert message="Property Added" success />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays and has the correct class when error message passed", () => {
    const { asFragment } = render(
      <Alert message="Server Error. Please try again later." />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
