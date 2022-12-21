export class Avion {
  private marque: string
  private modele: string
  private nombreSieges: number
  private couleur: string

  constructor(
    marque: string,
    modele: string,
    nombreSieges: number,
    couleur: string
  ) {
    this.marque = marque
    this.modele = modele
    this.nombreSieges = nombreSieges
    this.couleur = couleur
  }
  // constructor(
  //   private marque: string,
  //   private modele: string,
  //   private nombreSieges: number,
  //   private couleur: string
  // ) {}

  voler() {
    console.log('Vrrrr')
  }

  decoller() {
    console.log('Décollage...')
  }

  atterir() {
    console.log('Atterissage...')
  }
}
