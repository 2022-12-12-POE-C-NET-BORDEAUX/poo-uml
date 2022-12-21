import { Personnage } from './personnage'

export class Zozo extends Personnage {
  private zozi: string
  constructor(nom: string, dureeDeVie: number, zozi: string) {
    super(nom, dureeDeVie)
    this.zozi = zozi
  }

  public getZozi() {
    return this.zozi
  }

  public setZozi(zozi: string) {
    this.zozi = zozi
  }

  rencontrer(): void {
    console.log('Je vais te zozoriser!!!')
  }
}
