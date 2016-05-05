//Escribe aquí tu código
function mayorMenor(){
	var a = parseInt(prompt("Ingresa el primer numero"));
	var b = parseInt(prompt("Ingresa el segundo numero"));
	if (a>b) {
		document.write("a es mayor");
	}else{
		document.write("b es mayor");	
	}
}
mayorMenor();