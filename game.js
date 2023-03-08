// Define the categories
const categories = ['name', 'place', 'animal', 'thing', 'movie', 'TV show', 'celebrity'];

// Define the scores object to keep track of each player's score
const scores = {};

// Define a function to display the scores
function displayScores() {
  const scoreTable = document.getElementById('scoreTable');
  scoreTable.innerHTML = '';

  const headerRow = document.createElement('tr');
  const playerHeader = document.createElement('th');
  playerHeader.textContent = 'Player';
  headerRow.appendChild(playerHeader);

  for (let category of categories) {
    const categoryHeader = document.createElement('th');
    categoryHeader.textContent = category;
    headerRow.appendChild(categoryHeader);
  }

  const totalHeader = document.createElement('th');
  totalHeader.textContent = 'Total';
  headerRow.appendChild(totalHeader);

  scoreTable.appendChild(headerRow);

  for (let player in scores) {
    const row = document.createElement('tr');
    const playerCell = document.createElement('td');
    playerCell.textContent = player;
    row.appendChild(playerCell);

    let total = 0;

    for (let category of categories) {
      const cell = document.createElement('td');
      cell.textContent = scores[player][category];
      row.appendChild(cell);

      total += scores[player][category];
    }

    const totalCell = document.createElement('td');
    totalCell.textContent = total;
    row.appendChild(totalCell);

    scoreTable.appendChild(row);
  }
}

// Define a function to play the game
function playGame(numPlayers) {
  const form = document.querySelector('form');
  form.remove();

  for (let i = 1; i <= numPlayers; i++) {
    const player = `Player ${i}`;
    scores[player] = {};

    for (let category of categories) {
      const answer = prompt(`${player}, enter a ${category}:`);
      scores[player][category] = answer;
    }
  }

  displayScores();
}
