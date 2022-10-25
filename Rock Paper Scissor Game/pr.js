const randomFruits = () => {
const randomNumber = Math.floor(Math.random()* fruits.length)


console.log(randomNumber);
return fruits[randomNumber]

}
fruits = ["apple", "peach", "mango" , "lemon"];
console.log(randomFruits(fruits));