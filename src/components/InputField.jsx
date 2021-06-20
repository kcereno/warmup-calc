import { useState } from "react";

export default function InputField(props) {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [repsInReserve, setrepsInReserve] = useState("");
  const [trainingType, setTrainingType] = useState(null)

  const weightChangeHandler = (e) => {
    setWeight(e.target.value);
  };
  const repsChangeHandler = (e) => {
    setReps(e.target.value);
  };
  const repsInReserveChangeHandler = (e) => {
    setrepsInReserve(e.target.value);
  };

  const radioClickHandler = (e) => {
    const trainingType = e.target.value;
    setTrainingType(trainingType)
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (weight === "" || reps === "" || repsInReserve === "") {
      return;
    }

    props.submitData({
      weight,
      reps,
      repsInReserve,
      trainingType

    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="weight">Working / Top Set Weight: </label>
      <input
        type="number"
        htmlFor="weight"
        onChange={weightChangeHandler}
        value={weight}
      />
      <br />
      <label htmlFor="reps">Reps: </label>
      <input
        type="number"
        htmlFor="reps"
        onChange={repsChangeHandler}
        value={reps}
      />
      <br />
      <label htmlFor="repsInReserve">Reps In Reserve: </label>
      <input
        type="number"
        htmlFor="weight"
        onChange={repsInReserveChangeHandler}
        value={repsInReserve}
      />
      <br />
      <label>Training Type:</label>
      <input
        type="radio"
        name="warmupType"
        value="strength"
        onClick={radioClickHandler}
      />
      <label htmlFor="strength">Strength</label>
      <input
        type="radio"
        name="warmupType"
        value="hypertrophy"
        onClick={radioClickHandler}
      />
      <label htmlFor="hypertrophy">Hypertrophy</label>
      <br />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
