"use client"
// Les tableaux
// http://localhost:3000/alone/exercise/02.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"; 
const exercice = () => {
init()

// ✔️ Début de l'exercice

// 🐶 Créer une variable `names` mais sans initiliser de valeurs
//  ajoute ensuite 'John' et 'doe' à `name` sans utiliser la méthode `push()`
let names: string[] = []

names[0] = 'John'
names[1] = 'Doe'
// 🤖 affiche 'Il y a 2 noms' dans le navigateur grace à `displayText` et `.length`
displayText(`Il y a ${names.length} noms`)
// 🐶 Créer une constante `games` et initialise avec un tableau vide
// avec la méthode `push()` ajoute 3 jeux
// ⛏️ const games
// 🤖 affiche le nombre d'élément à l'ecran
const games: string[] = []
games.push('Mario', 'Zelda', 'Tetris')
displayText(`Il y a ${games.length} jeux`)
// 🐶 Créer une constante `things` : un tableau qui peut prendre n'importe quel type de donnée
// ⛏️ const things
const things: any[] = []
// avec la méthode `push()` ajoute 3 types de données différents
// ⛏️ things.push(1)
things.push('Hello')
things.push(1)
things.push(true) 

// 🤖 affiche le nombre d'élément à l'ecran
displayText(`Il y a ${things.length} choses: ${things}`)
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
};
export default () => <App exercice={exercice} />;