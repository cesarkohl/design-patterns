abstract class Prototype {
    public clone(): this {
        // return Object.create(this); // shallow copy
        return JSON.parse(JSON.stringify(this)); // deep copy
    }
}

class Shape extends Prototype {
    color: string = "";
}

class Rectangle extends Shape {
    size: number = 0;
}

const r1 = new Rectangle();
r1.color = "r1-color";
r1.size = 10;

const r2 = r1.clone();
console.log("r2", r2.color, r2.size); // r1-color, 10

r1.color = "r1-color-new";
r1.size = 20;
console.log("r1", r1.color, r1.size); // r1-color-new, 20
console.log("r2", r2.color, r2.size); // r1-color, 10
