class Facade {
    sub1: Sub1;
    sub2: Sub2;

    constructor(sub1?: Sub1, sub2?: Sub2) {
        this.sub1 = sub1 || new Sub1();
        this.sub2 = sub2 || new Sub2();
    }
    operation(): string {
        let result = "Initialized....\n";

        result += this.sub1.init();
        result += this.sub2.init();

        result += this.sub1.operate();
        result += this.sub2.execute();

        return result;
    }
}

class Sub1 {
    init(): string {
        return "Sub1: Initialized.\n";
    }
    operate(): string {
        return "Sub1: Operating...\n";
    }
}

class Sub2 {
    init(): string {
        return "Sub2: Initialized.\n";
    }
    execute(): string {
        return "Sub2: Executing...\n";
    }
}

const sub1 = new Sub1();
const sub2 = new Sub2();
const facade = new Facade(sub1, sub2);
console.log(facade.operation());