//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

let borraUltimo = rickAndMortyCharacters.pop();
let ultimo = rickAndMortyCharacters[rickAndMortyCharacters.length -1];
console.log(rickAndMortyCharacters[0], ultimo);