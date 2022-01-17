import React from "react";
import Checkbox from "@components/UI/Checkbox";
import { useState } from "react";
import { useEffect } from "react";
import Typer from "@components/UI/Typer";

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
      <Checkbox label={nLabel} selected={true} onChange={setTestState} />
      <Typer text={["Hello World"]} className=" font-bold text-red-700" />
    </div>
  );
}

export default App;
