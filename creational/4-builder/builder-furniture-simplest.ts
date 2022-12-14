class ChairDirector {
    private builder: ChairBuilder;

    public constructor(builder: ChairBuilder) {
        this.builder = builder;
    }

    public createChair(type: string = "ikea") {
        this.builder.reset();

        if (type === "ikea") {
            this.builder.buildStepA();
        } else {
            this.builder.buildStepB();
            this.builder.buildStepZ();
        }
    }
}

interface ChairBuilder {
    reset(): void;
    buildStepA(): void;
    buildStepB(): void;
    buildStepZ(): void;
    getChair(): void;
}

class IkeaChairBuilder implements ChairBuilder {
    private chair: IkeaChair = new IkeaChair();

    public reset() {
        this.chair = new IkeaChair();
    }

    public buildStepA() {}

    public buildStepB() {}

    public buildStepZ() {}

    public getChair(): IkeaChair {
        return this.chair;
    }
}

class IkeaChair {}

const builder = new IkeaChairBuilder();
const director = new ChairDirector(builder);
director.createChair();
const p: IkeaChair = builder.getChair();
