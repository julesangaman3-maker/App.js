//2. DECLAREZ LES DONNEES DE LA COMMANDE.
const numeroCommande = 3;
const client = "Awa";
const codeplat = 1;
const quantite = 3;
const montantverse = 5000;

console.log(numeroCommande);
console.log("client " + client + " ,code du plat " + codeplat + " , quantite" + quantite + " ,Montant versé " + montantverse) 

//3. CALCULEZ LE MONTANT DE LA COMMANDE.
let prixunitaire = 0;

if (codeplat === 1) {
  prixunitaire = 1500;
} else if (codeplat === 2) {
  prixunitaire = 2000;
} else if (codeplat === 3) {
  prixunitaire = 1000;
} else {
  console.log("pas de plat disponible");
}

function calculerTotal(prixunitaire, quantite) {
  return prixunitaire * quantite;
}
