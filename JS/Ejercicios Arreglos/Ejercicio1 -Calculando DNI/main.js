// Escribe aquí tu codigo Javascript
function letraDni(){
	var dni = parseInt(prompt("Ingrese DNI")).toPrecision(8);
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var letra = letras[dni%23];
	if(dni.length===8){
		var letraUsuario = prompt("Ingrese letra del DNI").toUpperCase();
		if(letraUsuario===letra){
			alert("DNI y letra son correctos.");
		}else{
			alert("Letra indicada incorrecta.")
		}
	}else{
		alert("Numero proporcionado no es valido.")
	};
};

letraDni();

