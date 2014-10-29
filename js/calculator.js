var inputCount = 0;
var counter=0;
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
	//document.getElementById('history').innerHTML = tmp;
	var hist = "<div id=\"history"+counter+"\">"+tmp+'='+document.getElementById('result').innerHTML+"<button OnClick=\"addToInput("+document.getElementById('input').innerHTML+")\">INPUT</button>" + "</div>";
	hist += document.getElementById('history').innerHTML;
	document.getElementById('history').innerHTML=hist;
	// var temp=document.getElementById('input').innerHTML;
	// document.getElementById('input').innerHTML=eval(document.getElementById('input').innerHTML);
	// document.getElementById('result').innerHTML=temp+'='+document.getElementById('input').innerHTML;
	// document.getElementById('history').innerHTML+="<div id=\"history"+counter+"\">"+tmp+'='+document.getElementById('input').innerHTML+"<button OnClick=\"addToInput("+document.getElementById('input').innerHTML+")\">INPUT</button>" + "</div>";
	counter+=1;
}

function memclear() {
	document.getElementById('memory').innerHTML="clear";
}

function memstore() {
	document.getElementById('memory').innerHTML = document.getElementById('input').innerHTML;
}

function memrecall() {
	document.getElementById('input').innerHTML+=document.getElementById('memory').innerHTML;
	input[inputCount] = document.getElementById('input').innerHTML;
}

function clearcalc() {
	var hist="CLEAR<br>";
	hist += document.getElementById('history').innerHTML;
	document.getElementById('history').innerHTML=hist;
	//document.getElementById('history').innerHTML += input.join('');
	//document.getElementById('history').innerHTML += '<br>';
	document.getElementById('input').innerHTML="";
	document.getElementById('result').innerHTML="";
	document.getElementById('power').style.display = "none";
	input.length = 0;
	inputCount = 0;
}

//storage var
//length var

//adds x to y and returns the result
function add (x, y) {
  return (x+y);
}

//subtracts y from x and returns the result
function subtract (x, y) {
  return (x-y);
}

//multiplies x to y and returns the result
function multiply (x, y) {
  return (x * y);
}

//divides x to y and returns the result
function divide (x, y) {
  
}

//raises x to the yth power and returns the result
function power (x, y) {
  
}

//finds the square root of x and returns the result
function root_2 (x) {
  
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

// function squared () {
// 	var operators = ['+', '-', '*', '/'];
// 	var i=0;
// 	var lastind=0;
// 	var temp=document.getElementById('input').innerHTML;
// 	var temparray=[1,2,3];
// 	for(i=0;i<operators.length;i++){
// 		if(temp.lastIndexOf(operators[i])>0 && temp.lastIndexOf(operators[i])>lastind){
// 			lastind=temp.lastIndexOf(operators[i]);
// 		}
// 	}
// 	document.getElementById('result').innerHTML=Math.pow(temp.substring(lastind+1,temp.length),2);
// 	temp=temp.substring(0,lastind+1)+Math.pow(temp.substring(lastind+1,temp.length),2);
// 	document.getElementById('input').innerHTML=temp;
// 	//document.getElementById('result').innerHTML=Math.pow(temp,2);
// }

function percent () {
	var operators = ['+', '-', '*', '/'], tmp = [], tmpNum;
	if(input[inputCount - 1] == ')'){

	}
	else{
		tmpNum = parseInt(input[inputCount])/100;
		//tmpNum = Math.pow(tmpNum, exponent);
	}
	document.getElementById('input').innerHTML += "%";
	input[inputCount] = tmpNum;
}

function memory_clear () {
  
}

function memory_save () {
  
}

function memory_recall () {
  
}

function memory_add () {
  
}
