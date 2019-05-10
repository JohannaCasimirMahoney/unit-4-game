// Track Number Of Wins
// Track Number Of Losses
// Trak A Target Number
// Track Score
// Track Each Chess Piece 

var wins = 0;
var losses = 0;
var targetNumber = 0;
var score = 0;
var king = 0;
var queen = 0;
var bishop = 0;
var knight = 0;

function settarget() {
    targetNumber = Math.floor(Math.random() * 30) + 1;
}

function reset() {
    targetNumber = 0;
    score = 0;
}
reset();

function startgame() {
    settarget();
    score = 0;

    //Random numbers for each chess pieces
    king = Math.floor(Math.random() * 20) + 1;
    queen = Math.floor(Math.random() * 10) + 1;
    bishop = Math.floor(Math.random() * 10) + 1;
    knight = Math.floor(Math.random() * 5) + 1;



    //Display of wins,losses,score, and target number

    $("#score").text("Score: " + score.toString());
    $("#wins").text("Wins: " + wins.toString());
    $("#losses").text("Losses: " + losses.toString());
    $("#targetNumber").text("Target Number: " + targetNumber.toString());

}

//wins
function youWin() {
    wins++;
    $("#wins").html("Wins: " + wins);
    alert("Awsome! ");
    reset();
    startgame()

}

//losses
function youLose() {
    losses++;
    $("#losses").html("Losses: " + losses);
    alert("Better Luck Next Time");
    reset();
    startgame()


};

$(document).ready(function () {
    startgame();

    //  Add clicks to each item to add points to user score

    // $("#wins").css('color', 'white');
    $("#king").click(function () {
        // $("#wins").css('color', 'white');
        $("#debug").text("You Choose The King");
        score += king;
        $("#score").text("Score: " + score.toString());

        if (score == targetNumber) {
            youWin();
        }
        if (score > targetNumber) {
            youLose();
        }

    });

    $("#queen").click(function () {
        // $("#wins").css('color', 'white');
        $("#debug").text("You Choose The Queen");
        score += queen;
        $("#score").text("Score: " + score.toString());

        if (score == targetNumber) {
            youWin();
        }
        if (score > targetNumber) {
            youLose();
        }



    });
    $("#bishop").click(function () {
        // $("#wins").css('color', 'white');
        $("#debug").text("You Choose The Bishop");
        score += bishop;
        $("#score").text("Score: " + score.toString());

        if (score == targetNumber) {
            youWin();
        }
        if (score > targetNumber) {
            youLose();
        }



    });
    $("#knight").click(function () {
        // $("#wins").css('color', 'white');
        $("#debug").text("You Choose The Knight");
        score += knight;
        $("#score").text("Score: " + score.toString());

        if (score == targetNumber) {
            youWin();
        }
        if (score > targetNumber) {
            youLose();
        }

    });


});



