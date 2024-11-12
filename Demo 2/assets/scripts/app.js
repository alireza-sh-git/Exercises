attackBtn.addEventListener("click", attack)
strongAttackBtn.addEventListener("click", strongAttack)
healBtn.addEventListener("click", heal)
logBtn.addEventListener("click", log)


function attack ()
{   
    const atkDamage = 20
    damage = Math.random() * atkDamage;
    monsterHealthBar.value -=damage;
    if (!checkGameState()) monsterTurn();
}

function strongAttack ()
{
    const strongAtkDamage = 40
    damage = Math.random() * strongAtkDamage;
    damage = 15;
    monsterHealthBar.value -=damage;
    if (!checkGameState()) monsterTurn();
}

function heal ()
{
    const spellPower = 40
    damage = Math.random() * spellPower;
    damage = 20;
    playerHealthBar.value +=damage;
    if (!checkGameState()) monsterTurn();
}

function log ()
{
    damage = 10;
    monsterHealthBar.value -=damage;
    if (!checkGameState()) monsterTurn();
}

function checkGameState()
{
    if (monsterHealthBar.value === 0) 
        {
            alert("You won!");
            return true;
        }
    else if (playerHealthBar.value === 0)
        {
            alert("You lost!")
            return true;
        } 
    else return false;
}

function monsterTurn()
{
    const monsterDamage = 30
    damage = Math.random() * monsterDamage;
    playerHealthBar.value -= damage;
    checkGameState();
}