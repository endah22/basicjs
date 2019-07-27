//nested if
let box =''
for (let i = 0; i <5; i++){
  for (let j = 0; j <= i; j++){
    for ( let k=5; k <= i; k--){
    }

    box += '*' 
  }


  box += '\n'  
}
console.log(box)