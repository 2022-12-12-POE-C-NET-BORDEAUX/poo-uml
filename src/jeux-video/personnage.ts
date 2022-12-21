export abstract class Personnage {
  private nom: string
  private dureeDeVie: number

  constructor(nom: string, dureeDeVie: number) {
    this.dureeDeVie = dureeDeVie
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

  abstract rencontrer(): void
}
