import { squares } from "squares-rng";
import { arrayToCSV } from "../../../utils/arrayToCSV.js";

const randomNumbers = [];

// Divide by 0x1_0000_0000 to get a number between 0 and 1.
for (let i = 1; i < 1000001; i++) {
  randomNumbers.push(squares(i) / 0x1_0000_0000);
}

arrayToCSV(randomNumbers, "result.csv");
