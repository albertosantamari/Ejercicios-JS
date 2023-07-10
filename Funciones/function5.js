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
  //en cada vuelta del foreach, array tendra el valor de la siguiente posicion (6, luego 1, etc)
  let totalLength = 0; //aqui se suma el total de letras
  let palabrasMixed = 0; //aqui se suma el total de palabras
  array.forEach((suma) => {
    //recorremos el array
    if (typeof suma === "string") {
      //si es un string
      totalLength += suma.length; //sumamos eltotal de letras de cada string a totalLength
      palabrasMixed++; //sumamos el total de string a palabrasMixed
    }
  });
  return palabrasMixed / totalLength; //dividimos el total de letras(totalLength) entre el total dde palabras(palabrasMixed) y lo retornamos
}
console.log(averageWord(mixedElements)); //llamo a la funcion averageWord, haciendo referencia al array mixedElements.
