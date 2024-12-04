class CompteBancaire {
    constructor() {
        this.#solde = 0;
    }
}

export class CompteBancaire {
    #solde = 0;


    deposer(montant) {
        if (montant > 0) {
            this.#solde += montant;
            console.log(`${montant}€ ont été ajoutés au compte.`);
        } else {
            console.log("Le montant à déposer doit être positif.");
        }
    }


    retirer(montant) {
        if (montant > 0) {
            if (this.#solde >= montant) {
                this.#solde -= montant;
                console.log(`${montant}€ ont été retirés de votre compte.`);
            } else {
                console.log("Fonds insuffisants.");
            }
        } else {
            console.log("Le montant doit être positif.");
        }
    }

    // Méthode pour afficher le solde du compte
    afficherSolde() {
        console.log(`Solde : ${this.#solde}`);
    }
}


