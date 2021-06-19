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
  const [submitted, setSubmitted] = useState(false);
  const [warmupType, setWarmupType] = useState(null);

  const submitDataHandler = (data) => {
    const { weight, reps, repsInReserve } = data;
    const totalReps = +reps + +repsInReserve;
    const result = calculateOneRepMax(weight, totalReps).toFixed();

    setOneRepMax(result);
    setSubmitted(true);
  };

  const getWarmupType = (type) => {
    setWarmupType(type);
  };

  const content = (
    <>
      <Results oneRepMax={oneRepMax} onRadioClick={getWarmupType} />
      <hr />
      <WarmUpData oneRepMax={oneRepMax} warmupType={warmupType} />
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
