import CompteBancaireSo from "./CompteBancaire.js";




const monCompte = new CompteBancaire();


monCompte.deposer(100);

monCompte.retirer(30);

monCompte.afficherSolde();

console.log(monCompte)

