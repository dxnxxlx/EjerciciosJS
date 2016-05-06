// Escribe aquí tu codigo Javascript
function listaDeNombres(){
	var nombres = ["Maia", "Victoria", "Desiree", "Luna"]
	var cantInvitados = prompt("Ya tienes 4 invitados en tu lista ¿Cuantos te gustaría que fueran en total?");
	for (var i = 5; i <=cantInvitados; i++) {
		var invitadoNuevo=prompt("Ingresa un nuevo invitado");
		nombres.push(invitadoNuevo)
	}
	return nombres;
}

alert("Esta es la lista final: " + listaDeNombres());


