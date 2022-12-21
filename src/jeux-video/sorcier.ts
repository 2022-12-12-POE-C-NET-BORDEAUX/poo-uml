export class Sorcier {
  private nom: string
  private dureeDeVie: number
  private baguetteMagique: string
  private batonMagique: string

  constructor(
    nom: string,
    dureeDeVie: number,
    baguetteMagique: string,
    batonMagique: string
  ) {
    this.dureeDeVie = dureeDeVie
    this.baguetteMagique = baguetteMagique
    this.nom = nom
    this.batonMagique = batonMagique
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

  public getBatonMagique() {
    return this.batonMagique
  }

  public setBatonMagique(batonMagique: string) {
    this.batonMagique = batonMagique
  }

  rencontrer() {
    console.log('Je vais dire des truc chelous')
  }
}
