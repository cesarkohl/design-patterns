abstract class Factory {
    // This is the Factory Method
    public abstract createChair(): Chair;

    cleaning(): boolean {
        return true;
    }
}

class IkeaFactory extends Factory {
    public createChair(): Chair {
        return new IkeaChair();
    }
}

interface Chair {
    style(): string;
}

class IkeaChair implements Chair {
    public style(): string {
        return "ikea";
    }
}

const factory = new IkeaFactory();
const chair = factory.createChair();
