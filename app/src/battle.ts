import { Pokemon } from "./pokemon";

export class Battle {
    constructor(public challenger1 : Pokemon, public challenger2 : Pokemon){
    }

    WhoAttack() : number{
        if(this.challenger1.speed < this.challenger2.speed){
            return 2;
        }
        return 1; 
    }

    whoWin() : Pokemon{
        if(this.challenger2.life <= 0){
            return this.challenger1;
        }
        return this.challenger2;
    }

    fight(){
        let who = this.WhoAttack();
        while(!(this.challenger1.life <= 0 || this.challenger2.life <= 0)){
            if(who === 1){
                console.log(this.challenger1.name)
                console.log(this.challenger1.life)
                this.challenger2.life -= this.challenger1.attack;
            }else {
                console.log(this.challenger2.name)
                console.log(this.challenger2.life)
                this.challenger1.life -= this.challenger2.attack;
                who = 0;
            }
            who ++;
        }
        return this.whoWin();
    }

}