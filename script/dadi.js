
function go(){
    let player1 = document.getElementById("win-lose1").innerHTML = RandomNr(1, 6);
    let player2 = document.getElementById("win-lose2").innerHTML = RandomNr(1, 6);
    let containerEl = document.getElementById("die").innerHTML;
    
    
    if (player1 > player2){
        alert("win player1")
         
    }
    else if(player1 < player2){
        alert("win player2")
    }
    else{
        alert("tie")
    }

}

function RandomNr(start, end){
    end -= start;
    return Math.floor(Math.random() * end) + start;
}
