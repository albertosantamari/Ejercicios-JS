//Calcular promedio de strings

const mixedElements = [
  6,
  1,
  "Rayo",
  "casa",
  1,
  "vallecano",
  "10",
  "upgrade",
  8,
  "hub",
];
function averageWord(array) {
  let totalLength = 0;
  let palabrasMixed = 0;
  array.forEach((suma) => {
    if (typeof suma === "string") {
      totalLength += suma.length;
      palabrasMixed++;
    }
  });
  return palabrasMixed / totalLength;
}
console.log(averageWord(mixedElements));
