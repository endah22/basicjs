// we use interatio 'i'
// for(let i = 1; i <= 10; i++){
//  console.log(`${i * 2}`)
// }
// for(let i = 1; i <= 10; i += 2){
//   console.log(i)
// }

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