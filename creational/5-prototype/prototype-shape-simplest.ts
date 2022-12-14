abstract class Prototype {
    public clone(): this {
        // return Object.create(this); // shallow copy
        return JSON.parse(JSON.stringify(this)); // deep copy
    }
}

class Chair extends Prototype {
    color: string = "";
}

const c1 = new Chair();
c1.color = "c1-color";

const c2 = c1.clone();
console.log("c2", c2.color); // c1-color

c1.color = "c1-color-new";
console.log("c1", c1.color); // c1-color-new
console.log("c2", c2.color); // c1-color
