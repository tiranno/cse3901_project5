var counter=0;
function input(val){
	document.getElementById('input').innerHTML+=val;

}
function del() {
	var temp=document.getElementById('input').innerHTML;
	temp=temp.substring(0,temp.length-1);
	document.getElementById('input').innerHTML=temp;
}
function divide() {
	var temp=document.getElementById('input').innerHTML;
	temp=temp;
	document.getElementById('input').innerHTML=temp;
}
function evalinput() {
	var temp=document.getElementById('input').innerHTML;
	document.getElementById('input').innerHTML=eval(document.getElementById('input').innerHTML);
	document.getElementById('result').innerHTML=temp+'='+document.getElementById('input').innerHTML;
	document.getElementById('history').innerHTML+="<div id=\"history"+counter+"\">"+temp+'='+document.getElementById('input').innerHTML+"<button OnClick=\"input("+document.getElementById('input').innerHTML+")\">INPUT</button>" + "</div>";
	counter+=1;

}
function memclear() {
	document.getElementById('memory').innerHTML="clear";
}
function memstore() {
	document.getElementById('memory').innerHTML=document.getElementById('input').innerHTML;
}
function memrecall() {
	document.getElementById('input').innerHTML+=document.getElementById('memory').innerHTML;
}
function clearcalc() {
	document.getElementById('input').innerHTML="";
	document.getElementById('result').innerHTML="";
	document.getElementById('history').innerHTML="";
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

function squared () {
	var operators = ['+', '-', '*', '/'];
	var i=0;
	var lastind=0;
	var temp=document.getElementById('input').innerHTML;
	var temparray=[1,2,3];
	for(i=0;i<operators.length;i++){
		if(temp.lastIndexOf(operators[i])>0 && temp.lastIndexOf(operators[i])>lastind){
			lastind=temp.lastIndexOf(operators[i]);
		}
	}
	document.getElementById('result').innerHTML=Math.pow(temp.substring(lastind+1,temp.length),2);
	temp=temp.substring(0,lastind+1)+Math.pow(temp.substring(lastind+1,temp.length),2);
	document.getElementById('input').innerHTML=temp;
	//document.getElementById('result').innerHTML=Math.pow(temp,2);
}
function memory_clear () {
  
}

function memory_save () {
  
}

function memory_recall () {
  
}

function memory_add () {
  
}
