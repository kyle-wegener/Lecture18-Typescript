// PET EXAMPLE

interface Pet {
    name: string;
    age: number;
    speak: () => {}
}

class Dog implements Pet {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak(): string {
        return "Woof!";
    }
}

class Cat implements Pet {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak(): string {
        return "Meow!";
    }
}

const myDog = new Dog("Stark", 7);

makeMyPetSpeak(myDog);

function makeMyPetSpeak(pet: Pet) {
    console.log(pet.speak());
}
