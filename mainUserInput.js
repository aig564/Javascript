//piece of code that does one or more functions
//Don't Repeat Yourself (DRY)
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input",add);
numTwo.addEventListener("input",add);

function add(){
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	var sum = one+two;
	addSum.innerHTML = "your sum is "+sum;
}
// numOne.addEventListener("click",function (){
// 	console.log("hi");
// })