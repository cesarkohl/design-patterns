class Factory {
    public createChair(): Chair {
        return new Chair();
    }
}

class Chair {}

const factory = new Factory();
const chair = factory.createChair();