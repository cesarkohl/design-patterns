interface ICompositeComponent {
    name: string;
    referenceToParent?: Composite;
    method(): void;
    detach(): void;
}

class Leaf implements ICompositeComponent {
    referenceToParent?: Composite;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    method(): void {
        const parent = this.referenceToParent
            ? this.referenceToParent.name
            : "none";
        console.log(`Leaf: ${this.name}; Parent: ${parent}`)
    }

    detach(): void {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
        }
    }
}

class Composite implements ICompositeComponent {
    referenceToParent?: Composite;
    components: ICompositeComponent[];
    name: string;

    constructor(name: string) {
        this.name = name;
        this.components = [];
    }

    method(): void {
        const parent = this.referenceToParent
            ? this.referenceToParent.name
            : "none";
        console.log(`Composite: ${this.name}; Parent: ${parent}; Components: ${this.components.length}`);
    }

    detach(): void {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
            this.referenceToParent = undefined;
        }
    }

    attach(component: ICompositeComponent): void {
        // component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }

    delete(component: ICompositeComponent): void {
        const index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
    }
}

const leafA = new Leaf('leaf-a');
const leafB = new Leaf('leaf-b');
const composite1 = new Composite('comp-1');
const composite2 = new Composite('comp-2');

leafB.method();

composite1.attach(leafA);
composite1.method();

composite2.attach(leafA);
composite2.attach(composite1);
composite2.method();

composite1.attach(leafB);
composite1.attach(composite2);
composite1.method();
