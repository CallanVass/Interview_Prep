// FizzBuzz Basic

function fizzBuzz() {
    for (i = 0; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
        
    }
        }


// fizzBuzz()

// FizzBuzz with Array

function fizzBuzzWithArray(n) {
    let result = []

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        } else if (i % 3 === 0) {
            result.push("Fizz")
        } else if (i % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push(i.toString())
        }
    }
    console.log(result)
    return result
}

// fizzBuzzWithArray(100)

// Take a string and reverse it

function reverseString(str) {
    // Convert to string
    // Split the string
    // Reverse it
    // Put string back together

    str = str.toString()

    letters = str.split('')
    console.log(letters)

    letters = letters.reverse()
    console.log(letters)

    letters = letters.join('')

    console.log(letters)
}

// reverseString(345)

const object = {
    55: "Killer",

}

object[55] = 88

console.log(object[55])

