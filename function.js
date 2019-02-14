function basic()
{
	alert("");
  var breadth = document.getElementById("firstnumber").value;
	var height =document.getElementById("secondnumber").value;
	var x = 1/2*breadth*height;
	document.getElementById("result").innerHTML=x;
}