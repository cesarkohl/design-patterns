class Process {
    // template method
    public start(): void {
        this.step1();
        this.step2();
        this.step3();
    }

    protected step1(): void {
        console.log("Step 1");
    }

    protected step2(): void {
        console.log("Step 2");
    }

    protected step3(): void {
        console.log("Step 3");
    }
}

class Variation1 extends Process {
    protected step1() {
        console.log("Step 1 - Variation");
    }
}

class Variation2 extends Process {
    protected step3() {
        console.log("Step 3 - Variation");
    }
}

class Variation3 extends Process {
    protected step1() {
        console.log("Step 1 - Super Variation");
    }

    protected step2() {
        console.log("Step 2 - Variation");
    }
}

(new Process()).start();
console.log("===");
(new Variation1()).start();
console.log("===");
(new Variation2()).start();
console.log("===");
(new Variation3()).start();
