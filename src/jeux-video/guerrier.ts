// DRY : Don't Repeat Yourself
// - Attributs en commun
// - comportement différents pour la méthode rencontrer()
// - Seul le sorcier a 2 armes
// - Redondance aux niveau des méthodes
export class Guerrier {
  private nom: string
  private dureeDeVie: number
  private arme: string

  constructor(nom: string, dureeDeVie: number, arme: string) {
    this.dureeDeVie = dureeDeVie
    this.arme = arme
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

  public getArme() {
    return this.arme
  }

  public setArme(arme: string) {
    this.arme = arme
  }

  rencontrer() {
    console.log('Je vais te tuer')
  }
}
