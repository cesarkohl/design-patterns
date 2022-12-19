class FlyweightFactory {
    private readonly flyweights: string[];

    constructor() {
        this.flyweights = [];
    }

    setFlyweights(particles: string[]) {
        for (const value of particles) {
            if (!this.flyweights.includes(value)) {
                this.flyweights.push(value);
            }
        }
    }

    getFlyweights() {
        return this.flyweights;
    }
}

const particles = ["a","b","a"];
const factory = new FlyweightFactory();
factory.setFlyweights(particles);

console.log(particles);
console.log(factory.getFlyweights());
