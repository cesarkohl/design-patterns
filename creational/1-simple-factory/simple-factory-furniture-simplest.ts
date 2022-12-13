class Creator {
    public createChair(): Chair {
        return new Chair();
    }
}

class Chair {}

const creator = new Creator();
const chair = creator.createChair();