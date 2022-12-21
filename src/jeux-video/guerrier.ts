// DRY : Don't Repeat Yourself
// - Attributs en commun
// - comportement différents pour la méthode rencontrer()
// - Seul le sorcier a 2 armes
// - Redondance aux niveau des méthodes

import { EntiteVolant } from './entite-volante'
import { Personnage } from './personnage'

export class Guerrier extends Personnage implements EntiteVolant {
  private arme: string

  constructor(nom: string, dureeDeVie: number, arme: string) {
    super(nom, dureeDeVie)
    this.arme = arme
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

  voler(): void {
    console.log('Le guerre vol!!!!')
  }
}
