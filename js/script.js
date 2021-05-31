var utente = prompt('inserisci la tua email');

var utenti = ['leo@gmail.com', 'pollo@gmail.com', 'nano@gmail.com', 'giu@gmail.com'];

var accettato ='errore mail non vailda'

for(var i = 0; i < utenti.length; i++) 
{
    if(utente == utenti[i]){
        accettato = 'Bentornato utente ' + utente;
    }
    
}
document.getElementById('mail').innerHTML = accettato

// parte 2 
var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

var tuocognome = prompt('Inserisci il tuo cognome');

cognomi.push(tuocognome);
document.getElementById('lista').innerHTML += cognomi;

var posizione = 0;
for (var i = 0; i < cognomi.length; i++) {
    if (tuocognome == cognomi[i]){
        posizione = i + 1;
    }
}
document.getElementById('position').innerHTML += posizione;