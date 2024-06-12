function heightChecker(heights) {
  // Create a sorted copy of the heights array
  let sortedHeights = [...heights].sort((a, b) => a - b);
  
  // Initialize a counter for the number of students not in the correct position
  let count = 0;
  
  // Compare the original and sorted arrays
  for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== sortedHeights[i]) {
          count++;
      }
  }
  
  // Return the count
  return count;
}

// Test case
console.log(heightChecker([1, 1, 4, 2, 1, 3]));  // Expected output: 3
