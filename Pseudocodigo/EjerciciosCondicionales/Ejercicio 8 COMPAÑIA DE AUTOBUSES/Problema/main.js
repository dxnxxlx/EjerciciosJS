//Escribe aquí tu código
var numero_personas = 20;
var tipo_bus = 'A';
var kilometros = 300;

var costo_bus = null;
costo_total = null;

/*swift(tipo_bus){
	case 'A':
		costo_bus = 2.0
		break;
	case 'B':
		costo_bus = 2.5
		break;
	case 'C':
		costo_bus = 3.0
		break;
}


if (numero_personas <=20){
	numero_personas = 20;
}

costo_total = numero_personas*costo_bus*kilometros;
costo_por_persona = costo_total/numero_personas */



function calcular_costo_bus(tipo_bus){
	//esta funcion tiene que ver son el swift que se hico antes
	var costo_bus = null;
	switch(tipo_bus) {
		case 'A':
			costo_bus = 2.0
			break;
		case 'B':
			costo_bus = 2.5
			break;
		case 'C':
			costo_bus = 3.0
			break;
	}
	return costo_bus;
}

function ajustar_numero_personas(numero_personas) {
	if (numero_personas <=20){
		numero_personas = 20;
	}
	return numero_personas;
}

function calcular_costo_total(kilometros, tipo_bus, numero_personas) {
	var costo_bus = calcular_costo_bus(tipo_bus);
	var numero_real_personas = ajustar_numero_personas(numero_personas);

	//aqui se hace el calculo del costo total
	costo_total = numero_personas*costo_bus*kilometros;
}

function calcular_costo_persona(costo_total, numero_personas) {
	return costo_total/numero_personas;
}

function calcular(kilometros, tipo_bus, numero_personas) {
	var costo_total = calcular_costo_total(kilometros, tipo_bus, numero_personas);
	var costo_persona = calcular_costo_persona = (costo_total, numero_personas)

	console.log("Datos")
	console.log("costo total: " + costo_total);
	console.log("costo persona: " + costo_persona);//aca podria ponerse de frente todo lo que contiene la var costo_persona
}

calcular(300, "A", 15);
calcular(200, "B", 25);
calcular(1024, "C", 45);
calcular(300, "D", 1);


//primero, llamar una funcion, luego crearla arriba
/*var costo_total = calcular_costo_total(300, "A", 15);
var costo_persona = calcular_costo_persona = (costo_total, 15)

console.log(costo_total);
console.log(costo_persona);

""8*/