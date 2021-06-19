import { useState } from "react";

export default function InputField(props) {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [repsInReserve, setrepsInReserve] = useState("");

  const weightChangeHandler = (e) => {
    setWeight(e.target.value);
  };
  const repsChangeHandler = (e) => {
    setReps(e.target.value);
  };
  const repsInReserveChangeHandler = (e) => {
    setrepsInReserve(e.target.value);
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
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="weight">Working / Top Set Weight: </label>
        <input
          type="number"
          htmlFor="weight"
          onChange={weightChangeHandler}
          value={weight}
        />
      </div>
      <div>
        <label htmlFor="reps">Reps: </label>
        <input
          type="number"
          htmlFor="reps"
          onChange={repsChangeHandler}
          value={reps}
        />
      </div>
      <div>
        <label htmlFor="repsInReserve">Reps In Reserve: </label>
        <input
          type="number"
          htmlFor="weight"
          onChange={repsInReserveChangeHandler}
          value={repsInReserve}
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
