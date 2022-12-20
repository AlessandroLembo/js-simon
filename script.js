console.log('JS OK');

/*
TRACCIA: 

In pieno tema natalizio sfruttiamo le timing functions per fare il conto alla 
rovescia per il Natale!  Ogni secondo il nostro countdown dovrà scalare 
fino alla mezzanotte del 25 dicembre!
Vi sono forniti in allegato HTML e CSS, cercate di analizzarli per capire come 
intervenire sul countdown.
Questo esercizio richiede un po' di ricerca ma anche un po' di domande 
che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano dal Natale?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/


// Prendo gli elementi dalla pagina.
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
// console.log(daysElement, hoursElement, minutesElement, secondsElement);


// Dichiaro una funzione per avviare il count down.
const countDown = setInterval(function() {
   
    // Dichiaro una variabile che salvi l'orario in cui scatta il Natale (in millesecondi).
    const christmasDate = new Date ("Dec 25, 2022 00:00:00").getTime();
     
    // Dichiaro una variabile che salvi l'orario attuale (in millesecondi).
    const now = new Date().getTime();
    
    // Calcolo (in millesecondi), la differenza tra la data di Natale e quella attuale.
    const differenceTime = christmasDate - now;


}, 1000);











 




