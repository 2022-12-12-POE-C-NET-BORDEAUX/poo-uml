export class Rectangle {
  private longueur = 0
  private largeur = 0

  public getLongueur() {
    return this.longueur
  }

  public getLargeur() {
    return this.largeur
  }

  public setLongueur(longueur: number) {
    this.longueur = longueur
  }

  public setLargeur(largeur: number) {
    this.largeur = largeur
  }

  public calculSurface(): number {
    return this.longueur * this.largeur
  }

  public calculPerimetre():number{
    return 2*(this.longueur+this.largeur)
  }
}
