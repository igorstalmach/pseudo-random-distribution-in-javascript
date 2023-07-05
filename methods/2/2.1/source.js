import { arrayToCSV } from "../../../utils/arrayToCSV.js";

const randu = (seed) => {
  // Constants.
  const a = 65539; // Multiplier.
  const c = 0; // Increment.
  const m = Math.pow(2, 31); // Modulus.

  let currentSeed = seed;

  // Generate a pseudorandom number between 0 and 1.
  function next() {
    currentSeed = (a * currentSeed + c) % m;
    return currentSeed / m;
  }

  return {
    next,
  };
};

const generator = randu(12345);
const randomNumbers = [];

for (let i = 0; i < 1000000; i++) {
  randomNumbers.push(generator.next());
}

arrayToCSV(randomNumbers, "result.csv");
