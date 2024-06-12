function isValid(s) {
  // Mapping of closing brackets to their corresponding opening brackets
  const bracketMap = {
      ')': '(',
      '}': '{',
      ']': '['
  };
  
  const stack = [];
  
  for (let char of s) {
      if (Object.values(bracketMap).includes(char)) {  // If it's an opening bracket
          stack.push(char);
      } else if (Object.keys(bracketMap).includes(char)) {  // If it's a closing bracket
          if (stack.length > 0 && stack[stack.length - 1] === bracketMap[char]) {
              stack.pop();
          } else {
              return false;
          }
      } else {
          return false;  // Invalid character, though the problem guarantees only valid characters
      }
  }
  
  return stack.length === 0;  
}

// Test cases
console.log(isValid("()"));       // Expected output: true
console.log(isValid("()[]{}"));   // Expected output: true
console.log(isValid("(]"));       // Expected output: false
console.log(isValid("([)]"));     // Expected output: false
console.log(isValid("{[]}"));     // Expected output: true
