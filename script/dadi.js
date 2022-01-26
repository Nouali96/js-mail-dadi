
function go(){
    let player1 =  RandomNr(1, 6);
    let player2 =  RandomNr(1, 6);
    const containerEl1 = document.getElementById("die1");
    const containerEl2 = document.getElementById("die2");
    const whowin = document.getElementById("who-win");

    
    if (player1 > player2){
        whowin.innerHTML = "<p> PLAYER 1 WINNER</p>"     
    }
    else if(player1 < player2){
        whowin.innerHTML = "<p> PLAYER 2 WINNER</p>"
    }
    else{
        whowin.innerHTML = "<p> PLAYER 1 TIE PLAYER 2</p>"
    }
    switch(player1){
        case 1:
            containerEl1.innerHTML = "<i class='fas fa-dice-one size'></i>"
        break;
        case 2:
            containerEl1.innerHTML = "<i class='fas fa-dice-two size'></i>"
        break;
        case 3:
            containerEl1.innerHTML = "<i class='fas fa-dice-three size'></i>"
        break;
        case 4:
            containerEl1.innerHTML = "<i class='fas fa-dice-four size'></i>"
        break;
        case 5:
            containerEl1.innerHTML = "<i class='fas fa-dice-five size'></i>"
        break;
        case 6:
            containerEl1.innerHTML = "<i class='fas fa-dice-six size'></i>"
        break;
        } 
    switch(player2){
        case 1:
            containerEl2.innerHTML = "<i class='fas fa-dice-one size'></i>"
        break;
        case 2:
            containerEl2.innerHTML = "<i class='fas fa-dice-two size'></i>"
        break;
        case 3:
            containerEl2.innerHTML = "<i class='fas fa-dice-three size'></i>"
        break;
        case 4:
            containerEl2.innerHTML = "<i class='fas fa-dice-four size'></i>"
        break;
        case 5:
            containerEl2.innerHTML = "<i class='fas fa-dice-five size'></i>"
        break;
        case 6:
            containerEl2.innerHTML = "<i class='fas fa-dice-six size'></i>"
        break;
        } 
}

function RandomNr(start, end){
    end -= start;
    return Math.floor(Math.random() * end) + start;
}
