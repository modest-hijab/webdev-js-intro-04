"use strict";

let healthPoints = 4;
let healingPotionAvailable = true;
let shieldAvailable = true;
let enemyNearby = true;

if (healthPoints < 5 && healingPotionAvailable) {
    console.log("Hero should use a healing potion.");
} else if (healthPoints >= 5 && healthPoints < 10) {
    console.log("Hero is slightly damaged.");
} else if (healthPoints >= 10) {
    console.log("Hero is healthy.");
} else {
    console.log("Hero is close to death.");
}

// If/Else If/Else Statements
if (enemyNearby && healthPoints < 5) {
    console.log("Hero should avoid combat and heal.");
} else if (enemyNearby && healthPoints >= 5) {
    console.log("Hero can engage in combat.");
} else {
    console.log("Hero is safe for now.");
}

if (healthPoints >= 8) {
    console.log("Hero is in good shape.");
} else if (healthPoints >= 4 && healthPoints < 8) {
    console.log("Hero is moderately injured.");
} else {
    console.log("Hero is severely injured.");
}
