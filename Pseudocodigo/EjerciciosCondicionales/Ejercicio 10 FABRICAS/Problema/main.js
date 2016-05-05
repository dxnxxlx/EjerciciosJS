//Escribe aquí tu código
function cacularManoObra(materiaPrima, tipoProducto) {
	var costoManoObra = null
	if(tipoProducto === 3 || tipoProducto === 4) {
		costoManoObra = 0.75 * materiaPrima;
	}
	if(tipoProducto === 1 || tipoProducto === 5) {
		costoManoObra = 0.80 * materiaPrima;
	}
	if(tipoProducto === 2 || tipoProducto === 6) {
		costoManoObra = 0.85 * materiaPrima;
	}	
	return costoManoObra;

}

function calcularCostoProduccion(materiaPrima, tipoProducto) {
	var costoManoObra = null;
	if(tipoProducto)
}