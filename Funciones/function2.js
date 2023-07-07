//Buscar la palabra más larga
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let nombreMas = param[0];
    for(i = 0; i < param.length; i++) {
        if(param[i].length > nombreMas.length){
        nombreMas = param[i];
        }
    }
  return nombreMas;
}
console.log(findLongestWord(avengers));