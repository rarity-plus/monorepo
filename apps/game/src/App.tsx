import React from "react";
import Checkbox from "@components/UI/Checkbox";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [testState, setTestState] = useState(false);
  const [nLabel, setNLabel] = useState("");

  useEffect(() => {
    console.log(testState);

    setNLabel(`${testState}`);
  }, [testState]);

  return (
    <div>
      {" "}
      <Checkbox label={nLabel} selected={true} onChange={setTestState} />
    </div>
  );
}

export default App;
