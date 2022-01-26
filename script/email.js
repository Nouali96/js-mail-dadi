

function invio(){
    const consentiti = ["Topolino", "Paperino", "Pippo"];
   
    let email = document.getElementById("text-email").value;

    if(consentiti.includes(email)){
        alert("Accesso consentito")
    }

    else{
        alert("Accesso negato")
    }
    
}