abstract class Item {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {
    energy: number;

    constructor(name: string, energy: number) {
        super(name, 3); //size est initialisé à 3, cela correspond aux paramètres du constructeur de Item
        this.energy = energy;
    }
}

class Arrow extends Item {
    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power;
    }
}

class Player {
    playerName: string;
    livesNumber: number;
    usedSize: number;
    items: Array<Item>;

    constructor(playerName: string) {
        this.playerName = playerName;
        this.livesNumber = 3;
        this.usedSize = 0;
        this.items = new Array<Item>();
    }

    addItem(item: Item): boolean {

        if (this.usedSize + item.size <= 9) {
            this.items.push(item);
            this.usedSize += item.size; //équivaut à this.usedSize = this.usedSize + item.size
            console.log("L'objet " + item.name + " a été ajouté à votre inventaire.");
            return true;

        } else {
            console.log("Votre inventaire est plein, l'objet " + item.name + " n'a pas été ajouté.");
            return false;
        }
    }
}

let testTeleporter01: Teleporter = new Teleporter("Toup", 3);

let testArrow01: Arrow = new Arrow("Nep", 4);
let testPlayer01: Player = new Player("Toupiiii");

testPlayer01.addItem(testTeleporter01);
testPlayer01.addItem(testTeleporter01);
testPlayer01.addItem(testTeleporter01);
testPlayer01.addItem(testArrow01);
