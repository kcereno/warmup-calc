import {
  calculateLoadOut,
  calculateOneRepMax,
} from "./calculations/calculatingFunctions";
import InputField from "./components/InputField";
import "./App.css";
import { useState } from "react";
import Results from "./components/Results";
import WarmUpData from "./components/WarmUpData";

function App() {
  const [oneRepMax, setOneRepMax] = useState(0);
  const [submitted, setSubmitted]  = useState(false)

  const submitDataHandler = (data) => {
    const { weight, reps, repsInReserve } = data;

    const totalReps = +reps + +repsInReserve;

    const result = calculateOneRepMax(weight, totalReps).toFixed();
    setOneRepMax(result);
    setSubmitted(true)
  };

  const content = (
    <>
      <Results oneRepMax={oneRepMax} />
      <hr />
      <WarmUpData oneRepMax={oneRepMax} />
    </>
  );

  return (
    <div className="App">
      <h1>Karls Warmup App</h1>
      <hr />
      <InputField submitData={submitDataHandler} />
      <hr />
      {submitted && content}
    </div>
  );
}

export default App;
