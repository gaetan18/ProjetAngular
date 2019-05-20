"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./pokemon");
var battle_1 = require("./battle");
var pikachu = new pokemon_1.Pokemon("pikachu", 40, 25, 50);
var tortank = new pokemon_1.Pokemon("tortank", 50, 15, 20);
console.log("welcome a new challenger: " + pikachu.name);
console.log("welcome a new challenger: " + tortank.name);
var combat = new battle_1.Battle(pikachu, tortank);
if (combat.WhoAttack() == 1) {
    console.log(pikachu.name + " who attack first");
}
else {
    console.log(tortank.name + " who attack first");
}
var winner = combat.fight();
console.log(winner.name + " Wins by Fatality");
