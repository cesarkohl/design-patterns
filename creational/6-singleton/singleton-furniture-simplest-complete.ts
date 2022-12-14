class Chair {
    private static instance: Chair;
    color: string = "";

    private constructor() {}

    static getInstance(): Chair {
        if (!this.instance) {
            this.instance = new this;
        }
        return this.instance;
    }
}

const c1 = Chair.getInstance();
c1.color = "blue";
const c2 = Chair.getInstance();
console.log(c2.color); // blue
c2.color = "red";
console.log(c1.color); // red
