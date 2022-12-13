interface Factory {
    createChair(): Chair;
}

class IkeaFactory implements Factory {
    createChair(): Chair {
        return new IkeaChair();
    }
}

interface Chair {
    style(): string;
}

class IkeaChair implements Chair {
    style() {
        return "ikea-style";
    }
}

const factory = new IkeaFactory();
const chair = factory.createChair();
