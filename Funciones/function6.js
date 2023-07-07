//Valores únicos

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array) {
    let anidarDatos = [];
    array.forEach( comDatos =>{
      if (!anidarDatos.includes(comDatos)){
        anidarDatos.push(comDatos);
      }
    }
  );
    return anidarDatos;
  }
  console.log(removeDuplicates(duplicates));