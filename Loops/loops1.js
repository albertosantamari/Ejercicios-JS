//Usa includes

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
let lista = [];
products.forEach(prenda => {
    let palabrasDePrenda = prenda.split(" ");
    palabrasDePrenda.includes('Camiseta') && lista.push(prenda);
});

console.log(lista)