// Escribe aquí tu codigo Javascript

var valores = [true, 5, false, "hola", "adios", 2];
if(valores[3].length>valores[4].length){
	alert("'hola' es mayor que 'adiós'.")
}else if(valores[4].length>valores[3].length){
	alert("'adiós' es mayor que 'hola'.")
}else{
	alert("'hola' es igual que 'adiós'.")
};

alert(valores[0]+" && "+valores[2]+" = "+(valores[0]&&valores[2])+" \n"+valores[0]+" || "+valores[2]+" = "+(valores[0]||valores[2]));

alert("Si realizamos las 5 operaciones matemáticas con nuestros dos elementos numericos los resultados serian: \n Suma: "+valores[1]+"+"+valores[5]+" = "+(valores[1]+valores[5])+"\n Resta: "+valores[1]+"-"+valores[5]+" = "+(valores[1]-valores[5])+"\n Multiplicacion: "+valores[1]+"*"+valores[5]+" = "+(valores[1]*valores[5])   +"\n Division: "+valores[1]+"/"+valores[5]+" = "+(valores[1]/valores[5])  +"\n Resto: "+valores[1]+"%"+valores[5]+" = "+(valores[1]%valores[5]));

