import { arrayToCSV } from "../../utils/arrayToCSV.js";

const getRandomNumbers = (count) => Array.from({length: count}, () => Math.random());

const randomNumbers = getRandomNumbers(1000000);
arrayToCSV(randomNumbers, 'result.csv');
