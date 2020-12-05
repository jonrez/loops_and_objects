
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product
const multiplication = () => {

  let number1 = prompt('give me a number');
  let number2 = prompt('give me another');
  let result = 0;

  for (let i = 0; i < parseInt(number2); i ++){
    result += parseInt(number1);
  }
  return result
}

const answer1 = multiplication()
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters
vowelOrConsonant = () => {
  let string = prompt('give me a word');
  let first = prompt('would you like vowels or consonants first?')

  const regexVowels = /[aeiou]/g;
  const regexConsonants = /[^aeiou]/g;

  let vowels = string.match(regexVowels);
  let consonants = string.match(regexConsonants)

  if (first === 'vowels') {
    let concat_string = [...vowels, ...consonants]
    return concat_string.join('')

  }else{
    let concat_string = [...consonants, ...vowels]
    return concat_string.join('')
  }

}

const answer2 = vowelOrConsonant()

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins


guessTheNumber  = () => {
  let info = {name: '',
              lives: 3,
              fail_numbers: []}

  let randNum = Math.floor(Math.random() * Math.floor(40))+11;

  let guess;

  info.name = prompt('what is your name')

  for (i = 0; i < 3; i ++){
    guess = prompt('Give a number between 10-50')
    info.lives -= 1;

    if (parseInt(guess) === randNum){
       alert(`CONGRATULATIONS ${info.name.toUpperCase}`)
       return `${info.name} won with ${info.lives} left`
    }
    info.fail_numbers.push(guess)
  }
  alert("better luck next time")
  return `Game Over, ${info.fail_numbers.join(', ')} were incorrect. the correct answere is ${randNum}`
}

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {
  let arr = [];
  var library = [

   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
   let criteria = prompt("would you like to sort based on Title, Author or libraryID");

    for ( element in library ){
      if (criteria === 'title'){
         arr.push(library[element].title)
      }
      if (criteria === 'author'){
         arr.push(library[element].author)
      }

      if (criteria === 'libraryID'){
         arr.push(library[element].libraryID)
            if (arr.length === library.length){
            return `${arr.sort().reverse().join(': ')}`
          }
          }
      }


    return `${arr.sort().join(': ')}`
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
