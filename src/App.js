// This file is simply meant for rendering your RadioButtonGroup component.
// It is ok to edit this if desired, but it is intended that you should not
// need to edit this file to complete the assignment

import { useState } from "react";
import RadioButtonGroup from "./components/RadioButtonGroup";

function App() {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RadioButtonGroup
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  );
}

export default App;
