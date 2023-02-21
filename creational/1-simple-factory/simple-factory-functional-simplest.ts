class Chair {}

function createChair() {
    return new Chair();
}

// const chair = new Chair(); // not using the factory method
const chair = createChair(); // using the factory method
