// rock = 7, paper = 8, scissors = 9

function getComputerChoice () {
    return random_index = Math.floor(Math.random()*3) + 7;
}

// draw = 0, player win = 1, computer win = 2
function playervcomputer (x){
    const y = getComputerChoice();
    if (x === y){
       ;
    }
    else if (x>y){
        return 1;
    }
    else {
        return 2;
    }
}

function play_round(){
    let choice = prompt("Choose your tool!")
    let result = playervcomputer(choice);

    if (result == 0){
        return "Draw!";
    }
    else if (result == 1){
        p_score = p_score + 1;
        return "Player Wins Round!";
    }
    else {
        c_score = c_score + 1;
        return "Computer Wins Round!";
    }
}

function init_game(n){
    return play_game(n,0,0);
}

function play_game(n,i,j){
    if (n<1 || n%1 != 0){
        return "Error! Please choose a whole number of at least one";
    }
    let p_score = i;
    let c_score = j;
    let choice = prompt("Choose your tool!")
    let result = playervcomputer(choice);

    if (result == 0){
        console.log("Draw!");
    }
    else if (result == 1){
        p_score = p_score + 1;
        console.log("Player Wins Round!")
    }
    else {
        c_score = c_score + 1;
        console.log("Computer Wins Round!")
    }


    if (p_score == n){
        return "Player Wins!";
    }
    else if (c_score == n){
        return "Computer Wins!";
    }
    else {return play_game(n,p_score,c_score);}

}