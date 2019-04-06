//TODO: Track Number Of Wins
//TODO: Track Number Of Losses
//TODO: Trak A Target Number
//TODO: Score
//TODO: Track Chess Piece 

var wins = 0;
var looses = 0;
var TargetNumber = 0;
var score = 0;
var king = 0;
var queen = 0;
var bishop = 0;
var knight = 0;

function settarget() {
    TargetNumber = Math.floor(Math.random() * 29) + 1;
}


function startgame() {
    settarget();
    score = 0;

    king = Math.floor(Math.random() * 10) + 1; //add for all the other pieces
    queen = Math.floor(Math.random() * 15) + 1; //add for all the other pieces


    $("#score").text("Score: " + score.toString());
    $("#wins").text("Wins: " + wins.toString());
    $("#targetNumber").text("Target Number: " + TargetNumber.toString());
}



$(document).ready(function () {
    startgame();
    // $("#wins").css('color', 'white');
    $("#king").click(function () {
        // $("#wins").css('color', 'white');
        $("#debug").text("you choose the king");
        score += king;
        $("#score").text("Score: " + score.toString());
    });

    $("#queen").click(function () {
        // $("#wins").css('color', 'white');
        $("#debug").text("you choose the queen");
        score += queen;
        $("#score").text("Score: " + score.toString());
    });


});



//TODO: Add Item 1 needs a radom number 
//TODO: Add Item 2 needs a radom number 
//TODO: Add Item 3 needs a radom number 
//TODO: Add Item 4 needs a radom number 


//TODO: Add clicks to each item to add points to user score

//TODO: Check if users won
//TODO: Check if user lost

//TODO: Diplay 4 objects
//TODO: Display the wins
//TODO: Display the looses


//TODO: Prompt message after user looses game

//TODO: Restart the Game





//TODO: Use key events for numbers that players press
