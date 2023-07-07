//Calcular promedio de strings

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(array) {
  let palabrasMixed = 0;
  array.forEach((suma) => {
    if (typeof suma === "string") {
      palabrasMixed++;
    }
  });
  return palabrasMixed;
}
console.log(averageWord(mixedElements));
