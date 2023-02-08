console.log('ciao');

//palindromia
//chiedere all'utente una parola
let parolaInserita = prompt('Inserisci qui una parola per verificare se è palindroma.')
console.log(parolaInserita)

let parola =parolaInserita.toLocaleLowerCase()
console.log(parola)

//capire se la parola è palindroma

//trasfromare parola in array
let lettere = parola.charAt(i)

//verifcare le lettere(ciclo)
for(let i = 0; i < (parola.length)/2 ; i++){
    //verificare se la prima lettera è uguale all'ultima
    if([i] ===((parola.length) -1 -i) ){
        console.log(i);
        console.log(parola.length);
        
       console.log(true)
    }

}
//comunicare all'utente se è palindroma o non lo è


//pari e dispari
//utente inserisce un numero da 1 a 5
// pc genera un numero random da 1 a 5
//somma i numeri
//se somma pari 
    //utente vince
//altrimenti
    //pc vince
//comunicare risultati