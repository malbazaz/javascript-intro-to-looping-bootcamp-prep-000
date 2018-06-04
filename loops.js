var array = {}
function forLoop(array){
  
  for(i=0;i<25;i++){
  if (i===1){
var statement= "I am 1 strange loop."
array.push(statement)
  }
  else{
var statement2= `"I am ${i} strange loops."`
array.push(statement2)
  }
  
  }
  return array
}

var numb1
function whileLoop(numb1){
  
  while (numb1>0){
    console.log(numb1)
    numb1--
  }
  return "done"
}


function doWhileLoop(array){
  do{
    
  }
  while(array.length>0 && maybeTrue())
  
  }

  function maybeTrue() {
  return Math.random() >= 0.5 
while (maybeTrue()) {
  console.log("And I ran; I ran so far away!");
}
  