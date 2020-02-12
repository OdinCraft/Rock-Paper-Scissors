let langX = {questionTxt:'Quer jogar dnovo?',
             computerWins: '\nComputador venceu: ',
             playerWins:'\nPlayer venceu: ',
             gameIntro:'Pedra, papel ou tesoura?'};

let Options = ['PEDRA','PAPEL','TESOURA'];

let Outcome = {youWin:'\nVoce venceu!',
               youLose:'\nVoce perdeu!',
               aTie:"\nIt's a tie!"};

let choiceIndex = {computerIndex:0,playerIndex:0};
let score = {player:0,computer:0};

function scoreDisplay(score)
{let str = langX.computerWins + (score.computer) + langX.playerWins + (score.player); return str;}

function win(matchInfo,scoreDisplay)
{   alert(matchInfo + Outcome.youWin + scoreDisplay);   }

function lose(matchInfo,scoreDisplay)
{   alert(matchInfo + Outcome.youLose + scoreDisplay);   }

function tie(matchInfo,scoreDisplay)
{   alert(matchInfo + Outcome.aTie + scoreDisplay);   }

function question(questText)
{    confirm(questText) ? play() : 0;   }

function checkPlayerChoice(playerChoice){
    for(let i = 0; i <= 2; i++)
            if( playerChoice == Options[i])
                return i;
}

function play(){
    let matchInfo ='';
    choiceIndex.computerIndex = Math.floor(Math.random()*3);
    let playerChoice = prompt(langX.gameIntro);

    playerChoice = playerChoice.toUpperCase();
    choiceIndex.playerIndex = checkPlayerChoice(playerChoice);

    matchInfo = Options[choiceIndex.computerIndex] + ' x ' + Options[choiceIndex.playerIndex];
    test(matchInfo,choiceIndex,score);
    question(langX.questionTxt);
}

function test(matchInfo,choiceIndex,score){
    //Win section
    if(choiceIndex.computerIndex == 0 && choiceIndex.playerIndex == 1)
    {score.player++; win(matchInfo,scoreDisplay(score));}
    else if(choiceIndex.computerIndex == 1 && choiceIndex.playerIndex == 2)
    {score.player++; win(matchInfo,scoreDisplay(score));}
    else if(choiceIndex.computerIndex == 2 && choiceIndex.playerIndex == 0)
    {score.player++; win(matchInfo,scoreDisplay(score));}

    //Tie section
    if(choiceIndex.computerIndex == 0 && choiceIndex.playerIndex == 0)
    {tie(matchInfo,scoreDisplay(score));}
    else if(choiceIndex.computerIndex == 1 && choiceIndex.playerIndex == 1)
    {tie(matchInfo,scoreDisplay(score));}
    else if(choiceIndex.computerIndex == 2 && choiceIndex.playerIndex == 2)
    {tie(matchInfo,scoreDisplay(score));}

    //Lose section
    if(choiceIndex.computerIndex == 0 && choiceIndex.playerIndex == 2)
    {score.computer++; lose(matchInfo,scoreDisplay(score));}
    else if(choiceIndex.computerIndex == 1 && choiceIndex.playerIndex == 0)
    {score.computer++; lose(matchInfo,scoreDisplay(score));}
    else if(choiceIndex.computerIndex == 2 && choiceIndex.playerIndex == 1)
    {score.computer++; lose(matchInfo,scoreDisplay(score));}    
}
//play();