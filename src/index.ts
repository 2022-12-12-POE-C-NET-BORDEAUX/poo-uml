import { Avion } from './Avion'

const boeing: Avion = new Avion()
boeing.marque = 'Boeing'
boeing.modele = '737 Max'
boeing.nombreSieges = 180
boeing.couleur = 'blanche'
console.log(boeing)

const airbus = new Avion()
airbus.marque = 'Airbus'
airbus.modele = 'A320'
airbus.nombreSieges = 150
airbus.couleur = 'branche'
console.log(airbus)

// Modeliser un compte Bancaire
// - numéro de compte
// - le solde
// -> trouver les méthodes possibles 
