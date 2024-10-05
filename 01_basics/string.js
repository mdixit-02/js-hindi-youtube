const name = "Megha"
const repoCount = "5"

// console.log(name + repoCount)
// console.log(name + repoCount + " value") //old way, not a modern style to write code

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Modern way

const gameName = new String("Megha-dxt")

console.log(gameName[0])
console.log(gameName.__proto__) //gives output {}
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("g"))

const newString = gameName.substring(0,4); //ubstring does not take negative values.
console.log(newString)

const anotherString = gameName.slice(-8, 4) //slice takes negative values as well
console.log(anotherString)

const newStringOne = "  Megha  "
console.log(newStringOne)
console.log(newStringOne.trim()) //It will remove all the extra spaces in newStringOne

const url = "https://Megha.com/Megha%20Dixit"
console.log(url.replace('%20', '-')) // It will replace all occurances of % with "-" in url method

console.log(url.includes("Megha")) // true
console.log(url.includes("Sundar")) //false

const gameNameOne = "Megha-Dxt-com"
console.log(gameNameOne.split("-")) //It will convert String into Array