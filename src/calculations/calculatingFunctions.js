export function calculateOneRepMax(weight, reps) {
  // weight has to be in kilograms
  const result = weight * (36 / (37 - reps));
  return result;
}


console.log(calculateOneRepMax(200,5))