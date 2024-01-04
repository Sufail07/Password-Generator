let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"]
let passwordOne = document.getElementById("passwordOne")
let passwordTwo = document.getElementById("passwordTwo")
let passwordThree = document.getElementById("passwordThree")
let passwordFour = document.getElementById("passwordFour")
let lengthValue = document.getElementById("password-length")

function randomCharacter() {
    let index = Math.floor(Math.random() * characters.length)
    console.log(characters[index])
    return characters[index]
}


function generatePassword(length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        password += randomCharacter();
    }
    return password
}


function renderPassword() {
    let length = lengthValue.value
    console.log(length)
    if (length === "") {
        length = 12
    }
    passwordOne.textContent = generatePassword(length)
    passwordTwo.textContent = generatePassword(length)
    passwordThree.textContent = generatePassword(length)
    passwordFour.textContent = generatePassword(length)
}

lengthValue.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault()
        document.getElementById("enterButton").click();
    }
}) 