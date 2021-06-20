import { calculateOneRepMax } from "./calculations/calculatingFunctions";
import InputField from "./components/InputField";
import "./App.css";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [oneRepMax, setOneRepMax] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [trainingType, setTrainingType] = useState(null);

  const submittedDataHandler = (data) => {
    const { weight, reps, repsInReserve, trainingType } = data;
    const totalReps = +reps + +repsInReserve;
    const result = calculateOneRepMax(weight, totalReps).toFixed();

    setOneRepMax(result);
    setTrainingType(trainingType);
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Karls Warmup App</h1>
      <hr />
      <InputField submitData={submittedDataHandler} />
      <hr />
      {submitted && (
        <Results oneRepMax={oneRepMax} trainingType={trainingType} />
      )}
    </div>
  );
}

export default App;
