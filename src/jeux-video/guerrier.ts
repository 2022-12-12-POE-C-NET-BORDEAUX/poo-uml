export class Guerrier {
  private nom: string
  private dureeDeVie: number
  private arme: string

  constructor(nom: string, dureeDeVie: number, arme: string) {
    this.dureeDeVie = dureeDeVie
    this.arme = arme
    this.nom = nom
  }

  rencontrer() {
    console.log('Je vais te tuer')
  }
}
