const prix1 = 1500;
const prix2 = 2500;
const reduction = 500;
let Nb1500 = 0;
let Nb2500 = 0;
let Recette = 0;

for (let age = 11; age <= 20; age = age + 1) {

    if (age < 16) {
        console.log(age);
        console.log(prix1, "FCFA");
        Nb1500++;
        Recette = Recette + prix1;
    } else if (age >= 18) {
        console.log(age);
        console.log(prix2 - reduction, "FCFA");
        Nb2500++;
        Recette = Recette + prix2 - reduction;
    } else {
        console.log(age);
        console.log(prix2, "FCFA");
        Nb2500++;
        Recette = Recette + prix2;
    }

}

//  la recette totale
console.log("Recette totale :", Recette, "FCFA");

//   billets vendus
console.log("Le nombre de billets vendus à 1500 FCFA :", Nb1500);
console.log("Le nombre de billets vendus à 2500 FCFA :", Nb2500);