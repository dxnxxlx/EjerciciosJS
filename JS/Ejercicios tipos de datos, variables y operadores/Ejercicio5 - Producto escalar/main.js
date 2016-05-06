// Escribe aquí tu codigo Javascript
function escalarVectores(){
	var a = parseInt(prompt("Para sacar el producto escalar de (a,b) y (c,d) ingresemos los datos primero.\n Ingresa 'a':" ));
	var b = parseInt(prompt("Para sacar el producto escalar de (a,b) y (c,d) ingresemos los datos primero.\n Ingresa 'b':" ));
	var c = parseInt(prompt("Para sacar el producto escalar de (a,b) y (c,d) ingresemos los datos primero.\n Ingresa 'c':" ));
	var d = parseInt(prompt("Para sacar el producto escalar de (a,b) y (c,d) ingresemos los datos primero.\n Ingresa 'd':" ));
	var resultado = (a*b) + (c*d);
	alert("El producto escalar de los vectores:\n ("+ a +","+ b+") y ("+ c+","+ d+") es " + resultado);
};

escalarVectores();
