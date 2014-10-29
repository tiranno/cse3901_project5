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
	// if operator, give it unique slot in array, else, add digit to running number in current slot
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
	// add number or operator to array
	document.getElementById('input').innerHTML += val;
}

// Deletes last operator or value. Examples: Input: 5*3456 Del -> Input: 5* , Input 5* Del -> Input: 5
function del() {
	input[inputCount]='';
	if(inputCount>0){
		inputCount--;
	}
	document.getElementById('input').innerHTML=input.join('');
}

function evalinput() {
	// create string to evaluate from input array
	var tmp = input.join('');
	// evaluate string and set as result on the calculator
	document.getElementById('result').innerHTML = ' = ' + eval(tmp);
	//add to history and increase history count
	var hist = tmp+document.getElementById('result').innerHTML+"<button OnClick=\"addToInput("+tmp+")\">INPUT</button><br>";
	hist += document.getElementById('history').innerHTML;
	histcounter++;
	if (histcounter>6){
		histlast= hist.lastIndexOf('<br>');
		hist=hist.substring(0,histlast);
	}
	document.getElementById('history').innerHTML=hist;
}

//clears memory
function memclear() {
	document.getElementById('memory').innerHTML="clear";
}

//stores result value as memory
function memstore() {
	document.getElementById('memory').innerHTML = document.getElementById('result').innerHTML.substring(3,document.getElementById('result').innerHTML.length);
}

//inputs memory value into input
function memrecall() {
	if(input[inputCount] != null){
		input[inputCount] += document.getElementById('memory').innerHTML;
	}
	else{
		input[inputCount] = document.getElementById('memory').innerHTML;
	}
	document.getElementById('input').innerHTML+=document.getElementById('memory').innerHTML;
}

//adds result value to memory value
function memplus() {
	document.getElementById('memory').innerHTML=eval(document.getElementById('result').innerHTML.substring(3,document.getElementById('result').innerHTML.length)+"+"+document.getElementById('memory').innerHTML);
}

//clears input and result but does not clear memory or history
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
	document.getElementById('Sin').style.display = "none";
	document.getElementById('Cos').style.display = "none";
	document.getElementById('Tan').style.display = "none";
	input.length = 0;
	inputCount = 0;
}

function exponentDisplay(){
	// make exponent box visible
	document.getElementById('power').style.display = "block";
}

function power(exponent){
	var tmpNum;
	// if exponent is 0, it has not been set yet, get it from input
	if(exponent == 0){
		exponent = document.getElementById('powNum').value;
		document.getElementById('powNum').value = "";
		document.getElementById('power').style.display = "none";
	}
	// get the number to be powered(previous button(s) pressed)
	tmpNum = parseInt(input[inputCount]);
	// power number to given exponent and set as new answer in input
	tmpNum = Math.pow(tmpNum, exponent);
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
