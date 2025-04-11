function checkExam(array1, array2) {
 // Create a placeholder variable to tabulate the score
  let score = 0;
  
  // Setup a for loop to loop through both arrays at the same time
  for (let i = 0; i < array1.length; i++) {
    // Check if the current student array position is blank
    if (array2[i] === "") {
      // If so add nothing and subtract nothing from score
      continue;
    // Check if the current student array position matches the correct answer
    } else if (array1[i] === array2[i]) {
      // If so, add 4 to score
      score += 4;
      // If not
    } else {
      // Subtract 1 from score
      score -= 1;
    }
  }
  //Setup a ternary operator to check is score is less than 0
  //If so return 0, if not return score
  return score < 0 ? 0 : score;
}