//Probando For...in

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let datosAlien in alien){
    console.log(datosAlien + ":" + " " + alien[datosAlien]);
}