export default function Results(props) {
  const { oneRepMax } = props;

  const clickHandler = (e) => {
    const warmupType = e.target.value;
    props.onRadioClick(warmupType)

  };

  const strengthRange = `${(oneRepMax * 0.9).toFixed()} - ${oneRepMax} lbs`;
  const hypertrophicRange = `${(oneRepMax * 0.6).toFixed()} - ${(
    oneRepMax * 0.8
  ).toFixed()} lbs`;

  return (
    <>
      <div>
        <h2>Theoretical One Rep Max: {oneRepMax} lbs </h2>{" "}
      </div>
      <div>Strength Range (90-100%): {strengthRange}</div>
      <div>Hypertophic Range (60-80%): {hypertrophicRange}</div>
      <form>
        <h4>Warmup type?</h4>
        <label htmlFor="strength">Strength</label>
        <input
          type="radio"
          name="warmupType"
          value="strength"
          onClick={clickHandler}
        />
        <label htmlFor="hypertrophy">Hypertrophy</label>
        <input
          type="radio"
          name="warmupType"
          value="hypertrophy"
          onClick={clickHandler}
        />
      </form>
    </>
  );
}
