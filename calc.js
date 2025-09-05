function calculate() {
	
	var max=parseFloat(document.getElementById("max").value);
	var min=parseFloat(document.getElementById("min").value);
	var result=(max - min)/((max + min)/2);
	result = Math.trunc(result*1000)/1000
	
	if(!isNaN(result)){
		document.getElementById("answer").innerHTML="Result: "+result;
	}
}


