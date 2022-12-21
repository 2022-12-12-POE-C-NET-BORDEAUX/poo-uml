export class Tirelire {
  // La variable montant est utilisée pour stocker le montant de la tirelire
  private montant: number

  // Le constructeur de la classe Tirelire initialise le montant à 0
  constructor() {
    this.montant = 0
  }

  // La méthode getMontant retourne le montant de la tirelire
  public getMontant(): number {
    return this.montant
  }

  // La méthode afficher affiche le montant de la tirelire
  public afficher(): void {
    if (this.montant === 0) {
      console.log('Vous êtes sans le sou.')
    } else {
      console.log(`Vous avez : ${this.montant} € dans votre tirelire.`)
    }
  }

  // La méthode secouer affiche le message "Bing bing" si la tirelire contient de l'argent
  public secouer(): void {
    if (this.montant > 0) {
      console.log('Bing bing')
    }
  }

  // La méthode remplir met un montant donné en paramètre dans la tirelire
  // Seuls les montants positifs sont acceptés
  public remplir(montant: number): void {
    if (montant > 0) {
      this.montant += montant
    }
  }

  // La méthode vider réinitialise le montant de la tirelire à 0
  public vider(): void {
    this.montant = 0
  }

  // La méthode puiser puise un montant donné en paramètre de la tirelire
  // Si le montant est négatif, il est ignoré
  // Si le montant est plus grand que le montant disponible, la tirelire est vidée
  public puiser(montant: number): void {
    if (montant > 0) {
      if (montant > this.montant) {
        this.montant = 0
      } else {
        this.montant -= montant
      }
    }
  }

  // La méthode calculerSolde retourne la différence entre le montant de la tirelire et le budget donné en paramètre
  // Si le budget est négatif ou nul, la méthode retourne le montant de la tirelire
  public calculerSolde(budget: number): number {
    if (budget <= 0) {
      return this.montant
    }
    return this.montant - budget
  }
}
