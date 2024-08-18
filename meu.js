var var1, var2, var3, var4;

	var1 = document.getElementById("n1");
	var2 = document.getElementById("n2");
	var3 = document.getElementById("n3");
	var4 = document.getElementById("n4");
		
function validar(){
	var1.style="";
	var2.style="";

	

	if(var1.value == ""){
		var1.style="border:2px solid red;";
		return false;
	}
	else{
		if(var2.value == ""){
			var2.style="border:2px solid red;";
			return false;
		}

	}
	return true;
}



function dividir(){
	let sair = validar();
	var2.style="";
	var3.style="";
	var4.style="";

	if(sair == false){
		return false;
	}
	else{
		if(var2.value == 0){
			var2.style="border:2px solid red;";
			alert("Impossivel divisao por ZERO");
		}
		
		var3.value = (parseFloat(var2.value) / (parseFloat(var1.value) * parseFloat(var1.value))).toFixed(2);

		if (var3.value <= 18){
			 var4.value = ("Abaixo do Peso.");
			 	var4.style = "border:3px solid red;";
			 	var3.style = "border:2px solid red;";
				 
		}	
		else if (var3.value >=19 && var3.value <= 24){
			var4.value = ("Normal");
				var4.style = "border:3px solid green;";
			 	var3.style = "border:2px solid green;";
		}	
		else if (var3.value >=25 && var3.value <= 30){
				var4.value = (" Sobrepeso");
				var4.style = "border:3px solid red;";
			 	var3.style = "border:2px solid red;";
		}	
		else if (var3.value >=31 && var3.value <= 40){
				var4.value = (" Obesidade.");
				var4.style = "border:3px solid red;";
			 	var3.style = "border:2px solid red;";
		}	
		else if (var3.value >= 40){
				var4.value=(" Obesidade Grave");
				var4.style = "border:3px solid red; border-style:dotted;";
			 	var3.style = "border:2px solid red;";
		}	
		
	}
}

