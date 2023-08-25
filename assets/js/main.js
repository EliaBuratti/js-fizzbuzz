/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
 */




for (let i = 1; i <= 100; i++) {

    //creo delle costanti da poter richiamare per ogni if/else
    const square = document.getElementById('cards');

    const cardEl = document.createElement('div');

    if (i % 15 === 0 ) { //identifico i numeri divisibili per 15 e poi inserisco del markup
        square.append(cardEl);
        cardEl.classList.add('square', 'one');
        cardEl.append('FizzBuzz');
        console.log('FizzBuzz');
        

    } else if (i % 5 === 0) { //identifico i numeri divisibili per 5 e poi inserisco del markup
        square.append(cardEl);
        cardEl.classList.add('square', 'two');
        cardEl.append('Buzz');
        console.log('Buzz');

        

    } else if (i % 3 === 0) { //identifico i numeri divisibili per 3 e poi inserisco del markup
        square.append(cardEl);
        cardEl.classList.add('square', 'three');
        cardEl.append('Fizz');
        console.log('Fizz');

        

    } else { //altrimenti genero una card con il numero
        square.append(cardEl);
        cardEl.classList.add('square');
        cardEl.append(i);
        console.log(i);
    }

}