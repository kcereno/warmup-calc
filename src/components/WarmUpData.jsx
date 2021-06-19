export default function WarmUpData(props) {
  const { oneRepMax, warmupType } = props;

  const threeRepMax = oneRepMax * 0.93;

  const sixRepMax = oneRepMax * 0.85;

  const tenRepMax = oneRepMax * 0.75;

  const strengthWarmup = (
    <div>
      <h2>Strength Warmup</h2>
      <h3>
        6{">"}4{">"}2
      </h3>
      <h4>50% 6RM x 6 reps: {(sixRepMax * 0.5).toFixed()} lbs</h4>
      <h4>70% 6RM x 4 reps: {(sixRepMax * 0.7).toFixed()} lbs</h4>
      <h4>90% 6RM x 2 reps: {(sixRepMax * 0.9).toFixed()} lbs</h4>
      <h3>
        4{">"}3{">"}2{">"}1
      </h3>
      <h4>50% 3RM x 4 reps: {(threeRepMax * 0.5).toFixed()} lbs</h4>
      <h4>75% 3RM x 3 reps: {(threeRepMax * 0.7).toFixed()} lbs</h4>
      <h4>90% 3RM x 2 reps: {(threeRepMax * 0.9).toFixed()} lbs</h4>
      <h4>95% 3RM x 1 reps: {(threeRepMax * 0.95).toFixed()} lbs</h4>
    </div>
  );

  const hypertrophyWarmup = (
    <div>
      <h2>Hypertrophic Warmup</h2>
      <h3>Standard</h3>
      <h4>50% 10RM x 6 reps: {(tenRepMax * 0.5).toFixed()} lbs</h4>
      <h4>80% 10RM x 4 reps: {(tenRepMax * 0.8).toFixed()} lbs</h4>
      <h3>Nueral Preload</h3>
      <h4>60% 10RM x 6 reps: {(tenRepMax * 0.6).toFixed()} lbs</h4>
      <h4>90% 10RM x 3 reps: {(tenRepMax * 0.9).toFixed()} lbs</h4>
      <h4>130% 10RM x 1 reps: {(tenRepMax * 1.3).toFixed()} lbs</h4>
    </div>
  );



  return <>
      {warmupType === 'strength' ? strengthWarmup: hypertrophyWarmup}
  </>;
}
