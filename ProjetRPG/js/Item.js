class Item{
    // Cette classe correspond à une entité.
    // Elle sert à utiliser les caractéristiques pour créer une classe ou un ennemi
    name;
    value;
    prix;
    //compter combien fois l'acheter
    countUse;
    
    constructor(name,value,prix,countUse){
        this.name = name
        this.value=value
        this.prix=prix
        this.countUse=countUse
    }
}
let PotionAtk= new Item("PotionAtk", 5,2,0);
let PotionDef= new Item("PotionDef", 5,2,0);
let PotionAtkMag= new Item("PotionAtkMag", 7,8,0);
let PotionPv= new Item("PotionPv", 50,8,0);
let PotionMp= new Item("PotionMp", 10,8,0);
export {PotionAtk,PotionAtkMag,PotionDef,PotionPv,PotionMp};
