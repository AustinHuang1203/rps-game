
// event listerners
const btn4 = document.getElementById("button4");
btn4.addEventListener("click",reset);
const btn1 = document.getElementById("button1");
btn1.addEventListener("click",play_round1);
const btn2 = document.getElementById("button2");
btn2.addEventListener("click",play_round2);
const btn3 = document.getElementById("button3");
btn3.addEventListener("click",play_round3);

// indexes
let player_score = 0
let computer_score = 0


// rock = 7, paper = 8, scissors = 9

function getComputerChoice () {
    return random_index = Math.floor(Math.random()*3) + 7;
}

function reset(){
    player_score = 0;
    computer_score = 0;
    document.getElementById("pscore").innerHTML = `Player Score: ${player_score}`;
    document.getElementById("cscore").innerHTML = `Computer Score: ${computer_score}`;
    return;
}


// draw = 0, player win = 1, computer win = 2
function playervcomputer (x){
    const y = getComputerChoice();
    if (x == y){
       return 0;
    }
    else if (x>y && (x-y)==1){
        return 1;
    }
    else if (y>x && (y-x)==2){
        return 1;
    }
    else {
        return 2;
    }
}

function play_round1(){
    let result = playervcomputer(7);

    if (result == 0){
        document.getElementById("demo").innerHTML = "Draw!";
    }
    else if (result == 1){
        document.getElementById("demo").innerHTML = "Player Wins Round!";
        player_score += 1;
        document.getElementById("pscore").innerHTML = `Player Score: ${player_score}`;
    }
    else if (result == 2){
        document.getElementById("demo").innerHTML = "Computer Wins Round!";
        computer_score += 1;
        document.getElementById("cscore").innerHTML = `Computer Score: ${computer_score}`;
    }
    return;
}
function play_round2(){
    let result = playervcomputer(8);

    if (result == 0){
        document.getElementById("demo").innerHTML = "Draw!";
    }
    else if (result == 1){
        document.getElementById("demo").innerHTML = "Player Wins Round!";
        player_score += 1;
        document.getElementById("pscore").innerHTML = `Player Score: ${player_score}`;
    }
    else if (result == 2){
        document.getElementById("demo").innerHTML = "Computer Wins Round!";
        computer_score += 1;
        document.getElementById("cscore").innerHTML = `Computer Score: ${computer_score}`;
    }
    return;
}
function play_round3(){
    let result = playervcomputer(9);

    if (result == 0){
        document.getElementById("demo").innerHTML = "Draw!";
    }
    else if (result == 1){
        document.getElementById("demo").innerHTML = "Player Wins Round!";
        player_score += 1;
        document.getElementById("pscore").innerHTML = `Player Score: ${player_score}`;
    }
    else if (result == 2){
        document.getElementById("demo").innerHTML = "Computer Wins Round!";
        computer_score += 1;
        document.getElementById("cscore").innerHTML = `Computer Score: ${computer_score}`;
    }
    return;
}

/*
function play_round(){
    let choice = prompt("Choose your tool!")
    let result = playervcomputer(choice);

    if (result == 0){
        document.getElementById("demo").innerHTML = "Draw!";
    }
    else if (result == 1){
        document.getElementById("demo").innerHTML = "Player Wins Round!";
    }
    else if (result == 2){
        document.getElementById("demo").innerHTML = "Computer Wins Round!";
    }
    return;
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


*/