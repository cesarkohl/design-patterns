abstract class Prototype {
    public clone(): this {
        // return Object.create(this); // shallow copy
        return JSON.parse(JSON.stringify(this)); // deep copy
    }
}

class Rectangle extends Prototype {
    color: string = "";
}

const r1 = new Rectangle();
r1.color = "r1-color";

const r2 = r1.clone();
console.log("r2", r2.color); // r1-color

r1.color = "r1-color-new";
console.log("r1", r1.color); // r1-color-new
console.log("r2", r2.color); // r1-color
