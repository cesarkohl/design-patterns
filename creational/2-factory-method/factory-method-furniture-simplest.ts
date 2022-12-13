abstract class Creator {
    // This is the Creator Method
    public abstract createChair(): Chair;

    cleaning(): boolean {
        return true;
    }
}

class IkeaCreator extends Creator {
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

const creator = new IkeaCreator();
const chair = creator.createChair();
