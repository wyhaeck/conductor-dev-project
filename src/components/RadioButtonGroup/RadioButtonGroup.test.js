import { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RadioButtonGroup from "./index";

// setting options to be used in tests
const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

test("component renders without errors", () => {
  render(
    <RadioButtonGroup
      options={options}
      onChange={() => {
        return null;
      }}
      selectedValue={null}
    />
  );

  // checks to make sure component is being rendered
  expect(screen.getByText("Option 1")).toBeInTheDocument();
});

test("options are correctly displayed", () => {
  render(
    <RadioButtonGroup
      options={options}
      onChange={() => {
        return null;
      }}
      selectedValue={null}
    />
  );

  // checks to make sure all options are being displayed
  options.map((option) => {
    expect(screen.getByText(option.label)).toBeInTheDocument();
    return null;
  });
});

test("onChange callback is called correctly when an option is clicked", () => {
  // wraps the button so that selected button can be changed within the test
  const Wrapper = () => {
    const [selectedValue, setValue] = useState();
    return (
      <RadioButtonGroup
        options={options}
        onChange={setValue}
        selectedValue={selectedValue}
      />
    );
  };
  render(<Wrapper />);
  options.map((option) => {
    expect(screen.getByText(option.label)).toBeInTheDocument();
    return null;
  });

  // makes sure no buttons are currently selected by default
  expect(screen.getByText("Option 1")).toHaveClass("normalButton");
  expect(screen.getByText("Option 2")).toHaveClass("normalButton");
  expect(screen.getByText("Option 3")).toHaveClass("normalButton");

  // clicks option 2 to be selected button
  fireEvent.click(screen.getByText("Option 2"));
  expect(screen.getByText("Option 1")).toHaveClass("normalButton");
  expect(screen.getByText("Option 2")).toHaveClass("selectedButton");
  expect(screen.getByText("Option 3")).toHaveClass("normalButton");

  // clicks option 1 to be selected button
  fireEvent.click(screen.getByText("Option 1"));
  expect(screen.getByText("Option 1")).toHaveClass("selectedButton");
  expect(screen.getByText("Option 2")).toHaveClass("normalButton");
  expect(screen.getByText("Option 3")).toHaveClass("normalButton");

  // clicks option 3 to be selected button
  fireEvent.click(screen.getByText("Option 3"));
  expect(screen.getByText("Option 1")).toHaveClass("normalButton");
  expect(screen.getByText("Option 2")).toHaveClass("normalButton");
  expect(screen.getByText("Option 3")).toHaveClass("selectedButton");
});
