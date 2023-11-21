class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  get getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  get getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person entered the house.");
    } else {
      console.log("The door is closed. Person cannot enter.");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  openDoor(key: Key): void {
    if (key.getSignature === this.key.getSignature) {
      this.door = true;
      console.log("Door is now open.");
    } else {
      console.log("Incorrect key. Door remains closed.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey);
house.comeIn(person);

export {};
