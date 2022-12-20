export class CompteBancaire {
  private numeroDeCompte = ''
  private solde = 0

  // Accesseurs(getters)
  public getNumeroDeCompte() {
    return this.numeroDeCompte
  }

  public getSolde() {
    return this.solde
  }
  // Manipulateurs(setters)
  public setNumeroDeCompte(numeroDeCompte: string) {
    if (numeroDeCompte.length !== 16) {
      console.log('Le numéro de compte doit avoir 16 caractères')
    } else {
      this.numeroDeCompte = numeroDeCompte
    }
  }

  public setSolde(solde: number) {
    if (solde <= 0) {
      console.log('Le solde doit être positif')
    } else {
      this.solde = solde
    }
  }

  //   depot() {
  //     console.log('Dépot en cours...')
  //   }
  //   retrait() {
  //     console.log('Retrait en cours...')
  //   }
}
