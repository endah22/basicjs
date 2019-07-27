
const massa = prompt('masukkan massa dan tinggi?')
const tinggi = prompt('masukkan tinggi:')
const imt = massa / Math.pow(tinggi, 2)

if (imt < 18.5){
  alert('berat badan kurang')
} else if (imt >=18.5 && imt <= 24.9){
  alert('berat badan ideal')
}else if (imt >=25.0 && imt <= 29.9){
  alert('berat badan berlebih')
}else if (imt >= 30.0 && imt <= 39.9){
  alert('berat badan sangat berlebih')
}else{
  alert('tidak terdeksi')
}