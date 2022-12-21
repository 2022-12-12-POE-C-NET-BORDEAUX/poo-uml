import { EntiteVolant } from './entite-volante'
import { Magicien } from './magicien'

export class Sorcier extends Magicien implements EntiteVolant {
  private batonMagique: string

  constructor(
    nom: string,
    dureeDeVie: number,
    baguetteMagique: string,
    batonMagique: string
  ) {
    super(nom, dureeDeVie, baguetteMagique)
    this.batonMagique = batonMagique
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

  voler(): void {
    console.log('Je vais me servir de mon baton magique')
  }
}
