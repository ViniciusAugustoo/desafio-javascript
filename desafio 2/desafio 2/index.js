let productValue = Number (prompt('enter the product value: '))
console.log(productValue)
console.log(typeof(productValue))

if (productValue >= 20){
    document.getElementById('result').innerHTML = 'approved' 
}
 else {
    document.getElementById('result').innerHTML = 'denied'
 }

// array exemplo
const friends = ['marcos', 'danilo', 'ana']
const num = [1, 2, 3, 4]

num.push(10, 11, 12)

num.unshift(-1, -12)

num.splice(6, 'none' ,5, 6, 7, 8, 9 )

 console.log(friends, num)

// array primitiva 
const num2 = [1, 2, 3]
console.log(num2.indexOf(3))
// arrow function

const movies = [
    {id: 1, moviesName: 'Senhor dos aneis'},
    {id: 2, moviesName: 'o Hobbit'},
    {id: 3, moviesName: 'star wars'}
]
console.log(movies.some(movie => movie.moviesName === 'o Hobbit'));
console.log(movies.find(function(movie) {
    return movie.moviesName === 'o Hobbit';
}))

// removendo numeros da array 

const num3 = [11, 22, 33]

const final = num3.shift()
const final2 = num3.pop()
const final3 = num3.splice(0, 1)

console.log(num3)

console.log(final, final2, final3)

// zerando uma array 

let num4 = [1, 2, 3, 4]

num4.length = 2

console.log(num4)

// concatenando uma array 

let numbers = [1, 2, 3, 4]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters)
half = all.slice(3, 5)

console.log(all, half)

// join
let clients = ['Marcos', 'Vinicius', 'Vini' ]
clients.sort()
console.log(clients)

//elementos na array
const tempLondon = [18, 13, 8, 2, 0, -2]

const tempPositive = tempLondon.every(function(value){   //se mudar de every para filter + arrow function ele puxa todos os dados armazenados em london 
    return value >= 0  
})

console.log(tempPositive)

// function declaration

function movie2(){
    console.log('Harry potter')
}

movie2()

// function expression

const car = function() {
    console.log('toyota')
}

car()

const cyberTruck = car

cyberTruck()

// funçoes

function price (a, b)  {
    let total = 0 
    for (let value of arguments)
        total += value
    return total 
}

console.log(price(10, 10, 10))

// parametros default

function carLoan(loan, rate, years) {
    return (loan  * rate / 100 * years) + loan
}

console.log(carLoan(20000, 2.5, 5))
