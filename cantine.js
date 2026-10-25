// 2. DECLAREZ LES DONNEES DE LA COMMANDE.
const numeroCommande = 3;
const client = "Awa";
const codePlat = 1;
const quantite = 3;
const montantVerse = 5000;

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
