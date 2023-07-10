//Buscador de nombres

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(array, name) {
  let busqueda = array.includes(name);
  console.log(array);
  return busqueda;
}
console.log(finderName(nameFinder, "Peter"));
