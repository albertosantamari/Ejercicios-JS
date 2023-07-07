//Calcular promedio de strings

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(array) {
  let valorBucle = 0;
  let numerosMixed = 0;
  array.forEach((suma) => {
    if (typeof suma === "string") {
      valorBucle += suma.length;
      numerosMixed++;
    }
  });
  if (numerosMixed === 0) {
    return 0;
  }
  return valorBucle / numerosMixed;
}
console.log(averageWord(mixedElements));
