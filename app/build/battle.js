"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Battle = /** @class */ (function () {
    function Battle(challenger1, challenger2) {
        this.challenger1 = challenger1;
        this.challenger2 = challenger2;
    }
    Battle.prototype.WhoAttack = function () {
        if (this.challenger1.speed < this.challenger2.speed) {
            return 2;
        }
        return 1;
    };
    Battle.prototype.whoWin = function () {
        if (this.challenger2.life <= 0) {
            return this.challenger1;
        }
        return this.challenger2;
    };
    Battle.prototype.fight = function () {
        var who = this.WhoAttack();
        while (!(this.challenger1.life <= 0 || this.challenger2.life <= 0)) {
            if (who === 1) {
                console.log(this.challenger1.name);
                console.log(this.challenger1.life);
                this.challenger2.life -= this.challenger1.attack;
            }
            else {
                console.log(this.challenger2.name);
                console.log(this.challenger2.life);
                this.challenger1.life -= this.challenger2.attack;
                who = 0;
            }
            who++;
        }
        return this.whoWin();
    };
    return Battle;
}());
exports.Battle = Battle;
