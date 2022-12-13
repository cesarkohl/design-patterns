interface Creator {
    createChair(): Chair;
}

class IkeaCreator implements Creator {
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

const creator = new IkeaCreator();
const chair = creator.createChair();
