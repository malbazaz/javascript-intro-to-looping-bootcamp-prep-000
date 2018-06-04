var array1 = {}
function forloop(array1){
  
  for(i=0;i<25;i++){
  if (i===1){
var statement= "I am 1 strange loop."
array1.push(statement)
  }
  else{
var statement2= `I am ${i} strange loops.`
array1.push(statement2)
  }
  
  }
console.log(array1)
}