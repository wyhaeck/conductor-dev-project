import { useCallback } from "react";
import "./index.css";

export default function RadioButtonGroup({ selectedValue, options, onChange }) {
  // handles a button click to make it the new selected button
  const handleClick = useCallback(
    (value) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <>
      {/* creates a button for each option */}
      {options.map((option) => {
        return (
          <div
            style={{
              padding: 16,
              margin: 2,
            }}
            key={option.label}
            // className decides styles based on selected button
            className={
              selectedValue === option.value ? "selectedButton" : "normalButton"
            }
            onClick={() => handleClick(option.value)}
          >
            {option.label}
          </div>
        );
      })}
    </>
  );
}
