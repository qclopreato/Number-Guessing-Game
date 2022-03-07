const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let humanScr = 0;
let computerScr = 0;

document.getElementById(`submit`).addEventListener(`click`, function(){
    let humanGuess = document.getElementById(`guess`).value;

    document.getElementById(`humanOut`).innerHTML = humanGuess;

    let computerGuess = Math.floor(Math.random()* 10);
    document.getElementById(`computer`).innerHTML = computerGuess;
 
    let randomNumber = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById(`outputNumber`).innerHTML = randomNumber;
    
    let humanDiff = Math.abs(randomNumber - humanGuess);
 
    let computerDiff = Math.abs(randomNumber - computerGuess);
 
    if(humanDiff > computerDiff){
     computerScr++;
     document.getElementById(`computerScr`).innerHTML = computerScr;
    } else if (humanDiff < computerDiff){
     humanScr++;
     document.getElementById(`humanScr`).innerHTML = humanScr;
    } else if (humanDiff === computerDiff){
     return;
    }
    if (humanScr === 10){
        document.getElementById(`winner`).innerHTML = `Human`;
        document.getElementById(`submit`).disabled = true;
    } else if (computerScr === 10){
        document.getElementById(`winner`).innerHTML = `Computer`;
        document.getElementById(`submit`).disabled = true;
    }
});

document.getElementById(`reset`).addEventListener(`click`, function(){
    location.reload();
});
