var inputCount = 0;
var operators = ['+', '-', '*', '/', '(', ')'], input = [];

Array.prototype.contains = function ( tmp ) {
   for (i in this) {
       if (this[i] == tmp) return true;
   }
   return false;
}

function addToInput(val){
	if(operators.contains(val)){
		inputCount++;
		input[inputCount] = val;
		inputCount++;
	}
	else{
		if(input[inputCount] != null){
			input[inputCount] += val;	
		}
		else{
			input[inputCount] = val;
		}
	}
	document.getElementById('input').innerHTML += val;
}

function del() {
	var temp=document.getElementById('input').innerHTML;
	temp=temp.substring(0,temp.length-1);
	document.getElementById('input').innerHTML=temp;
	input[inputCount]='';
	inputCount--;
}

function divide() {
	var temp=document.getElementById('input').innerHTML;
	temp=temp;
	document.getElementById('input').innerHTML=temp;
}

function evalinput() {
	var tmp = input.join('');
	document.getElementById('result').innerHTML = ' = ' + eval(tmp);
	var hist = tmp+document.getElementById('result').innerHTML+"<button OnClick=\"addToInput("+tmp+")\">INPUT</button><br>";
	hist += document.getElementById('history').innerHTML;
	document.getElementById('history').innerHTML=hist;
}

function memclear() {
	document.getElementById('memory').innerHTML="clear";
}

function memstore() {
	document.getElementById('memory').innerHTML = document.getElementById('result').innerHTML;
}

function memrecall() {
	if(input[inputCount] != null){
		input[inputCount] += document.getElementById('memory').innerHTML;
	}
	else{
		input[inputCount] = document.getElementById('memory').innerHTML;
	}
	document.getElementById('input').innerHTML+=document.getElementById('memory').innerHTML;
}

function memplus() {
	document.getElementById('memory').innerHTML=eval(document.getElementById('result').innerHTML+"+"+document.getElementById('memory').innerHTML);
}

function clearcalc() {
	var hist="CLEAR<br>";
	hist += document.getElementById('history').innerHTML;
	document.getElementById('history').innerHTML=hist;
	document.getElementById('input').innerHTML="";
	document.getElementById('result').innerHTML="";
	document.getElementById('power').style.display = "none";
	input.length = 0;
	inputCount = 0;
}

function exponentDisplay(){
	document.getElementById('power').style.display = "block";
}

function power(exponent){
	var operators = ['+', '-', '*', '/'], tmp = [], tmpNum;
	if(exponent == 0){
		exponent = document.getElementById('powNum').value;
		document.getElementById('powNum').value = "";
		document.getElementById('power').style.display = "none";
	}
	if(input[inputCount - 1] == ')'){

	}
	else{
		tmpNum = parseInt(input[inputCount]);
		tmpNum = Math.pow(tmpNum, exponent);
	}
	document.getElementById('input').innerHTML += "^" + exponent;
	input[inputCount] = tmpNum;
}

function sinDisplay(){
	document.getElementById('Sin').style.display = "block";
}

function sin_x(inputParam){
	var tempNum;
	if(inputParam == 0){
		inputParam = document.getElementById('sinNum').value;
		document.getElementById('sinNum').value = "";
		document.getElementById('Sin').style.display = "none";
	}
	if(input[inputCount - 1] == ')'){

	}
	else{
	    inputParam = parseInt(inputParam); 
	    tempNum = Math.sin(inputParam);
	    //CONVERT TO DEGREES HERE
	}
	document.getElementById('input').innerHTML += "sin(" + inputParam + ")";
	input[inputCount] = tempNum;
}


function cosDisplay(){
	document.getElementById('Cos').style.display = "block";
}

function cos_x(inputParam){
	var tempNum;
	if(inputParam == 0){
		inputParam = document.getElementById('cosNum').value;
		document.getElementById('cosNum').value = "";
		document.getElementById('Cos').style.display = "none";
	}
	if(input[inputCount - 1] == ')'){

	}
	else{
	    inputParam = parseInt(inputParam); 
	    tempNum = Math.cos(inputParam);
	    //CONVERT TO DEGREES HERE
	}
	document.getElementById('input').innerHTML += "cos(" + inputParam + ")";
	input[inputCount] = tempNum;
}

function tanDisplay(){
	document.getElementById('Tan').style.display = "block";
}

function tan_x(inputParam){
	var tempNum;
	if(inputParam == 0){
		inputParam = document.getElementById('tanNum').value;
		document.getElementById('tanNum').value = "";
		document.getElementById('Tan').style.display = "none";
	}
	if(input[inputCount - 1] == ')'){

	}
	else{
	    inputParam = parseInt(inputParam); 
	    tempNum = Math.tan(inputParam);
	    //CONVERT TO DEGREES HERE
	}
	document.getElementById('input').innerHTML += "tan(" + inputParam + ")";
	input[inputCount] = tempNum;
}
