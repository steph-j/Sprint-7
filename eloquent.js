//number 1
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//number 2
function isEven(num) {
  if (num < 0)
    return isEven(-num);
  else if (num == 0)
    return true;
  else if (num == 1)
    return false;
  else
    return isEven(num - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//number 3
function countChar(string, char) {
    var count = 0;
  for (var i = 0; i < string.length; i++) 
      if (string.charAt(i) == char)
       count += 1;
      return count;
    
}

function countBs(string) {
return countChar(string, "B");    
  }



console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
