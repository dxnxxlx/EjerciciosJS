// Escribe aquí tu codigo Javascript
function suma(){
	var numerosSuma=[];
	var resultado=0;
	alert("Vamos a sumar 10 numeros. Ingresalos, pueden ser del largo que desees!");
	for (var i = 1; i <=10; i++) {
			var nuevoNumero=parseInt(prompt("Ingresa el "+i+"° numero"));
			numerosSuma.push(nuevoNumero)
			resultado+=nuevoNumero;

	}
	return resultado+"\nY los 10 números son: "+numerosSuma;
};

alert("La suma es: "+suma());
