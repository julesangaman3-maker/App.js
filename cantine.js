// 2. DECLAREZ LES DONNEES DE LA COMMANDE.
const numeroCommande = 3;
const client = "Awa";
const codePlat = 2;
const quantite = 2;
const montantVerse = 3000;

console.log(numeroCommande);
console.log("client " + client + " ,code du plat " + codePlat + " , quantite" + quantite + " ,Montant versé " + montantVerse) 

//3. CALCULEZ LE MONTANT DE LA COMMANDE.
let prixunitaire = 0;

if (codePlat === 1) {
  prixunitaire = 1500;
} else if (codePlat === 2) {
  prixunitaire = 2000;
} else if (codePlat === 3) {
  prixunitaire = 1000;
} else {
  console.log("pas de plat disponible");

}

function calculerTotal(prixunitaire, quantite) {
    return prixunitaire * quantite;
}

const totalCommande = calculerTotal(prixunitaire, quantite);
console.log("Montant total de la commande est : " + totalCommande);

//4. AFFICHEZ LES RECAPITULATIF.
const total = calculerTotal(prixunitaire, quantite);
console.log(total)
for (let i = 1; i <= quantite; i++) {
  console.log("Portion " + i + " : " + prixunitaire + " FCFA");
}
console.log("Total : " + total + " FCFA");
console.log("Récapitulatif de la commande :");
console.log("Client : " + client);
console.log("Code du plat : " + codePlat);
console.log("Quantité : " + quantite);

//5. VERIFIEZ LE FONCTIONNEMENT.
if (montantVerse >= total) {
  console.log(`Monnaie à rendre : ${montantVerse - total} FCFA`);
} else {
  console.log(`Montant manquant : ${total - montantVerse} FCFA`);
}

