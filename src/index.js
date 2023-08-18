module.exports = function toReadable (number) {
  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const powersOfTen = ["", "thousand", "million", "billion", "trillion"];
  
  function wordsForLessThanThousand(n) {
      if (n === 0) {
          return "";
      } else if (n < 20) {
          return ones[n];
      } else if (n < 100) {
          return tens[Math.floor(n / 10)] + (n % 10 > 0 ? " " + ones[n % 10] : "");
      } else {
          return ones[Math.floor(n / 100)] + " hundred" + (n % 100 > 0 ? + wordsForLessThanThousand(n % 100) : "");
      }
  }
  
  if (number === 0) {
      return "zero";
  }
  
  let result = "";
  let powerIdx = 0;
  
  while (number > 0) {
      const chunk = number % 1000;
      
      if (chunk > 0) {
          if (result) {
              result = wordsForLessThanThousand(chunk) + " " + powersOfTen[powerIdx] + " " + result;
          } else {
              result = wordsForLessThanThousand(chunk) + " " + powersOfTen[powerIdx];
          }
      }
      
      powerIdx++;
      number = Math.floor(number / 1000);
  }
  
  return result.trim();
 
}
