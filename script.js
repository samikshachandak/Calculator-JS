var zero,operator,total=0;
var userScreen;
var decimalpoint=0;

function clearinput() 
{
 document.getElementById("myForm").reset();
}

function deleteLastNumber() 
{
userScreen=document.getElementById("screen").value;
document.getElementById("screen").value=userScreen.substring(0,userScreen.length-1)
}

function onNumberClick(n)
{
	userScreen=document.getElementById('screen');
	userScreen.value+=n;
}

function onDecimalClick(n)
{
	if (decimalpoint===0) 
	{
		userScreen=document.getElementById('screen');
		userScreen.value+=n;
		decimalpoint=1;
	}
}


function onOperatorClick(key)
{
userScreen=document.getElementById('screen');
userScreen.value+=key;
}

function performOperation()
{
total=eval(document.getElementById('screen').value);
userScreen.value=total;
}
