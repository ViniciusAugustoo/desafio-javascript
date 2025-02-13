let productValue = Number (prompt('enter the product value: '))
console.log(productValue)
console.log(typeof(productValue))

if (productValue >= 20){
    document.getElementById('result').innerHTML = 'approved' 
}
 else {
    document.getElementById('result').innerHTML = 'denied'
 }
