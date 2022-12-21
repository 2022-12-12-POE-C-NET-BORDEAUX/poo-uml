// import { Avion } from './Avion'
// import { Avion } from './Avion'
// import { CompteBancaire } from './CompteBancaire'
// import { Rectangle } from './exercices/Rectangle'

// const boeing: Avion = new Avion()
// boeing.marque = 'Boeing'
// boeing.modele = '737 Max'
// boeing.nombreSieges = 180
// boeing.couleur = 'blanche'
// console.log(boeing)

// const airbus = new Avion()
// airbus.marque = 'Airbus'
// airbus.modele = 'A320'
// airbus.nombreSieges = 150
// airbus.couleur = 'branche'
// console.log(airbus)

// Modeliser un compte Bancaire
// - numéro de compte
// - le solde
// -> trouver les méthodes possibles
// const monCompte = new CompteBancaire()
// monCompte.setSolde(60)
// monCompte.setNumeroDeCompte('1234567897467364')

// console.log(`Numéro de compte : ${monCompte.getNumeroDeCompte()}`)
// console.log(`Solde : ${monCompte.getSolde()}`)

// let rectangle = new Rectangle()
// rectangle.setLongueur(500)
// rectangle.setLargeur(250)
// console.log(`Périmètre : ${rectangle.calculPerimetre()}m`)
// console.log(`Surface : ${rectangle.calculSurface()}m2`)

// new Rectangle(500, 250)
// new CompteBancaire('235647236754637453267', 30)
// new Avion('Beoing', '737 max', 150, 'rouge')

// const boeing = new Avion('Boeing', '737 Max', 190, 'blanche')
// console.log(boeing)

import { Guerrier } from './jeux-video/guerrier'
import { Magicien } from './jeux-video/magicien'
// import { Personnage } from './jeux-video/personnage'
import { Sorcier } from './jeux-video/sorcier'

const chris = new Guerrier('Christian', 100, 'Kalashnikov AK-47')
const nico = new Magicien('Nicolas', 1000, 'NicoGique')
const jean = new Sorcier('Jean', 500, 'JeanBague', 'JeanBat')
// const moi = new Personnage('Luc', 600)

chris.setNom('Chrizo')

console.log(chris, nico, jean)
