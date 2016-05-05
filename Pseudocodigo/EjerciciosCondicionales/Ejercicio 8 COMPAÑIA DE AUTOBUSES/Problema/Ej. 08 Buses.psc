Algoritmo viajeEscolar
	Definir bus Como Caracter
	Escribir "Elija un tipo de bus: A, B o C"
	leer bus
	costoKilometro <- 0
	Segun bus Hacer
		"a"  O "A":
			costoKilometro <-2
		"b" O "B":
			costoKilometro <-2.5
		"c" O "C":
			costoKilometro <-3
		De Otro Modo:
			Escribir "Ingresa un tipo de bus disponible: A, B o C"
			Leer bus
			Segun bus Hacer
				"a"  O "A":
					costoKilometro <-2
				"b" O "B":
					costoKilometro <-2.5
				"c" O "C":
					costoKilometro <-3
			FinSegun
	FinSegun
	Escribir "Costo por kilometro: " costoKilometro
	Definir numPersonas como Entero 
	Escribir "Ingresa número de personas"
	Leer numPersonas
	Si numPersonas < 20 Entonces
		numPersonas = 20
		Escribir " Calculo en base a un minimo de 20 personas"
	Sino
		Escribir "Numero de personas: " numPersonas
	Fin Si
	Escribir "Ingresa numero de kilometros a recorrer"
	Leer kilometros
	
	costoTotal<- kilometros*numPersonas*costoKilometro
	costoPersona<- costoTotal/numPersonas
	Escribir "Costo total: " costoTotal
	Escribir "Costo por persona: " costoPersona
	
	
	
	
	
FinAlgoritmo
