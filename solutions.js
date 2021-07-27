 // verbal questions

// parameter is a variable thats defined in a method,
// argument is the data passed as the method's parameter

// console.log only displays output on console
// while return ends a function and returns the value


// palindrome

const pallyDrommy = (str) => { str.toLowerCase().replace(/[\W_]/g, '')}

const checkPalindrome = (str) => {
  const letters = pallyDrommy(str);
  const charactArr = letters.split('');
  for(let x of charactArr){
    if (x != charactArr.pop()){
      return false;
    }
  }
  return true;
}

// sumArray

const sumArray = (str) => {
  const arr = [1, 2, 3, 4, 5, 6];
  const reducer = (accumulator, curr) => accumulator + curr;
}
console.log(arr.reduce(reducer));

// prime numbers

function checkPrime(pn){
  if(pn === 0 || pn === 1 {
    return false;
  }

  for(var i = 2; i < pn; i++) {
    if(pn % i === 0) {
      return false
    }
  }
  return true
}
checkPrime(853)


function printPrimes(pr) {
  console.log('1');
for (i = 0; i <= pr; i++) {
    if (checkPrime(i)) console.log(i);
  }
}
printPrimes(617)

// rps

let selectionStr = ['rock', 'paper', 'scissors'];

function randomMove() {
  let randy = Math.floor(Math.random() * selectionStr.length);
  return selectionStr[randy];
}

let computersMove = randomMove();
let usersMove = randomMove();

let computerWin = "You lose! Better luck next time."
let userWin = "You won! You deserve a big trophy."
let rockWin = "Rock smashed the scissors"
let paperWin = "Paper covered the rock"
let scissorsWin = "Scissors cut the paper"
let noWin = "Woah, a tie!"

function rockPaperScissors(computer, user){

  if (user === computer) {
    return(`${noWin}`)
  } else if (computer === "scissors") {
    if (user === "rock") {
      return (`${rockWin}`, `${userWin}`);
    } else if (user === "paper"){
      return (`${scissorsWin}`, `${computerWin}`);
    }
  } else if (computer === "paper") {
    if (user === "scissors") {
      return (`${scissorsWin}`, `${userWin}`);
    } else if (user === "rock"){
      return (`${paperWin}`, `${computerWin}`);
    }
  } else if (computer === "rock") {
    if (user === "paper") {
      return (`${paperWin}`, `${userWin}`);
    } else if (user === "scissors"){
      return (`${scissorsWin}`, `${computerWin}`);
    }
  } else {
    return ('No contest!');
  }
}
