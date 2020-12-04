<?php

include "inc/header.php";
?>
<div class="box">
    <form action="game.php" method="GET" >
        <h1>RPG</h1>
        <div class="input-container">
            <input type="text" required="" id="name"/>
            <label>Enter your name here :</label>		
        </div>
        <div class="input-container">		
            <select name="" id="choix">
                <option value="Warrior">Warrior</option>
                <option value="Mage">Mage</option>
                <option value="Thief">Thief</option>
                <option value="Monk">Monk</option>
                <option value="Engineer">Engineer</option>
                <option value="Merchant">Merchant</option>
            </select>
            <label>Choose player :</label>
        </div>

        <button type="submit" onclick="return IsEmpty();" class="btn">PLAY</button>     
    </form>	
</div>

<?php

include "inc/footer.php";
?>