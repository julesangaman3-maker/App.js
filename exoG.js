const billet1 = 1500;
const billet2 = 2500;
let nb1500 = 0;
let nb2500 = 0;

for (let age = 11; age <= 20; age++) {
  if (age < 16) {
    console.log(`Âge : ${age}, prix du billet : ${billet1}`);
    nb1500++;
  } else {
    console.log(`Âge : ${age}, prix du billet : ${billet2}`);
    nb2500++;
  }
}

const recette = billet1 * nb1500 + billet2 * nb2500;

console.log(`Nombre de billets à ${billet1} : ${nb1500}`);
console.log(`Nombre de billets à ${billet2} : ${nb2500}`);
console.log(`Recette totale : ${recette}`);

