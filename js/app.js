//palindromia

//chiedere all'utente una parola
let parolaInserita = prompt('Inserisci qui una parola per verificare se è palindroma.')
console.log(parolaInserita)

let parola =parolaInserita.toLocaleLowerCase()   //trasforma tutti i caratteri in minuscolo
console.log(parola)

//capire se la parola è palindroma


//invertire le senso delle lettere della parola
//creare una nuova variabile con la nuova parola specchiata

let reverseWord = revertWord(parola);
console.log(reverseWord);

//confrontare le due stringhe

if( parola === reverseWord){
    alert('Parola Palindroma');
}else{
    alert('Parola NON Palindroma');
}

//funzione per creare una nuova parola specchiata
function revertWord(parolaDaRevertare){

    let reverseWord = '' ;

    //impostare un ciclo che prende l'ultima lettera e la porta in i 0 e così via
    for(let i = parolaDaRevertare.length -1 ; i >= 0; i--){

        reverseWord += parolaDaRevertare[i];

    }
    return reverseWord;
}



//pari e dispari
//utente inserisce un numero da 1 a 5
// pc genera un numero random da 1 a 5
//somma i numeri
//se somma pari 
    //utente vince
//altrimenti
    //pc vince
//comunicare risultati