//Attention au chemin du fichier entité
import {entity} from "./entity.js"

class classes extends entity{
    // Cette classe permet d'utiliser les classes pour le joueur
    // Ajout de l'attribut "Gold" pour l'or du joueur ou de la classe (à voir)
    gold;

    constructor(name, pv, mp, atk, atkmag, def, defmag, dodge, speed, gold){
        super(name, pv, mp, atk, atkmag, def, defmag, dodge, speed)
        this.gold = gold
    }
}

// Variables des classes pour le joueur
let Warrior = new classes("Warrior", 120, 0, 20, 0, 10, 0, 10, 5, 2); // Guerrier classique, mélange de grande vitalité et bonne défense
                                                                        // Classe sans pouvoir magique.

let Mage = new classes("Mage", 80, 20, 2, 20, 0, 8, 2, 10, 2); // Mage classique, mélange de grand pouvoir magique et bonne défense magique 
                                                                // N'attaque pas au corps à corps.

let Thief = new classes("Thief", 50, 20, 10, 15, 4, 6, 15, 20, 2); // voleur classique, mélange de grande vitesse et d'esquive 
                                                                 // A des pouvoir magique pour jouer plus vite.

let Monk = new classes("Monk", 80, 10, 30, 20, 8, 8, 5, 15, 2); // Guerrier mage, mélange de grande vitalé et grande force 
                                                                // Ne peux pas utiliser d'arme, il se bat avec ses poings mais peut utiliser de la magie, 
                                                                // pour augmenter sa défense magique et physique. 

let Engineer = new classes("Engineer", 100, 5, 25, 15, 4, 4, 15, 10, 2); // Mage voleur, mélange de grande vitesse et grande magie 
                                                                        // Les valeurs de ses attaques au corps à corps sont aléatoire, 
                                                                        // peut utiliser de la magie pour augmenter les coups critique.

let Merchant = new classes("Merchant", 100, 5, 20, 25, 5, 10, 5, 5, 2); // Hybride, grande esquive et moyen dans tout
                                                                        // Gagne + d'or que les autres classes, et commence avec de l'or 
                                                                                                                                             
export {Warrior, Mage, Thief, Monk, Engineer, Merchant};