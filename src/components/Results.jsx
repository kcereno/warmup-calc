import WarmUpData from "./WarmUpData";

export default function Results(props) {
  const { oneRepMax, trainingType } = props;

  const strengthRange = `${(oneRepMax * 0.9).toFixed()} - ${oneRepMax} lbs`;
  const hypertrophicRange = `${(oneRepMax * 0.6).toFixed()} - ${(
    oneRepMax * 0.8
  ).toFixed()} lbs`;

  const range =
    trainingType === "hypertrophy" ? (
      <div>Hypertophy Range (60-80%): {hypertrophicRange}</div>
    ) : (
      <div>Strength Range (90-100%): {strengthRange}</div>
    );

  console.log(trainingType);
  return (
    <>
      <div>
        <h2>Theoretical One Rep Max: {oneRepMax} lbs </h2>{" "}
      </div>
      {range}

      <WarmUpData trainingType={trainingType} oneRepMax={oneRepMax} />
    </>
  );
}
