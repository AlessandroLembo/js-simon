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

// Dichiaro una variabile che salvi l'orario attuale (in millesecondi).
const now = new Date().getTime();
// console.log(now);

// Dichiaro una variabile che salvi l'orario in cui scatta il Natale (in millesecondi).
const christmasDate = new Date ("Dec 24, 2022 00:00:00").getTime();
// console.log(christmasDate);

// Calcolo quanto manca al natale (in millesecondi).
const diff = christmasDate - now;
console.log(diff);










 




