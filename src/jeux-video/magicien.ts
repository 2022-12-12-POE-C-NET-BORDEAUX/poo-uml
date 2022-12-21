export class Magicien {
  private nom: string
  private dureeDeVie: number
  private baguetteMagique: string

  constructor(nom: string, dureeDeVie: number, baguetteMagique: string) {
    this.dureeDeVie = dureeDeVie
    this.baguetteMagique = baguetteMagique
    this.nom = nom
  }

  public getNom() {
    return this.nom
  }

  public setNom(nom: string) {
    this.nom = nom
  }

  public getDureeDeVie() {
    return this.dureeDeVie
  }

  public setDureeDeVie(dureeDeVie: number) {
    this.dureeDeVie = dureeDeVie
  }

  public getBaguetteMagique() {
    return this.baguetteMagique
  }

  public setBaguetteMagique(baguetteMagique: string) {
    this.baguetteMagique = baguetteMagique
  }

  rencontrer() {
    console.log('Je vais te faire des trucs')
  }
}
