// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`;
        }
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.Viking = {};
        this.vikingArmy.push(Viking);

    }
    addSaxon(Saxon) {
        this.Saxon = {};
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let rVikingNr = Math.floor(Math.random() * this.vikingArmy.length);
        let rViking = this.vikingArmy[rVikingNr];
        let rSaxonNr = Math.floor(Math.random() * this.saxonArmy.length);
        let rSaxon = this.saxonArmy[rSaxonNr];
        let fightResult = rSaxon.receiveDamage(rViking.strength);

        if (rSaxon.health <= 0) {
            this.saxonArmy.splice(rSaxonNr, 1);
        }

        return fightResult;

    }
    saxonAttack() {
        let rVikingNr = Math.floor(Math.random() * this.vikingArmy.length);
        let rViking = this.vikingArmy[rVikingNr];
        let rSaxonNr = Math.floor(Math.random() * this.saxonArmy.length);
        let rSaxon = this.saxonArmy[rSaxonNr];
        let fightResult = rViking.receiveDamage(rSaxon.strength);

        if (rViking.health <= 0) {
            this.vikingArmy.splice(rVikingNr, 1);
        }

        return fightResult;

    }
    showStatus() {
        if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }

        else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
