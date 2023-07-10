//Condicionales avanzados

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach( alumno =>{
	let estaAprobado = 0;
	alumno.T1 && estaAprobado ++;// el &&, si se cumple lo de la izquierda, hace lo de la derecha
	alumno.T2 ? estaAprobado ++ : undefined // es lo mismo que el de arriba
	if(alumno.T3) estaAprobado ++;// es lo mismo que el de arriba, si el if va en la misma linea, no hacen falta las {}
	console.log(alumno.name, estaAprobado >= 2 ? true : false)
  })