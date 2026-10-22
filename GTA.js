const objectif = 50000;
const cotisationParSemaine = 4000;
let total = 0;
let semaines = 0;

while (total < objectif) {
  total += cotisationParSemaine;
  semaines++;
}

console.log(`Il faut ${semaines} semaines. Total cotise : ${total}.`);
