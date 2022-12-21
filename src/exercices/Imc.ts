export class Patient {
  // Les variables poids et taille sont utilisées pour stocker le poids et la taille du patient
  private poids = 0
  private taille = 0

  // Le constructeur de la classe Patient prend le poids et la taille en paramètres et les initialise
  constructor(poids: number, taille: number) {
    this.setTaille(taille)
    this.setPoids(poids)
  }

  // La méthode getPoids retourne le poids du patient
  public getPoids(): number {
    return this.poids
  }

  // La méthode getTaille retourne la taille du patient
  public getTaille(): number {
    return this.taille
  }

  // La méthode getIMC calcule et retourne l'IMC du patient
  public getIMC(): number {
    return this.poids / (this.taille * this.taille)
  }

  public setPoids(poids: number) {
    if (poids <= 0) {
      console.log('Le poids doit toujours être > 0')
    } else {
      this.poids = poids
    }
  }

  public setTaille(taille: number) {
    if (taille <= 0) {
      console.log('Le poids doit toujours être > 0')
      return
    }
    this.taille = taille
  }

  // La méthode afficher affiche les données du patient ainsi que son IMC
  public afficher(): void {
    console.log(`Poids: ${this.poids} kg`)
    console.log(`Taille: ${this.taille} m`)
    console.log(`IMC: ${this.getIMC()}`)
  }
}

// Pour utiliser cette classe, vous pouvez créer une instance de la classe Patient et appeler les différentes méthodes

// const patient = new Patient(75, 1.75)
// patient.afficher()

// console.log(`Poids: ${patient.getPoids()} kg`)
// console.log(`Taille: ${patient.getTaille()} m`)
