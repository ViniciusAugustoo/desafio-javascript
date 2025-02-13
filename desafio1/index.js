let favoriteFood = ''
document.getElementById('text').innerHTML = 'bitch'

//modelo factory
function creatBook (title, author, pages) {
    const book  = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        bookChapters: {
            chap1: 'fundamentals',
            chap2: '1st law'
        },
        printBook: function () {
            console.log('printing....')
        }
    }
    return book
}

const book1 = creatBook('atomic', 'james', 306)
const book2 = creatBook('todyn', 'xiquin', 404)

book1. color = 'white'

console.log(book1)
console.log(book2)


// modelo constructor
function creatCar (model, value, color) {
    this.carModel = model;
    this.carValue = value;
    this.carColor = color 

}

const car1 = new creatCar ('SUV', 10000, 'BLACK') 

console.log(car1)

//built-in objects

console.log(Math.max(1, 2, 5, 19, 144))
console.log(Math.min(1, -1, 23, 0))

//built in objeetcs string

let message = 'hey, my name is vinicius , how are you?'
let count = 4
console.log(message.length)
console.log(message.startsWith('hey'))
console.log(message.includes('Vinicius'))
console.log(message.endsWith('you'))
console.log(message.repeat(count))