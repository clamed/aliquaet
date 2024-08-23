// Assuming frame is an object with a scores array
let frame = {
  scores: [10, 5] // Initial scores for the frame
};

// New score to be added
let second = 7;

// Push the new score into the scores array
frame.scores.push(second);

console.log(frame.scores); // Output: [10, 5, 7]
