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
	input[inputCount]="";
	inputCount--;
}

function divide() {
	var temp=document.getElementById('input').innerHTML;
	temp=temp;
	document.getElementById('input').innerHTML=temp;
}

function evalinput() {
	var tmp = input.join('');
	document.getElementById('result').innerHTML = eval(tmp);
	var hist = tmp+'='+document.getElementById('result').innerHTML+"<button OnClick=\"addToInput("+document.getElementById('input').innerHTML+")\">INPUT</button><br>";
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

function percent () {
	var operators = ['+', '-', '*', '/'], tmp = [], tmpNum;
	if(input[inputCount - 1] == ')'){

	}
	else{
		tmpNum = parseInt(input[inputCount])/100;
	}
	document.getElementById('input').innerHTML += "%";
	input[inputCount] = tmpNum;
}


