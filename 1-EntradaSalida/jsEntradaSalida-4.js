/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre = prompt("Ingrese nombre", "Ingresa tu nombre");
	document.getElementById("elNombre").value = nombre;
}

