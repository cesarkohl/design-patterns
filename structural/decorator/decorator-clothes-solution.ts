interface IPerson {
    wearing(): string;
}

class Person implements IPerson {
    wearing(): string {
        return "Naked";
    }
}

abstract class Clothes implements IPerson {
    protected component: IPerson;

    constructor(component: IPerson) {
        this.component = component;
    }

    wearing(): string {
        return this.component.wearing();
    }
}

class TeeShirt extends Clothes {
    wearing(): string {
        return `<tee-shirt>\n${super.wearing()}\n</tee-shirt>`;
    }
}

class Coat extends Clothes {
    wearing(): string {
        return `<coat>\n${super.wearing()}\n</coat>`;
    }
}

const person = new Coat(new TeeShirt(new Person()));
console.log(person.wearing());
