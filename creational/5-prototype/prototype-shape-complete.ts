abstract class Prototype {
    public clone(): this {
        // return Object.create(this); // shallow copy
        return JSON.parse(JSON.stringify(this)); // deep copy
    }
}

class Chair extends Prototype {
    color: string = "";
}

class IkeaChair extends Chair {
    size: number = 0;
}

const c1 = new IkeaChair();
c1.color = "c1-color";
c1.size = 10;

const c2 = c1.clone();
console.log("c2", c2.color, c2.size); // c1-color, 10

c1.color = "c1-color-new";
c1.size = 20;
console.log("c1", c1.color, c1.size); // c1-color-new, 20
console.log("c2", c2.color, c2.size); // c1-color, 10
