import { writeFile } from "fs";

export const arrayToCSV = (arr, filename) => {
  const csvData = "Random Numbers\n" + arr.join("\n");

  writeFile(filename, csvData, (err) => {
    if (err) {
      console.error("Error saving CSV file:", err);
      return;
    }
    console.log("CSV file saved successfully.");
  });
};
