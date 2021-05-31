var utente = prompt('inserisci la tua email');

var utenti = ['leo@gmail.com', 'pollo@gmail.com', 'nano@gmail.com', 'giu@gmail.com'];

for(var i = 0; i < utenti.length; i++) 
{
    if(utente == utenti[i]){
        accettato = 'Bentornato utente ' + utente;
    }
    else{accettato ='errore mail non vailda'}
}
document.getElementById('mail').innerHTML = accettato