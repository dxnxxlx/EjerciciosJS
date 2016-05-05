Algoritmo Langosta
	Escribir "Ingrese numero de personas"
	Leer numeroPersonas
	Si numeroPersonas<= 200 Entonces
		costoTotal <- numeroPersonas*95
		Escribir "Costo por persona: 95"
		Escribir "Costo total: " costoTotal
	Sino
		Si numeroPersonas>200 Y numeroPersonas<= 300 Entonces
			costoTotal <- numeroPersonas*85
			Escribir "Costo por persona: 85"
			Escribir "Costo total: " costoTotal
		Sino
			costoTotal <- numeroPersonas*75
			Escribir "Costo por persona: 75"
			Escribir "Costo total: " costoTotal
		Fin Si
	Fin Si
FinAlgoritmo
