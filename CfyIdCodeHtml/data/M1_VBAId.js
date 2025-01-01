function abc(x,y)
{
  return x+y;
}
console.log(abc(1,3));

var xhr = new XMLHttpRequest();  
xhr.open ("GET", "./data/M1_VBAId.json", false); 
xhr.send();
console.log(xhr.responseText);