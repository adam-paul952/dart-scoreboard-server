const prompt = require('prompt-sync')();

// Ask user for number of players
function getNumOfPlayers() {
    const baseball = [];
    let numberOfPlayers = prompt("How many players would you like to play with today? : ");
    if (numberOfPlayers) {
        for (let i = 1; i <= numberOfPlayers; i++) {
            const player = {
                playerName : "Player " + i,
                score: 0,
                inning: 1,
                get score() {
                    return this.score;
                },
                set score(score) {
                    this.score = score;
                },
                incrementInning() {
                    this.inning ++;
                }
            };
            baseball.push(player);
        }
    } return baseball;
}

// Create a board of arrays with number of players to hold and compute scores
const createGame = () => {
    let game = getNumOfPlayers();
    let numOfPlayers = getNumOfPlayers().length;
    let inning = 1;
    for (let i = 1; i <= numOfPlayers; i ++) {
        console.log(`Player ${i} it's your turn`);
        let currentScore = prompt(`Your score was? : `);
        currentScore += game.score;
        console.log(`CurrentScore is: ${currentScore}`)
    }
    // for (let i = 1; i <= 9; i++) {
    //     console.log(inning);
    //     inning++;
    //     for (let j = 1; j <= game.length; j++) {
    //         console.log(`Player ${i}'s Turn:`);
    //         let score = prompt("Your score was? : ")
            // game.push(score);
        // }
    // }
    // console.log(numOfPlayers);
    console.log(game);
}

createGame();

/*
 * Inside this script a number of players are returned from the user.
 * Each player then has their own array length = 9 (normal game) to input their scores.
 * Once the game reaches its maximum length (9 innings) the computed scores for all players
 * will be displayed to console, setting the winner to the player with the highest points.
*/

/*
 * Score input has to be a calculator style input that updates scores respectively
 * Loop through innings and players, updating score, until a winner is declared
*/

/* Create class method to increment inning, method to set score
 * Loop through players until game over
*/