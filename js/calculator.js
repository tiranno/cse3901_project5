var inputCount = 0;
var histcounter = 0;
var histlast=0;
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
	input[inputCount]='';
	inputCount--;
	document.getElementById('input').innerHTML=input.join('');

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
	histcounter++;
	if (histcounter>6){
		histlast= hist.lastIndexOf('<br>');
		hist=hist.substring(0,histlast);
	}
	document.getElementById('history').innerHTML=hist;
}

function memclear() {
	document.getElementById('memory').innerHTML="clear";
}

function memstore() {
	document.getElementById('memory').innerHTML = document.getElementById('result').innerHTML.substring(3,document.getElementById('result').innerHTML.length);
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
	document.getElementById('memory').innerHTML=eval(document.getElementById('result').innerHTML.substring(3,document.getElementById('result').innerHTML.length)+"+"+document.getElementById('memory').innerHTML);
}

function clearcalc() {
	var hist="CLEAR<br>";
	hist += document.getElementById('history').innerHTML;
	histcounter++;
	if (histcounter>6){
		histlast= hist.lastIndexOf('<br>');
		hist=hist.substring(0,histlast);
	}
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

//this function helps create the pop-up input boxes for Sin button
function sinDisplay(){
	document.getElementById('Sin').style.display = "block";
}

//This is the actual Sin implementation
function sin_x(inputParam){
	var tempNum;
	if(inputParam == 0){ //input is always 0 at beginning
	    //the below lines get the users input, then reset the input box
		inputParam = document.getElementById('sinNum').value;
		document.getElementById('sinNum').value = "";
		document.getElementById('Sin').style.display = "none";
	}
    //actual sin calculation, first get number, then apply sin
    inputParam = parseInt(inputParam); 
    tempNum = Math.sin(inputParam);
    
    //finally put sin(input) into equation and add the result to the input
    document.getElementById('input').innerHTML += "sin(" + inputParam + ")";
    input[inputCount] = tempNum;
}

//this function helps create the pop-up input boxes for Cos button
function cosDisplay(){
	document.getElementById('Cos').style.display = "block";
}

function cos_x(inputParam){
	var tempNum;
	if(inputParam == 0){//input is always 0 at beginning
	    //the below lines get the users input, then reset the input box
		inputParam = document.getElementById('cosNum').value;
		document.getElementById('cosNum').value = "";
		document.getElementById('Cos').style.display = "none";
	}
    //actual cos  calculation, first get number, then apply cos
    inputParam = parseInt(inputParam); 
    tempNum = Math.cos(inputParam);
    
    //finally put cos(input) into equation and add the result to the input
    document.getElementById('input').innerHTML += "cos(" + inputParam + ")";
    input[inputCount] = tempNum;

}
//this function helps create the pop-up input boxes for Tan button
function tanDisplay(){
	document.getElementById('Tan').style.display = "block";
}

function tan_x(inputParam){
	var tempNum;
	if(inputParam == 0){//input is always 0 at beginning
	    //the below lines get the users input, then reset the input box
		inputParam = document.getElementById('tanNum').value;
		document.getElementById('tanNum').value = "";
		document.getElementById('Tan').style.display = "none";
	}
    //actual tan  calculation, first get number, then apply tan
    inputParam = parseInt(inputParam); 
    tempNum = Math.tan(inputParam);

    //finally put tan(input) into equation and add the result to the input
    document.getElementById('input').innerHTML += "tan(" + inputParam + ")";
    input[inputCount] = tempNum;
}
