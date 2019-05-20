import { Pokemon } from "../src/pokemon";
import { Battle } from "../src/battle";

describe('test battle', () => {

    let pikachu = new Pokemon("pikachu", 40, 25 ,50);
    let tortank = new Pokemon("tortank", 50, 15 ,20);
    let ratata = new Pokemon("ratata", 35, 15 ,60);
    let chenipan = new Pokemon("chenipan", 20, 10 ,50);

    let combat1 = new Battle(pikachu, tortank);
    let combat2 = new Battle(chenipan, ratata);
    let combat3 = new Battle(pikachu, chenipan);

    test('give me 1 when speed1 > speed2',() => {
        expect(combat1.WhoAttack()).toBe(1);
    });

    test('give me 2 when speed1 < speed2',() => {
        expect(combat2.WhoAttack()).toBe(2);
    });
    
    test('give me 1 when equals',() => {
        expect(combat3.WhoAttack()).toBe(1);
    });
    
    test('pikachu wins',() => {
        expect(combat1.fight()).toEqual(pikachu);
    });

    test('ratata wins',() => {
        expect(combat2.fight()).toEqual(ratata);
    });

    test('ratata wins',() => {
        expect(combat3.fight()).toEqual(pikachu);
    });

  
  });