for (let i = 0; i < 5; i++) {
  console.log("we're inside the for loop")
  console.log(i);
};

const players = [
  {name: "Roberta", pointsScored: 10},
  {name: "Scarles", pointsScored: 15}
];

const totalScore = players.reduce(
  (total, currentPlayer) => total + currentPlayer.pointsScored,
  0 
);
console.log(totalScore);