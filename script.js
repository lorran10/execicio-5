function tabuada() {
  var num = document.getElementById('txtn')
  var tab = document.getElementById('seltab')

 if (num.value.length == 0){
window.alert('Digite um nmero')

} else {
  var n = Number(num.value)
  var c = 1
  tab.innerHTML =''
  while ( c <= 10){
    var item =document.createElement('option')
    item.innerHTML= `${n} x ${c} = ${n*c}`
    tab.appendChild(item)
    c++

    }

  } 
  
}