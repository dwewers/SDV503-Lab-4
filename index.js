function convertBinary(numberOne, numberTwo) { //Creates a function called "convertBinary" with the parameters "numberOne" and "numberTwo"
  var sum = numberOne + numberTwo; //Creates a variable called sum that is equal to the value of t
  binary = "";//declares binary as an empty stirng
  while (sum > 0) {//while the value of sum is greater than 0
    (binary = (sum % 2) + binary) && (sum = Math.floor(sum / 2));
    //sum % 2 gives remaining value of sum/2. This means that if sum is devided by 2, any additional values are returned.
    //This will return 0 if the number (in this case the value of sum) is devisible by the other value.
    //For example, 10%2 would return 0 as there is no remainder.
    //If it was 10%3, the highest devision is 9/3, which gives the remainder of 1, to get 10
  }
  return binary; //returns the result of binary
}
console.log(convertBinary(0, 10));// returns 1010
console.log(convertBinary(4, 5));//returns 1001
console.log(convertBinary(9, 4));//returns 1101
console.log(convertBinary(22, 1));//returns 10111





