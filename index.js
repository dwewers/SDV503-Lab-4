function convertBinary(numberOne, numberTwo) {
  var sum = numberOne + numberTwo;
  binary = "";
  while (sum > 0) {
    (binary = (sum % 2) + binary) && (sum = Math.floor(sum / 2));
  }
  return binary;
}
console.log(convertBinary(0, 10));
