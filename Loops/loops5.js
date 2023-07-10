//Probando For

const placesToTravel = [
    {
      id: 5, name: 'Japan'
    }, 
    {
      id: 11, name: 'Venecia'
    }, 
    {
      id: 23, name: 'Murcia'
    }, 
    {
      id: 40, name: 'Santander'
    }, 
    {
      id: 44, name: 'Filipinas'
    }, 
    {
      id: 59, name: 'Madagascar'
    }
    ]
    let datosBorrados = [];
    for(lista of placesToTravel){
      if(![11, 40].includes(lista.id)){
        datosBorrados.push(lista)
    }
    }
      console.log(datosBorrados);