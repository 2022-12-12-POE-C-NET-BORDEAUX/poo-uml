import { Personnage } from './personnage'

export class Magicien extends Personnage {
  private baguetteMagique: string

  constructor(nom: string, dureeDeVie: number, baguetteMagique: string) {
    super(nom, dureeDeVie)
    this.baguetteMagique = baguetteMagique
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
