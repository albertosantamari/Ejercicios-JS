//Contador de repeticiones
//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que
//lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(array) {
    let palabRepetidas = {};
    array.forEach(palabra => {
      if(palabRepetidas[palabra]) {
        palabRepetidas[palabra] ++
      } else {
        palabRepetidas[palabra] = 1
      }
    });
    return palabRepetidas;
  }
  console.log(repeatCounter(counterWords));
    