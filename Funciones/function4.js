//Calcular el promedio:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
    let cuenta = 0;
    array.forEach(
        suma=>{
            cuenta += suma;
        }
    )
  let promedio = cuenta / array.length;
  return promedio;
}
console.log(average(numbers));