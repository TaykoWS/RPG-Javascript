class entity{
    // Cette classe correspond à une entité.
    // Elle sert à utiliser les caractéristiques pour créer une classe ou un ennemi
    name;
    pv;
    mp;
    atk;
    atkmag;
    def;
    defmag;
    dodge;
    speed;
    
    constructor(name, pv, mp, atk, atkmag, def, defmag, dodge, speed){
        this.name = name
        this.pv = pv
        this.mp = mp
        this.atk = atk
        this.atkmag = atkmag
        this.def = def
        this.defmag = defmag
        this.dodge = dodge
        this.speed = speed
    }
}

//c'est l'export de l'entité
export {entity};