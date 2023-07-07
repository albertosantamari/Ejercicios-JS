//Buscador de nombres

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array) {
    let busqueda = array.includes('Natasha');
    return busqueda;
  }
  console.log(finderName(nameFinder));