//Attention au chemin du fichier entité
import {entity} from './entity.js'

class Monstres extends entity{
    //variable gold du monstre
    gold ;

    constructor(name, pv, mp, atk, atkmag, def, defmag, dodge, speed, gold){
        super (name, pv, mp, atk, atkmag, def, defmag, dodge, speed)
        this.gold= gold;

    }
    
}


function pourcentageStat(classeStat)
{
    //Je donne un nombre aléatoire entre 0 et 3
    let randomIndex = Math.floor(Math.random() * Math.floor(4));
    let img;
    if(randomIndex < 2) // La stat devient inférieur de 10 %
    {
        classeStat.name= "Demon";
        classeStat.pv -= classeStat.pv * 0.10;
        classeStat.mp -= classeStat.mp * 0.10;
        classeStat.atk -= classeStat.atk * 0.10;
        classeStat.atkmag -= classeStat.atkmag * 0.10;
        classeStat.def -= classeStat.def * 0.10;
        classeStat.defmag -= classeStat.defmag * 0.10;
        classeStat.dodge -= classeStat.dodge * 0.10;
        classeStat.speed -= classeStat.speed * 0.10;
    }
    else // La stat devient supérieur de 10 %
    {
        classeStat.name="Blade";
        classeStat.pv += classeStat.pv * 0.10;
        classeStat.mp += classeStat.mp * 0.10;
        classeStat.atk += classeStat.atk * 0.10;
        classeStat.atkmag += classeStat.atkmag * 0.10;
        classeStat.def += classeStat.def * 0.10;
        classeStat.defmag += classeStat.defmag * 0.10;
        classeStat.dodge += classeStat.dodge * 0.10;
        classeStat.speed += classeStat.speed * 0.10;
    }

}
export {pourcentageStat};