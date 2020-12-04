import {Warrior, Mage, Thief, Monk, Engineer, Merchant} from "./classes.js"
import { pourcentageStat } from "./Monstres.js";
import {PotionAtk,PotionAtkMag,PotionDef,PotionPv,PotionMp} from "./Item.js";
//function oblique le joueur remplir input
function IsEmpty(){
    if($(input).val()=="")
    {
        return false;
    }
    return true;
}
// Pour afficher ou cacher un élément
$("#open").click(function(e)
{
    e.preventDefault();
    $("#box-details").removeClass("hide");
})
$("#open1").click(function(e)
{
    e.preventDefault();
    $("#box-details1").removeClass("hide");
})
$("#close").click(function(e)
{
    e.preventDefault();
    $("#box-details").addClass("hide");
})
$("#close1").click(function(e)
{
    e.preventDefault();
    $("#box-details1").addClass("hide");
})
// récupérer les valeurs dans Form et stocker les données en utilisant localStorage
$(".btn").click(function(){
    const name=$("#name").val();
    const choix =$("#choix").val();
    localStorage.setItem("name",name);
    localStorage.setItem("choix",choix);

})
// récupérer les données stockés et afficher 
$("#getname").text(localStorage.getItem("name"));
$("#getchoix").text(localStorage.getItem("choix"))
switch(localStorage.getItem("choix")){
    case 'Warrior':
        $("#getpv").text(Warrior.pv);
        $("#getmp").text(Warrior.mp);
        $("#getatk").text(Warrior.atk);
        $("#getatkmag").text(Warrior.atkmag);
        $("#getdef").text(Warrior.def);
        $("#getdefmag").text(Warrior.defmag);
        $("#getdodge").text(Warrior.dodge);
        $("#getspeed").text(Warrior.speed);
        $("#getgold").text(Warrior.gold);
        break;
    case 'Mage':
        $("#getpv").text(Mage.pv);
        $("#getmp").text(Mage.mp);
        $("#getatk").text(Mage.atk);
        $("#getatkmag").text(Mage.atkmag);
        $("#getdef").text(Mage.def);
        $("#getdefmag").text(Mage.defmag);
        $("#getdodge").text(Mage.dodge);
        $("#getspeed").text(Mage.speed);
        $("#getgold").text(Mage.gold);
        break;
    case 'Thief':
        $("#getpv").text(Thief.pv);
        $("#getmp").text(Thief.mp);
        $("#getatk").text(Thief.atk);
        $("#getatkmag").text(Thief.atkmag);
        $("#getdef").text(Thief.def);
        $("#getdefmag").text(Thief.defmag);
        $("#getdodge").text(Thief.dodge);
        $("#getspeed").text(Thief.speed);
        $("#getgold").text(Thief.gold);
        break;
    case 'Monk':
        $("#getpv").text(Monk.pv);
        $("#getmp").text(Monk.mp);
        $("#getatk").text(Monk.atk);
        $("#getatkmag").text(Monk.atkmag);
        $("#getdef").text(Monk.def);
        $("#getdefmag").text(Monk.defmag);
        $("#getdodge").text(Monk.dodge);
        $("#getspeed").text(Monk.speed);
        $("#getgold").text(Monk.gold);
        break;
    case 'Engineer':
        $("#getpv").text(Engineer.pv);
        $("#getmp").text(Engineer.mp);
        $("#getatk").text(Engineer.atk);
        $("#getatkmag").text(Engineer.atkmag);
        $("#getdef").text(Engineer.def);
        $("#getdefmag").text(Engineer.defmag);
        $("#getdodge").text(Engineer.dodge);
        $("#getspeed").text(Engineer.speed);
        $("#getgold").text(Engineer.gold);
        break;
    case 'Merchant':
        $("#getpv").text(Merchant.pv);
        $("#getmp").text(Merchant.mp);
        $("#getatk").text(Merchant.atk);
        $("#getatkmag").text(Merchant.atkmag);
        $("#getdef").text(Merchant.def);
        $("#getdefmag").text(Merchant.defmag);
        $("#getdodge").text(Merchant.dodge);
        $("#getspeed").text(Merchant.speed);
        $("#getgold").text(Merchant.gold);
        break;
}
$("#player").attr("src", "img/"+ localStorage.getItem("choix") +".png");

//afficher les caractéristiques du monstre
function Monters()
{
    if(localStorage.getItem("choix")=="Warrior")
    {
        pourcentageStat(Warrior);
        $("#getname1").text(Warrior.name);
        $("#getpv1").text(Warrior.pv);
        $("#getmp1").text(Warrior.mp);
        $("#getatk1").text(Warrior.atk);
        $("#getatkmag1").text(Warrior.atkmag);
        $("#getdef1").text(Warrior.def);
        $("#getdefmag1").text(Warrior.defmag);
        $("#getdodge1").text(Warrior.dodge);
        $("#getspeed1").text(Warrior.speed);
        $("#monster").attr("src", "img/"+ Warrior.name +".png");
    }
    else if(localStorage.getItem("choix")=="Mage"){
        pourcentageStat(Mage);
        $("#getname1").text(Mage.name);
        $("#getpv1").text(Mage.pv);
        $("#getmp1").text(Mage.mp);
        $("#getatk1").text(Mage.atk);
        $("#getatkmag1").text(Mage.atkmag);
        $("#getdef1").text(Mage.def);
        $("#getdefmag1").text(Mage.defmag);
        $("#getdodge1").text(Mage.dodge);
        $("#getspeed1").text(Mage.speed);
        $("#monster").attr("src", "img/"+ Mage.name +".png");
    }
    else if(localStorage.getItem("choix")=="Thief"){
        pourcentageStat(Thief);
        $("#getname1").text(Thief.name);
        $("#getpv1").text(Thief.pv);
        $("#getmp1").text(Thief.mp);
        $("#getatk1").text(Thief.atk);
        $("#getatkmag1").text(Thief.atkmag);
        $("#getdef1").text(Thief.def);
        $("#getdefmag1").text(Thief.defmag);
        $("#getdodge1").text(Thief.dodge);
        $("#getspeed1").text(Thief.speed);
        $("#monster").attr("src", "img/"+ Thief.name +".png");
    }
    else if(localStorage.getItem("choix")=="Monk"){
        pourcentageStat(Monk);
        $("#getname1").text(Monk.name);
        $("#getpv1").text(Monk.pv);
        $("#getmp1").text(Monk.mp);
        $("#getatk1").text(Monk.atk);
        $("#getatkmag1").text(Monk.atkmag);
        $("#getdef1").text(Monk.def);
        $("#getdefmag1").text(Monk.defmag);
        $("#getdodge1").text(Monk.dodge);
        $("#getspeed1").text(Monk.speed);
        $("#monster").attr("src", "img/"+ Monk.name +".png");
    }
    else if(localStorage.getItem("choix")=="Engineer"){
        pourcentageStat(Engineer);
        $("#getname1").text(Engineer.name);
        $("#getpv1").text(Engineer.pv);
        $("#getmp1").text(Engineer.mp);
        $("#getatk1").text(Engineer.atk);
        $("#getatkmag1").text(Engineer.atkmag);
        $("#getdef1").text(Engineer.def);
        $("#getdefmag1").text(Engineer.defmag);
        $("#getdodge1").text(Engineer.dodge);
        $("#getspeed1").text(Engineer.speed);
        $("#monster").attr("src", "img/"+ Engineer.name +".png");
    }
    else {
        pourcentageStat(Merchant);
        $("#getname1").text(Merchant.name);
        $("#getpv1").text(Merchant.pv);
        $("#getmp1").text(Merchant.mp);
        $("#getatk1").text(Merchant.atk);
        $("#getatkmag1").text(Merchant.atkmag);
        $("#getdef1").text(Merchant.def);
        $("#getdefmag1").text(Merchant.defmag);
        $("#getdodge1").text(Merchant.dodge);
        $("#getspeed1").text(Merchant.speed);
        $("#monster").attr("src", "img/"+ Merchant.name +".png");
    }
}
Monters();
//Affichier les valeurs Items: Prix et combien fois l'acheter
$("#PotionAtk").text(PotionAtk.prix);
$("#countUseAtk").text(PotionAtk.countUse);
$("#PotionDef").text(PotionDef.prix);
$("#countUseDef").text(PotionDef.countUse);
$("#PotionAtkMag").text(PotionAtkMag.prix);
$("#countUseAtkMag").text(PotionAtkMag.countUse);
$("#PotionPv").text(PotionPv.prix);
$("#countUsePv").text(PotionPv.countUse);
$("#PotionMp").text(PotionMp.prix);
$("#countUseMp").text(PotionMp.countUse);

// quand on clique le button start et il appelle fonction pour commencer le combat
$("#start").click(function(e)
{
    e.preventDefault();
    $("#act").toggleClass("hide");
    $("#start").toggleClass("hide");
    fight();
})
//quand on clique le button fuir et il appelle fonction pour échapper
$("#fuir").click(function(e){
    e.preventDefault();
    runAway();
})


//Récupération des valeurs des classes et monstre en fonction du choix et Parse en int pour être manipulé
let ClasseStatPV = parseInt($("#getpv")[0].firstChild.data);
let ClasseStatMP = parseInt($("#getmp")[0].firstChild.data);
let ClasseStatATK = parseInt($("#getatk")[0].firstChild.data);
let ClasseStatATKMAG = parseInt($("#getatkmag")[0].firstChild.data);
let ClasseStatDEF = parseInt($("#getdef")[0].firstChild.data);
let ClasseStatDEFMAG = parseInt($("#getdefmag")[0].firstChild.data);
let ClasseStatDODGE = parseInt($("#getdodge")[0].firstChild.data);
let ClasseStatSPEED = parseInt($("#getspeed")[0].firstChild.data);
let ClasseStatGOLD = parseInt($("#getgold")[0].firstChild.data);

//Faire pareil avec les monstres
let MonstreStatPV = parseInt($("#getpv1")[0].firstChild.data);
let MonstreStatMP = parseInt($("#getmp1")[0].firstChild.data);
let MonstreStatATK = parseInt($("#getatk1")[0].firstChild.data);
let MonstreStatATKMAG = parseInt($("#getatkmag1")[0].firstChild.data);
let MonstreStatDEF = parseInt($("#getdef1")[0].firstChild.data);
let MonstreStatDEFMAG = parseInt($("#getdefmag1")[0].firstChild.data);
let MonstreStatDODGE = parseInt($("#getdodge1")[0].firstChild.data);
let MonstreStatSPEED = parseInt($("#getspeed1")[0].firstChild.data);
//Récupéer le statut des Items
let ItemAtkStatPRIX=parseInt($("#PotionAtk")[0].firstChild.data);
let ItemAtkStatCOUNT=parseInt($("#countUseAtk")[0].firstChild.data);

let ItemDefStatPRIX=parseInt($("#PotionDef")[0].firstChild.data);
let ItemDefStatCOUNT=parseInt($("#countUseDef")[0].firstChild.data);

let ItemAtkMagStatPRIX=parseInt($("#PotionAtkMag")[0].firstChild.data);
let ItemAtkMagStatCOUNT=parseInt($("#countUseAtkMag")[0].firstChild.data);

let ItemPvStatPRIX=parseInt($("#PotionPv")[0].firstChild.data);
let ItemPvStatCOUNT=parseInt($("#countUsePv")[0].firstChild.data);

let ItemMpStatPRIX=parseInt($("#PotionMp")[0].firstChild.data);
let ItemMpStatCOUNT=parseInt($("#countUseMp")[0].firstChild.data);

//Permet de faire un choix avant le déroulement du tour
async function fight(){
        let first = whoFirst()
        await sleep(3000);
        if(first == 1){
            playeratk()
        }
        else
        {
            monstreatk()
            playeratk()
        }
}

//Celui qui a la plus grande vitesse commence
function whoFirst(){
    //Prendre la vitesse du joueur et la comparer avec celle de l'ennemi

    if(ClasseStatSPEED > MonstreStatSPEED)
    {
        $(".historique").html("<p>Player start first</p>");
        return 1
    }
    else
    {
        $(".historique").html("<p>Monster start first</p>");
        return 2
    }
}
// combat player
function playeratk(){
    //atk normal
    $("#atk").click(function(e){
        e.preventDefault();
        let pDamage = ClasseStatATK - MonstreStatDEF
        if(pDamage<0)
            pDamage=0
        //degat physique que le monstre reçoit = PV du monstre - Degat physique du joueur
        //degat physique que le joueur reçoit = PV du joueur - Degat physique du monstre
        let mDamageR = MonstreStatPV - pDamage;
        MonstreStatPV = mDamageR;
        $(".historique").html(`<p>You use Atk Normal and you damage `+ pDamage+`PV of the monster <button id="continue">Continue</button></p>`);
        $("#getpv1").text(MonstreStatPV)
        if(MonstreStatPV>0){
            Continue();
        }
        else
        {
            Win()
        }
    })
    //atk avec magie
    $("#sort").click(function(e){
        e.preventDefault();
        // vérifier si le joeur a assez MP pour utiliser Atk Magie
        if(ClasseStatMP<3){
            $(".historique").html(`<p>You dont have enough MP, so you lose your turn</p>`)
            monstreatk()
        }
        else
        {
            let pDamage = ClasseStatATKMAG -  MonstreStatDEFMAG
            if(pDamage<0)
                pDamage=0
            ClasseStatMP -= 3
            let mDamageR = MonstreStatPV - pDamage
            MonstreStatPV = mDamageR
            $("#getmp").text(ClasseStatMP)
            $("#getpv1").text(MonstreStatPV)
            $(".historique").html(`<p>You use Atk Magie and you damage `+ pDamage+`PV of the monster <button id="continue">Continue</button></p>`)
            if(MonstreStatPV>0){
                Continue();
            }
            else
            {
               Win()
            }
            
        }
    })
}
// combat monstre
function monstreatk(){
    //random atk du monstre est atk normal ou atk magie
    var random = Math.floor(Math.random() * Math.floor(2));
    if(MonstreStatMP<3){
        random = 0
    }
    if(random == 0){
        let mDamage = MonstreStatATK - ClasseStatDEF
        if(mDamage<0)
            mDamage=0
        let mDamageR = ClasseStatPV - mDamage;
        ClasseStatPV = mDamageR
        $(".historique").html(`<p>Monster use Normal Atk and you lost `+ mDamage+`PV  </p>`)
    }
    else
    {
        let mDamage = MonstreStatATKMAG - ClasseStatDEFMAG
        if(mDamage<0)
            mDamage=0
        MonstreStatMP -= 3
        let mDamageR = ClasseStatPV - mDamage;
        ClasseStatPV = mDamageR
        $(".historique").html(`<p>Monster use Atk Magie and you lost `+ mDamage+`PV  </p>`)
    }
    $("#getmp1").text(MonstreStatMP)
    $("#getpv").text(ClasseStatPV)
    if(ClasseStatPV<=0){
            Quit();
    }
    
}
function Continue(){
    $("#continue").click(function(e)
    {
        e.preventDefault();
        monstreatk();
    })
}
//fonction pour attendre le temps 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//fonciton pour échapper
async function runAway(){
//On créer un chiffre aléatoire entre 0 et 10
    let randomNumber = Math.floor(Math.random() * 11)

//Si le nombre et supérieur à 5 alors on peut fuire
    if(randomNumber >= 5)
    {
        $(".historique").html(`<p>Vous avez réussi à fuir... just wait 5s</p>`)
        $("#act").toggleClass("hide");
        $("#start").toggleClass("hide");
        // attendre 5s pour faire la suite
        await sleep(5000);
        window.location.href = 'menu.php';
    }
    else
    {
        $(".historique").html(`<p>Vous n'avez pas réussi à fuir !</p>`)
    }
}
// quand le jouer est mort 
function Quit(){
    ClasseStatPV=0;
    $("#getpv").text(ClasseStatPV)
    $(".action").addClass("hide");
    $(".historique").html(`<p>You're lost, click here to replay the game: <button><a href="menu.php" id="here">Here</a></button></p>`)
}
//quand le joueur est gagné et il peut recevoir son récompense
function Win(){
    $(".action").addClass("hide");
    MonstreStatPV=0;
    $("#getpv1").text(MonstreStatPV)
    ClasseStatGOLD+= 10;
    $("#getgold").text(ClasseStatGOLD);
    $(".historique").html(`<p>You're win,you receive 10 gold,click here to replay the game: <button><a href="menu.php" id="here">Here</a></button> </p>`)

}

// Fonction pour acheter les Items
$("#buy").click(function(e){
    e.preventDefault();
    //prendre valeur de type radio
    const choixItem = $(":radio:checked").val();
    switch(choixItem){
        case 'PotionAtk':
            // vérifier si le joueur a assez gold pour acheter item
            if( ClasseStatGOLD>= PotionAtk.prix){
                ClasseStatATK+=5;
                ClasseStatGOLD-=ItemAtkStatPRIX;
                $("#getatk").text(ClasseStatATK);
                $("#getgold").text(ClasseStatGOLD);
                $(".historique").html("<p>You bought a "+choixItem+", it costs you "+ PotionAtk.prix+", your Atk add "+PotionAtk.value+" </p>")
                //chaque fois achat, le prix augmente et l'affichage le nombre d'achat
                ItemAtkStatCOUNT+=1;
                $("#countUseAtk").text(ItemAtkStatCOUNT);
                ItemAtkStatPRIX+=2;
                $("#PotionAtk").text(ItemAtkStatPRIX);
            }
            else{
                $(".historique").html("<p>You don't have enough money </p>")
            }
            break;
        case 'PotionDef':
            if( ClasseStatGOLD>= PotionDef.prix){
                ClasseStatDEF+=5;
                ClasseStatGOLD-=ItemDefStatPRIX;
                $("#getdef").text(ClasseStatDEF);
                $("#getgold").text(ClasseStatGOLD);
                $(".historique").html("<p>You bought a "+choixItem+", it costs you "+ PotionDef.prix+", your Def add"+PotionDef.value+" </p>")
                console.log(ItemDefStatCOUNT);
                ItemDefStatCOUNT+=1;
                console.log(ItemDefStatCOUNT);
                $("#countUseDef").text(ItemDefStatCOUNT);
                ItemDefStatPRIX+=2;
                $("#PotionDef").text(ItemDefStatPRIX);
            }
            else{
                $(".historique").html("<p>You don't have enough money </p>")
            }
            break;
        case 'PotionAtkMag':
            if( ClasseStatGOLD>= PotionAtkMag.prix){
                ClasseStatATKMAG+=7;
                ClasseStatGOLD-=ItemAtkMagStatPRIX;
                $("#getatkmag").text(ClasseStatATKMAG);
                $("#getgold").text(ClasseStatGOLD);
                $(".historique").html("<p>You bought a "+choixItem+", it costs you "+ PotionAtkMag.prix+", your Atk Mag add "+PotionAtkMag.value+" </p>")
                ItemAtkMagStatCOUNT+=1;
                $("#countUseAtkMag").text(ItemAtkMagStatCOUNT);
                ItemAtkMagStatPRIX+=2;
                $("#PotionAtkMag").text(ItemAtkMagStatPRIX);
            }
            else{
                $(".historique").html("<p>You don't have enough money </p>")
            }
            break;
        case 'PotionPv':
            if( ClasseStatGOLD>= PotionPv.prix){
                ClasseStatPV+= 50;
                ClasseStatGOLD-=ItemPvStatPRIX;
                $("#getpv").text(ClasseStatPV);
                $("#getgold").text(ClasseStatGOLD);
                $(".historique").html("<p>You bought a "+choixItem+", it costs you "+ PotionPv.prix+", your Pv Mag add "+PotionPv.value+" </p>")
                ItemPvStatCOUNT+=1;
                $("#countUsePv").text(ItemPvStatCOUNT);
                ItemPvStatPRIX+=2;
                $("#PotionPv").text(ItemPvStatPRIX);
            }
            else{
                $(".historique").html("<p>You don't have enough money </p>")
            }
            break;
        case 'PotionMp':
            if( ClasseStatGOLD>= PotionMp.prix){
                ClasseStatMP+=10;
                ClasseStatGOLD-=ItemMpStatPRIX;
                $("#getmp").text(ClasseStatMP);
                $("#getgold").text(ClasseStatGOLD);
                $(".historique").html("<p>You bought a "+choixItem+" ,it costs you "+ PotionMp.prix+", your Mp Mag add "+PotionMp.value+" </p>")
                ItemMpStatCOUNT+=1;
                $("#countUseMp").text(ItemMpStatCOUNT);
                ItemMpStatPRIX+=2;
                $("#PotionMp").text(ItemMpStatPRIX);
            }
            else{
                $(".historique").html("<p>You don't have enough money </p>")
            }
            break;            
    }
})



