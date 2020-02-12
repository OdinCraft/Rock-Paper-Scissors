let fstQstMark = document.getElementById('fstQM');
let secQstMark = document.getElementById('secQM');

let wlMessage = document.getElementById('wlMessage');

let playerWinsScore = document.getElementById('playerWinScore');
let cpuWinsScore = document.getElementById('cpuWinScore');

let rockImage = document.getElementById('rock');;
let paperImage = document.getElementById('paper');;
let scissorImage = document.getElementById('scissor');;

let random = 0;

let score={cpuScore:0, playerScore:0};


rockImage.addEventListener("click",function(){fstQstMark.src = rockImage.src;playGame();});
paperImage.addEventListener("click",function(){fstQstMark.src = paperImage.src; playGame();})
scissorImage.addEventListener("click",function(){fstQstMark.src = scissorImage.src; playGame();})

function playGame()
{
    random = Math.floor(Math.random()*3);
    switch(random)
    {
        case 0: secQstMark.src = rockImage.src;break;
        case 1: secQstMark.src = paperImage.src;break;
        case 2: secQstMark.src = scissorImage.src;break;
    }
    displayMessage();
    displayScore();
}

function displayMessage()
{
    if(secQstMark.src == rockImage.src || paperImage.src || scissorImage.src)
    {
        wlMessage.innerHTML = test();
        let win = test().search('win');
        let tie = test().search('tie');
        let lose = test().search('lost');
        if((win+1))
        score.playerScore++;
        else if((tie+1))
        {score.cpuScore++;score.playerScore++;}
        else if((lose+1))
        score.cpuScore++;
    }
}

function displayScore()
{
    playerWinsScore.innerHTML = score.playerScore;
    cpuWinsScore.innerHTML = score.cpuScore;
}

function test(random)
{
    //Win section
    if(fstQstMark.src == rockImage.src && secQstMark.src == scissorImage.src)
    return "Rock beats Scissor, You win!";
    if(fstQstMark.src == paperImage.src && secQstMark.src == rockImage.src)
    return "Paper beats Rock, You win!";
    if(fstQstMark.src == scissorImage.src && secQstMark.src == paperImage.src)
    return "Scissor beats Paper, You win!";

    //Tie section
    if(fstQstMark.src == rockImage.src && secQstMark.src == rockImage.src)
    return "Rock against Rock, It's a tie!";
    if(fstQstMark.src == paperImage.src && secQstMark.src == paperImage.src)
    return "Paper against Paper, It's a tie!";
    if(fstQstMark.src == scissorImage.src && secQstMark.src == scissorImage.src)
    return "Scissor against Scissor, It's a tie!";

    //Lose section
    if(fstQstMark.src == rockImage.src && secQstMark.src == paperImage.src)
    return "Paper beats Rock, You lost!";
    if(fstQstMark.src == paperImage.src && secQstMark.src == scissorImage.src)
    return "Scissor beats Paper, You lost!";
    if(fstQstMark.src == scissorImage.src && secQstMark.src == rockImage.src)
    return "Rock beats Scissor, You lost!";
}