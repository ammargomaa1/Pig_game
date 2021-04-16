var score, roundScore, activePlayer;

init();

//


document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;


    //2.display the result
    var diceDom = document.querySelector('.dice');

    diceDom.style.display = 'block';

    diceDom.src = 'dice-' + dice + '.png';

    //3. uodate the round score if the rolled number was not 1
    if (dice > 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Move to next player
        nextPlayer();




        //document.querySelector(".player-0-panel").classList.remove("active");
        //document.querySelector('.player-1-panel').classList.add('active');

    }

});

document.querySelector(".btn-hold").addEventListener('click', function() {
    //Add current score to global score
    score[activePlayer] += roundScore;


    //Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];



    // Check if the player won the game
    if (score[activePlayer] >= 100) {
        document.getElementById('name-' + activePlayer).textContent = "WINNER CHECKEN DINNER !!!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        //Next player
        nextPlayer();
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',
    init
);

function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');


};
