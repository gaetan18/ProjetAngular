import { Pokemon } from "./pokemon";
import { Battle } from "./battle";


let pikachu = new Pokemon("pikachu", 40, 25 ,50);
let tortank = new Pokemon("tortank", 50, 15 ,20);
console.log("welcome a new challenger: " +pikachu.name);
console.log("welcome a new challenger: "+tortank.name);
let combat = new Battle(pikachu, tortank);

if(combat.WhoAttack() == 1){
    console.log(pikachu.name + " who attack first");
}
else{
    console.log(tortank.name + " who attack first");
}
let winner = combat.fight();
console.log(winner.name + " Wins by Fatality");