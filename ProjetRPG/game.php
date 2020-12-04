<?php

include "inc/header.php";
?>
<div class="box-haut">
    <div class="box-left">
        <p><strong>Name:<span id="getname"></span></strong></p>
        <p>PV:<span id="getpv"></p>
        <p>MP:<span id="getmp"></p>
        <p>Gold:<span id="getgold"></p>
        <a href=""id="open">
            <i class="fa fa-search"></i>
        </a>
    </div>
    <div class="box-right">
        <p><strong>Name:<span id="getname1"></span></strong></p>
        <p>PV:<span id="getpv1"></p>
        <p>MP:<span id="getmp1"></p>
        <a href=""id="open1">
            <i class="fa fa-search"></i>
        </a>
    </div>
</div>
<img src="" alt="" id="player">
<img src="" alt="" id="monster">
<div class="store">
        <h2>Store</h2>
        <form id="form">
		<div>
			<input type="radio" name="choix" value="PotionAtk">
			<label>Potion Atk+5 :  <span id="PotionAtk"> </span> gold </label>
            <p>Buy how many time : <span id="countUseAtk"> </span></p>
		</div>
		<div>
			<input  type="radio" name="choix" value="PotionDef">
			<label>Potion Def+5 : <span id="PotionDef"> </span> gold</label>
            <p>Buy how many time : <span id="countUseDef"> </span></p>
		</div>
		<div>
			<input type="radio" name="choix" value="PotionAtkMag">
			<label>Potion AtkMag+7 : <span id="PotionAtkMag"> </span> gold</label>
            <p>Buy how many time : <span id="countUseAtkMag"> </span></p>
        </div>
        <div>
			<input type="radio" name="choix" value="PotionPv">
			<label>Potion PV +50 :  <span id="PotionPv"> </span> gold</label>
            <p>Buy how many time : <span id="countUsePv"> </span></p>
        </div>
        <div>
			<input type="radio" name="choix" value="PotionMp">
			<label>Potion MP +10 :  <span id="PotionMp"> </span> gold</label>
            <p>Buy how many time : <span id="countUseMp"> </span></p>
        </div>
		<div>
			<button type="submit" id="buy">Buy</button>
		</div>
	</form>
</div>

<div class="hide" id="box-details1">
    <a href="" id="close1">
        <i class="fa fa-close"></i>
    </a>
    <p>Atk:<span id="getatk1"></p>
    <p>AtkMag:<span id="getatkmag1"></p>
    <p>Def:<span id="getdef1"></p>
    <p>DefMag:<span id="getdefmag1"></p>
    <p>Dodge:<span id="getdodge1"></p>
    <p>Speed:<span id="getspeed1"></p>
</div>
<div class="hide" id="box-details">
    <a href="" id="close">
        <i class="fa fa-close"></i>
    </a>
    <p>Classe:<span id="getchoix"></span></p>
    <p>Atk:<span id="getatk"></p>
    <p>AtkMag:<span id="getatkmag"></p>
    <p>Def:<span id="getdef"></p>
    <p>DefMag:<span id="getdefmag"></p>
    <p>Dodge:<span id="getdodge"></p>
    <p>Speed:<span id="getspeed"></p>
</div>
<div class="historique">
    <p>text will be here</p>
</div>
<div class="action">
    <button classe="hide"id="start">Start</button>
    <div class="hide" id="act">
        <button id="atk">Atk</button>
        <button id="sort">Sort</button>
        <button  type="submit" id="fuir">Fuir</a></button>   
    </div>
    
</div>
<?php

include "inc/footer.php";
?>