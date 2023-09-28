// Coding challenge #35. Create a function to convert a CSV text to a “bi-dimensional” array

function csvToBiDimensionalArray(csvText, delimiter = ',') {
  const lines = csvText.trim().split('\n');

  const result = [];

  for (const line of lines) {
    const values = line.split(delimiter);

    result.push(values);
  }

  return result;
}

let data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

const result = csvToBiDimensionalArray(data, ';');

console.log(result);
