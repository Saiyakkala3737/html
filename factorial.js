function facto()
{
	var fact=1;
  var number= document.getElementById("firstnumber").value;
  for(var i=number;i>=1;i--)
  {
  	fact=fact*i;
  }
	document.getElementById("result").innerHTML=fact;
}