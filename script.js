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

// Dichiaro delle variabili che salvino l'orario attuale.
const now = new Date();
// console.log(now);

const currentDays = now.getDate();
// console.log(currentDays);

const currentHours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
// console.log(currentHours);

const currentMinutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
// console.log(currentMinutes);

const currentSeconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
// console.log(currentSeconds);

const currentTime = `Giorno ${currentDays} ore ${currentHours}:${currentMinutes}:${currentSeconds}`;
// console.log(currentTime);

// Dichiaro delle variabili che salvino l'orario in cui scatta il Natale.
const christmasDay = 24;

const christmasHours = '0' + 0;

const christmasMinutes = '0' + 0;

const christmaSeconds = '0' + 0;

const christmasDate = `Giorno ${christmasDay} ore ${christmasHours}:${christmasMinutes}:${christmaSeconds}`;
console.log(christmasDate);





 




