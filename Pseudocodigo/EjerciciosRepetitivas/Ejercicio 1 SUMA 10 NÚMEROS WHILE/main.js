// Este codigo ha sido generado por el modulo psexport 20160408-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function suma10numeros() {
	var n, suma, x;
	x = 1;
	suma = 0;
	while (x<=10) {
		document.write(("N�mero "),x,'<BR/>');
		n = Number(prompt());
		suma = suma+n;
		x = x+1;
	}
	document.write(suma,'<BR/>');
}

