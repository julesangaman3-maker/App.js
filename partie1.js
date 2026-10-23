const prix1 = 1500;
const prix2 = 2500;
let Nb1500 = 0;
let Nb2500 = 0;
let Recette = 0;

for (let age = 11; age <= 20; age = age + 1) {

    if (age < 16) {
        console.log(age);
        console.log(prix1);
        Nb1500 = Nb1500 + 1;
    } else {
        console.log(age);
        console.log(prix2);
        Nb2500 = Nb2500 + 1;
    }
}

// AJOUT : afficher la recette totale
Recette = Nb1500 * prix1 + Nb2500 * prix2;
console.log("Recette totale :", Recette, "FCFA");

// AJOUT : afficher les nombres de billets vendus
console.log(`Le nombre de billets vendus à 1500 FCFA : ${Nb1500} personnes`);
console.log(`Le nombre de billets vendus à 2500 FCFA : ${Nb2500} personnes`);