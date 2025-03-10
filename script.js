console.log("hello world muthafucka")
let randomInt;
let roboChoice;
let humanScore = 0
let roboScore = 0
let humanChoice;
const robo = document.querySelector(".robo")
// console.log(humanChoice)

function getRoboAndHumanChoice(){
    humanChoice = prompt("What is your Choice?")
    humanChoice.toLowerCase
    randomInt = Math.floor(Math.random() * 3) + 1
    switch(randomInt){
        case 1:
            roboChoice="scissor";
            break;
        case 2:
            roboChoice="paper";
            break;
        case 3:
            roboChoice="rock";
            break;
    }
}

function playRound(){
    getRoboAndHumanChoice()
    if(roboChoice === humanChoice){
        console.log(`draw! HumanScore=${humanScore} and RoboScore=${roboScore}`)
    }
    else if(roboChoice=="scissor" && humanChoice =="paper"){
        roboScore++
        console.log(`Robo won! RoboScore=${roboScore} and the HumanScore=${humanScore}`)
    }
    else if(roboChoice=="paper" && humanChoice=="rock"){
        roboScore++
        console.log(`Robo won! RoboScore=${roboScore} and the HumanScore=${humanScore}`)
    }
    else if(roboChoice=="rock" && humanChoice=="scissor"){
        roboScore++
        console.log(`Robo won! RoboScore=${roboScore} and the HumanScore=${humanScore}`)
    }
    else{
        humanScore++
        console.log(`Human Won!, RoboScore=${roboScore} and the HumanScore=${humanScore}`)
    }
}

for(let i=1; i<=5; i++){
    playRound()
}

if(humanScore>roboScore){
    console.log(`Human won with a score of ${humanScore}`)
    robo.textContent=`Human won with a score of ${humanScore}`
}
else{
    console.log(`Robo won with a score of ${roboScore}`)
    robo.textContent=`Robo won with a score of ${roboScore}`
}