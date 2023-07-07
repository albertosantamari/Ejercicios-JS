//Calcular la suma
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(array) {
    let suma = 0;
    array.forEach(
        numero=>{
          suma += numero
        }
    )
   return suma;
}
console.log(sumAll(numbers));