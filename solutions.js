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
