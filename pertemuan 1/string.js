const sentence = 'ibu pergi beli semangka ke pasar'

// //ambil panjang string
// Console.log(sentence.length)

// // ambil posisi index dari
// // sebuah subtring (index mulai dari 0)
// console.log(sentence.indexOf('i'))

 const kalimatBaru = sentence.substring(sentence.indexOf('beli'), sentence.length)
 console.log(kalimatBaru)

console.log(sentence.slice(5, 8))
console.log(sentence.includes('ibu'))
console.log(sentence.split(' '))//array
console.log(sentence.toUpperCase())//huruf kapital
console.log(sentence.toLowerCase())
const angka = 123456
angka.toString()
const number = 123
console.log('ibu memiliki semangka' + number)

const x = '123'
const y = '457'
const result = '789'
console.log = (parseInt(x) + parseInt(y))